require('../models/models');
const Tools = require('../utils/tools');
const mongoose = require('mongoose');
const Artist = mongoose.model('Artist');
const Theme = mongoose.model('Theme');
const FilesManage = require('../controller/FilesManage');

  async function getArtistData(req, res){
    try {
      const artistId = req.query.artist;
      let artist = await Artist.findOne({"id_artist":artistId}).lean();
      artist = await Tools.setArtistThemes(artist);
      if(artist){
        res.status(200).send({status:true, artist});
      }
      else{
        res.status(404).send({status: false, artist:null})
      }
    }catch (error) {
      console.log(error)
      res.status(400).send({status: 'failure'});
    }
  }

  async function getArtistDataQuery(req, res){
    try {
      let queryData = req.body.queryData;
      let limitQuery = req.body.limitQuery;
      let pageQuery = req.body.pageQuery;
      let fieldsQuery = req.body.fieldsQuery;
      if(Array.isArray(queryData) && queryData.length > 0 && Array.isArray(fieldsQuery) && fieldsQuery.length > 0 && typeof limitQuery == 'number') {
        let artistsQuery = await new Promise(resolve=>{
          let query = {};
          queryData.forEach(async data=>{
            if(fieldsQuery.indexOf('name') != -1 || fieldsQuery.indexOf('all') != -1){
              let artistByName = await Artist.paginate({"name":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              query['name'] = artistByName;
            }
            if(fieldsQuery.indexOf('surname') != -1 || fieldsQuery.indexOf('all') != -1){
              let artistBySurname = await Artist.paginate({"surname":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              query['surname'] = artistBySurname;
            }
            if(fieldsQuery.indexOf('tags') != -1 || fieldsQuery.indexOf('all') != -1){
              let artistByTags = await Artist.paginate({"tags":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              query['tags'] = artistByTags;
            }
            if(fieldsQuery.indexOf('themeListName') != -1 || fieldsQuery.indexOf('all') != -1){
              let themeByName = await Theme.paginate({"name":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              themeByName.docs = await Tools.setThemeArtist(themeByName.docs);
              query['themeListName'] = themeByName;
            }
            if(fieldsQuery.indexOf('themeListTags') != -1 || fieldsQuery.indexOf('all') != -1){
              let themeByTags = await Theme.paginate({"tags":{ "$regex": data, "$options": "i" }}, {limit: limitQuery, page: pageQuery});
              console.log(themeByTags)
              themeByTags.docs = await Tools.setThemeArtist(themeByTags.docs);
              query['themeListTags'] = themeByTags;
            }
            resolve(query);
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

  async function getArtistsId(req, res){
    try {
      let attribute = req.query.attribute;
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
      const themeId = req.query.theme;
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
    let artistId = req.body.artistId;
    let userName = req.body.userName;

    if(userName == req.userNameToken && req.isAdmin){
      let artistExists = await Artist.findOne({id_artist:artistId}).lean();
      if(artistExists != null){
        await Artist.deleteOne({id_artist:artistId});
        FilesManage.removeFileAction('artist_avatar', `${artistId}.png`);
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

  async function reassignArtistThemes(req, res){
    let mainArtistId = req.body.mainArtistId;
    let targetArtistId = req.body.targetArtistId;
    let userName = req.body.userName;
    if(userName == req.userNameToken && req.isAdmin){
      let mainArtistExists = await Artist.findOne({id_artist:mainArtistId}).lean();
      let targetArtistExists = await Artist.findOne({id_artist:targetArtistId}).lean();
      if(mainArtistExists != null && targetArtistExists != null){
        let count = targetArtistExists.themeList.length + 1;
        mainArtistExists.themeList.forEach(theme=>{
          let oldThemeId = theme.id;
          let newThemeId = `${targetArtistExists.id_artist}-${count}`;
          theme.id = newThemeId;
          targetArtistExists.themeList.push(theme);console.log(oldThemeId)
          FilesManage.renameFileAction('theme_cover', `${oldThemeId}.png`, `${newThemeId}.png`);
          FilesManage.renameFileAction('theme_audio', `${oldThemeId}.mp3`, `${newThemeId}.mp3`);
          count++;

        });
        mainArtistExists.themeList = [];
        await Artist.findOneAndUpdate({id_artist:mainArtistId}, mainArtistExists);
        await Artist.findOneAndUpdate({id_artist:targetArtistId}, targetArtistExists);
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

  async function reassignArtistTheme(req, res){
    let mainArtistId = req.body.mainArtistId;console.log(mainArtistId)
    let targetArtistId = req.body.targetArtistId;console.log(targetArtistId)
    let oldThemeId = req.body.themeId;console.log(oldThemeId)
    let userName = req.body.userName;
    if(userName == req.userNameToken && req.isAdmin){
      let mainArtistExists = await Artist.findOne({id_artist:mainArtistId}).lean();
      let targetArtistExists = await Artist.findOne({id_artist:targetArtistId}).lean();
      if(mainArtistExists != null && targetArtistExists != null){
        let count = targetArtistExists.themeList.length + 1;
        let newThemeId = `${targetArtistExists.id_artist}-${count}`;
        let themeToReassign = mainArtistExists.themeList.find(theme=>{return (theme.id == oldThemeId)});
        let themeIndex = mainArtistExists.themeList.map(theme=>{return theme.id}).indexOf(oldThemeId); 
        themeToReassign.id = newThemeId;
        targetArtistExists.themeList.push(themeToReassign);
        FilesManage.renameFileAction('theme_cover', `${oldThemeId}.png`, `${newThemeId}.png`);
        FilesManage.renameFileAction('theme_audio', `${oldThemeId}.mp3`, `${newThemeId}.mp3`);
        mainArtistExists.themeList.splice(themeIndex, 1);
        mainArtistExists = await updateThemesId(mainArtistExists);
        await Artist.findOneAndUpdate({id_artist:mainArtistId}, mainArtistExists);
        await Artist.findOneAndUpdate({id_artist:targetArtistId}, targetArtistExists);
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
    let artistId = req.body.artistId;console.log(artistId)
    let attribute = req.body.attribute;console.log(attribute)
    let value = req.body.value;console.log(value)
    let userName = req.body.userName;console.log(userName)
    
    if(userName == req.userNameToken && req.isAdmin){
      let artist = await Artist.findOne({id_artist:artistId}).lean();
      if(artist[attribute] != undefined && typeof artist[attribute] == typeof value){
        if(attribute != 'id_artist' || attribute == 'id_artist' && await Artist.findOne({id_artist:value}) == null){
          artist[attribute] = value;
          if(attribute == 'id_artist'){
            artist = await updateThemesId(artist);
          }
          console.log(artist)
          await Artist.findOneAndUpdate({id_artist:artistId}, artist);
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
        let themeId = `${artistExists.id_artist}-${artistExists.themeList.length + 1}`
        artistExists.themeList.push({id: themeId, name: name, flag: flag, tags: tags, lyrics: lyrics, comments: [], likes: 0, dislikes: 0, views: 0});
        await Artist.findOneAndUpdate({id_artist:artistId}, artistExists);
        console.log(artistExists)
        res.headerSent = true;
        res.status(200).json({status:true, message:artistExists.themeList});
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
    let artistId = req.body.artistId;
    let themeId = req.body.themeId;
    let userName = req.body.userName;

    if(userName == req.userNameToken && req.isAdmin){
      let artistExists = await Artist.findOne({id_artist:artistId}).lean();
      if(artistExists != null){
        let themeExists = artistExists.themeList.map(theme=>{return theme.id}).indexOf(themeId);
        if(themeExists != -1){
          artistExists.themeList.splice(themeExists, 1);
          FilesManage.removeFileAction('theme_cover', `${themeId}.png`);
          FilesManage.removeFileAction('theme_audio', `${themeId}.mp3`);
          await Artist.findOneAndUpdate({id_artist:artistId}, artistExists);
          console.log(artistExists.themeList)
          res.headerSent = true;
          res.status(200).json({status:true});
        }
        else{
          if(!res.headerSent) res.status(401).json({status:'id-not-exists'});
          res.headerSent = true;
        }
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
    let artistId = req.body.artistId;
    let themeId = req.body.themeId;
    let attribute = req.body.attribute;
    let value = req.body.value;
    let userName = req.body.userName;
    
    if(userName == req.userNameToken && req.isAdmin){
      let artist = await Artist.findOne({id_artist:artistId}).lean();
      let themeIndex = artist.themeList.map(theme=>{return theme.id}).indexOf(themeId);
      if(themeIndex != -1){
        console.log(artist.themeList[themeIndex][attribute], typeof artist.themeList[themeIndex][attribute] == typeof value)
        if(artist.themeList[themeIndex][attribute] && typeof artist.themeList[themeIndex][attribute] == typeof value){
          if(attribute != 'id'){
            console.log( artist.themeList[themeIndex])
            artist.themeList[themeIndex][attribute] = value;
            console.log( artist.themeList[themeIndex])
            await Artist.findOneAndUpdate({id_artist:artistId}, artist);
            res.headerSent = true;
            res.status(200).json({status:true, message:artist.themeList[themeIndex]});
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

  async function updateThemesId(artist){
    var cont = 0;
    artist.themeList.forEach(theme => {
      artist.themeList[cont].id = artist.id_artist + "-" + (cont + 1);
      cont++;
    });
    return artist;
  }

  module.exports = { getArtistDataQuery , getArtistData, getThemeData, setArtistAttribute, setThemesAttribute, setArtist, removeArtist, reassignArtistTheme, reassignArtistThemes, setTheme, removeTheme, getArtistsId };