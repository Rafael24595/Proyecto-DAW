require('../models/models');
const Tools = require('../utils/tools');
const mongoose = require('mongoose');
const Artist = mongoose.model('Artist');
const Theme = mongoose.model('Theme');

  async function getArtistData(req, res){
    try {
      const artistId = req.params.artist;
      let artist = await Artist.findOne({"id_artist":artistId}).lean();
      artist = await Tools.setArtistThemes(artist);
      if(artist){
        res.status(200).send({status:true, artist});
      }
      else{
        res.status(404).send({status: false, artist:null})
      }
    }catch (error) {
      console.error(error)
      res.status(400).send({status: 'failure'});
    }
  }

  async function getArtistDataQuery(req, res){
    try {
      let queryData = JSON.parse(req.query.query);
      let limitQuery = parseInt(req.params.limit);
      let pageQuery = parseInt(req.params.page);
      let fieldsQuery = JSON.parse(req.query.fields);
      if(Array.isArray(queryData) && queryData.length > 0 && Array.isArray(fieldsQuery) && fieldsQuery.length > 0 && typeof limitQuery == 'number') {
        let artistsQuery = await new Promise(resolve=>{
          let query = {};
          let cont = 0;
          queryData.forEach(async data=>{
            query[data] = {};
            if(fieldsQuery.indexOf('name') != -1 || fieldsQuery.indexOf('all') != -1){
              if(!query[data]['name']) query[data]['name'] = [];
              let artistByName = await Artist.paginate({"name":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              query[data].name = artistByName;
            }
            if(fieldsQuery.indexOf('surname') != -1 || fieldsQuery.indexOf('all') != -1){
              if(!query[data]['surname']) query[data]['surname'] = [];
              let artistBySurname = await Artist.paginate({"surname":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              query[data].surname = artistBySurname;
            }
            if(fieldsQuery.indexOf('tags') != -1 || fieldsQuery.indexOf('all') != -1){
              if(!query[data]['tags']) query[data]['tags'] = [];
              let artistByTags = await Artist.paginate({"tags":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              query[data].tags = artistByTags;
            }
            if(fieldsQuery.indexOf('themeListName') != -1 || fieldsQuery.indexOf('all') != -1){
              if(!query[data]['themeListName']) query[data]['themeListName'] = [];
              let themeByName = await Theme.paginate({"name":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              themeByName.docs = await Tools.setThemeArtist(themeByName.docs);
              query[data].themeListName = themeByName;
            }
            if(fieldsQuery.indexOf('themeListTags') != -1 || fieldsQuery.indexOf('all') != -1){
              if(!query[data]['themeListTags']) query[data]['themeListTags'] = [];
              let themeByTags = await Theme.paginate({"tags":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              themeByTags.docs = await Tools.setThemeArtist(themeByTags.docs);
              query[data].themeListTags = themeByTags;
            }
            if(fieldsQuery.indexOf('artist') != -1){
              if(!query[data]['artist']) query[data]['artist'] = [];
              let artistByTags = await Artist.paginate(
                {"$or":[
                  {"name":{ "$regex": data, "$options": "i" }},
                  {"surname":{ "$regex": data, "$options": "i" }},
                  {"tags":{ "$regex": data, "$options": "i" }}
                ]},
                {limit: limitQuery, page: pageQuery});
              query[data]['artist'] = artistByTags;
            }
            if(fieldsQuery.indexOf('theme') != -1){
              if(!query[data]['theme']) query[data]['theme'] = [];
              let themeByTags = await Theme.paginate(
                {"$or":[
                  {"name":{ "$regex": data, "$options": "i" }},
                  {"tags":{ "$regex": data, "$options": "i" }}
                ]},
                {limit: limitQuery, page: pageQuery});
              themeByTags.docs = await Tools.setThemeArtist(themeByTags.docs);
              query[data]['theme'] = themeByTags;
            }
            cont ++;
            if(cont == queryData.length){
              resolve(query);
            }
          });
        });
        res.send({status:true, message:artistsQuery});
      }
      else{
        res.status(404).send({status: 'Bad petition'});
      }
    } catch (error) {
      res.status(400).send({status: 'Failure'});
    }
  
  }

  async function getArtistAttributte(req, res){

    let attribute = req.params.attribute;

    switch (attribute){

      case 'id_artist':
        getArtistsId(req, res);
      break;

      default:
        res.status(404).send({status:'Not Found'});
      break

    }

  }

  async function getArtistsId(req, res){
    try {
      let attribute = req.params.attribute;
      let artists = await Artist.find({}).lean();
      let artistsList = artists.map(artist=>{return (artist[attribute]) ? artist[attribute] : artist.id_artist});
      if(attribute == 'id_artist'){
        artistsList = await new Promise(resolve=>{
          artistsList.forEach(artist=>{
            let index = artistsList.indexOf(artist);
            artistsList[index] = `${artistsList[index]}&${artists[index].name} ${artists[index].surname}`;
          });
          resolve(artistsList);
        })
      }
      res.send({status: true, message: artistsList});
    } catch (error) {
      res.status(400).send({status:'failure'});
    }
  }

  async function getThemeData(req, res){
    try {
      const themeId = req.params.theme;
      let theme = await Theme.findOne({"id":themeId}).lean();
      theme = await Tools.setThemeArtist(theme);
      if(theme.comments.length > 0){
        theme = await Tools.usersExist(theme);
      }
      res.send(theme);
    }catch (error) {
      res.status(400).send({
        status: 'failure'
      })
    }
  }

  async function setArtist(req, res){
    let artistId = req.body.artistId;
    let name = req.body.name;
    let surname = req.body.surname;
    let description = req.body.description;
    let tags = req.body.tags;
    let userName = req.body.userName;

    if(artistId && userName == req.userNameToken && req.isAdmin){
      let artistExists = await Artist.findOne({id_artist:artistId}).lean();
      if(artistExists == null){
        let newArtist = new Artist({id_artist: artistId, name: name, surname: surname, description: description, tags: tags});
        await newArtist.save();
        res.headerSent = true;
        res.status(200).json({status:true});
      }
      else{
        if(!res.headerSent) res.status(401).json({status:'id-exists'});
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  async function removeArtist(req, res){
    let artistId = req.params.id;
    let userName = req.query.user;

    if(userName == req.userNameToken && req.isAdmin){
      let artistExists = await Artist.findOne({id_artist:artistId}).lean();
      if(artistExists != null){
        let status = await Tools.dropArtist(artistId, true);
        let themes = await Theme.find({'artist.id':artistId}).lean();
        themes.forEach(theme=>{
          let id = theme.id;
          Tools.dropTheme(id);
        });
        res.headerSent = true;
        res.status(200).json({status:true});
      }
      else{
        if(!res.headerSent) res.status(204).json({status:'id-not-exists'});
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  async function reassignArtistTheme(req, res){
    let id = req.params.id;

    if(id){
      if(id == 'all'){
        reassignArtistThemes(req, res);
      }
      else{
        reassignArtistThemeSingle(req, res);
      }
    }
    else{
      res.status(401).json({status:'Not found'});
    }
    
  }

  async function reassignArtistThemes(req, res){
    try {
      let mainArtistId = req.params.main;console.log(mainArtistId)
      let targetArtistId = req.params.target;console.log(targetArtistId)
      let userName = req.body.userName;console.log(userName)
      if(userName == req.userNameToken && req.isAdmin){
        let themes = await Theme.find({"artist.id":mainArtistId}).lean();
        if(themes != null){
          for (let index = 0; index < themes.length; index++) {
            let status = await Tools.updateThemeAuthor(mainArtistId, targetArtistId, themes[index].id);
          }
          res.headerSent = true;
          res.status(200).json();
        }
        else{
          if(!res.headerSent) res.status(401).json({status:'id-not-exists'});
          res.headerSent = true;
        }
      }
      else{
        if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
      }
    } catch (error) {
      console.error(`Error: ${error}`)
      res.status(401).json({status:'Fatal error'})
    }
  }

  async function reassignArtistThemeSingle(req, res){
    let mainArtistId = req.params.main;console.log(mainArtistId)
    let targetArtistId = req.params.target;console.log(targetArtistId)
    let oldThemeId = req.params.id;console.log(oldThemeId)
    let userName = req.body.userName;console.log(userName)
    if(userName == req.userNameToken && req.isAdmin){
      let status = await Tools.updateThemeAuthor(mainArtistId, targetArtistId, oldThemeId);
      if(status){
        res.headerSent = true;
        res.status(200).json({status:true});
      }
      else{
        if(!res.headerSent) res.status(401).json({status:'id-not-exists'});
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  async function setArtistAttribute(req, res){
    let artistId = req.params.artist;
    let attribute = req.params.attribute;
    let value = req.params.value;
    let userName = req.body.userName;
    
    if(userName == req.userNameToken && req.isAdmin){
      let artist = await Artist.findOne({id_artist:artistId}).lean();
      if(artist[attribute] != undefined && typeof artist[attribute] == typeof value){
        if(attribute != 'id_artist' || attribute == 'id_artist' && await Artist.findOne({id_artist:value}) == null){
          artist[attribute] = value;
          await Artist.findOneAndUpdate({id_artist:artistId}, artist);
          if(attribute == 'id_artist'){
            let themes = await Tools.updateThemesId(artistId, value);
            if(themes){
              artist.themeList = themes;
            }
          }
          else{
            let themes = await Theme.find({'artist.id':artist.id_artist}).lean();
            artist.themeList = themes;
          }
          res.headerSent = true;
          res.status(200).json({status:true, message: artist});
        }
        else{
          if(!res.headerSent) res.status(401).json({status:'id-exists'});
          res.headerSent = true;
        }
      }
      else{
        if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  async function setTheme(req, res){
    let artistId = req.body.artistId;
    let name = req.body.name;
    let flag = req.body.flag;
    let tags = req.body.tags;
    let lyrics = req.body.lyrics;
    let userName = req.body.userName;

    if(artistId && userName == req.userNameToken && req.isAdmin){
      let artistExists = await Artist.findOne({id_artist:artistId}).lean();
      if(artistExists != null){
        let position = await Theme.find({'artist.id':artistId}).lean();
        position = await Tools.checkEmptyThemePositions(position);

        let newTheme = new Theme({
          "id": `${artistId}-${position}`,
          "name": name,
          "flag": flag,
          "tags": tags,
          "lyrics": lyrics,
          "comments": [],
          "likes": 0,
          "dislikes": 0,
          "views": 0,
          "artist":{
            "id":artistId
          }
        });console.log('wha!')

        await newTheme.save();
        
        res.headerSent = true;
        res.status(200).json({status:true, message:newTheme});
      }
      else{
        if(!res.headerSent) res.status(401).json({status:'id-not-exists'});
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  async function removeTheme(req, res){
    
    let themeId = req.params.id;
    let userName = req.query.user;

    if(userName == req.userNameToken && req.isAdmin){
      let themeExists = await Theme.findOne({"id":themeId}).lean();
      if(themeExists){
        let status = await Tools.dropTheme(themeId);
        res.headerSent = true;
        res.status(200).json({status:true});
      }
      else{
        if(!res.headerSent) res.status(401).json({status:'id-not-exists'});
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  async function setThemesAttribute(req, res){
    let themeId = req.params.theme;
    let attribute = req.params.attribute;
    let value = req.params.value;
    let userName = req.body.userName;
    
    if(userName == req.userNameToken && req.isAdmin){
      let theme = await Theme.findOne({'id':themeId});
      if(theme != null){
        if(theme[attribute] != undefined && typeof theme[attribute] == typeof value){
          if(attribute != 'id'){
            theme[attribute] = value;
            theme.markModified(attribute);
            theme.save();
            res.headerSent = true;
            res.status(200).json({status:true, message:theme});
          }
          else{
            if(!res.headerSent) res.status(403).json({status:'cannot-modify-attribute'});
            res.headerSent = true;
          }
        }
        else{
          if(!res.headerSent) res.status(403).json({status:'invalid-petition'});
          res.headerSent = true;
        }
      }
      else{
        if(!res.headerSent) res.status(404).json({status:'source-not-found'});
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  module.exports = { getArtistDataQuery , getArtistData, getThemeData, setArtistAttribute, setThemesAttribute, setArtist, removeArtist, reassignArtistTheme, reassignArtistThemes, setTheme, removeTheme, getArtistAttributte };