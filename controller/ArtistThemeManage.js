require('../models/models');
const tools = require('../utils/tools');
const mongoose = require('mongoose');
const Artist = mongoose.model('Artist');
const FilesManage = require('../controller/FilesManage');

  async function getArtistDataCount(req, res){
    try {
      const artists = (parseInt(req.query.count) == -1) ? await Artist.find({}) : await Artist.find({}).limit(parseInt(req.query.count));
      return res.send(artists && artists.length ? artists : ["Not Found"]);
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
  
  }
  
  async function getArtistDataQuery(req, res){
    try {
      let queryData = req.body.queryData;console.log(queryData)
      let artistsQuery = await new Promise(resolve=>{
        let query = [];
        queryData.forEach(async data=>{
          let artistByName = await Artist.find({"name":{ "$regex": data, "$options": "i" }}).lean();
          //console.log(artistByName);
          query = query.concat(artistByName);
          let artistBySurname = await Artist.find({"surname":{ "$regex": data, "$options": "i" }}).lean();
          //console.log(artistBySurname);
          query = query.concat(artistBySurname);
          let artistByTags = await Artist.find({"tags":{ "$regex": data, "$options": "i" }}).lean();
          //console.log(artistByTags);
          query = query.concat(artistByTags);
          let themeByName = await Artist.find({"themeList.name":{ "$regex": data, "$options": "i" }}).lean();
          //console.log(themeByName);
          query = query.concat(themeByName);
          let themeByTags = await Artist.find({"themeList.tags":{ "$regex": data, "$options": "i" }}).lean();
          //console.log(artistByTags);
          query = query.concat(themeByTags);
          resolve(query);
        });
      });
      res.send({status:true, message:artistsQuery});
    } catch (error) {
      res.status(400).send({status: 'failure'});
    }
  
  }

  async function getArtistsAttributes(req, res){
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

  async function getArtistData(req, res){
    try {
      const artistId = req.query.artist;
      await Artist.findOne({"id_artist":artistId}).lean().then(async artist=>{
        if(artist){
          return res.send({status:true, artist:artist});
        }
        return res.status(404).send({status: false, artist:null})
      });
    }catch (error) {
      return res.status(400).send({
        status: 'failure'
      })
    }
  }

  async function getThemeData(req, res){
    try {
      const themeId = req.query.theme;
      await Artist.findOne({"themeList.id":themeId}).lean().then(async artist=>{
        let theme = artist.themeList.find(theme=>{return (theme.id == themeId)});
        theme['artist'] = {id:artist.id_artist,name:artist.name,surname:artist.surname};
        if(theme.comments.length > 0){
          theme = await tools.usersExist(theme);
        }
        return res.send(theme);
      });
    }catch (error) {
      return res.status(400).send({
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
        let newArtist = new Artist({id_artist: artistId, name: name, surname: surname, description: description, tags: tags, themeList:[]});
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
        console.log(mainArtistExists.themeList);
        console.log(targetArtistExists.themeList);
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
    let mainArtistId = req.body.mainArtistId;
    let targetArtistId = req.body.targetArtistId;
    let oldThemeId = req.body.themeId;
    let userName = req.body.userName;
    if(userName == req.userNameToken && req.isAdmin){
      let mainArtistExists = await Artist.findOne({id_artist:mainArtistId}).lean();
      let targetArtistExists = await Artist.findOne({id_artist:targetArtistId}).lean();
      if(mainArtistExists != null && targetArtistExists != null){
        let count = targetArtistExists.themeList.length + 1;
        let newThemeId = `${targetArtistExists.id_artist}-${count}`;
        let themeToReassign = mainArtistExists.themeList.find(theme=>{return (theme.id =oldThemeId)});
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
      if(artist[attribute] && typeof artist[attribute] == typeof value){
        if(attribute != 'id_artist' || attribute == 'id_artist' && await Artist.findOne({id_artist:value}) == null){
          artist[attribute] = value;
          if(attribute == 'id_artist'){
            artist = updateThemesId(artist);
          }
          await Artist.findOneAndUpdate({id_artist:artistId}, artist);
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
        res.headerSent = true;
      }
    }
    else{
      if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
    }
  }

  async function setTheme(req, res){
    let artistId = req.body.artistId;console.log(artistId)
    let name = req.body.name;console.log(name)
    let flag = req.body.flag;console.log(flag)
    let tags = req.body.tags;console.log(tags)
    let lyrics = req.body.lyrics;console.log(lyrics)
    let userName = req.body.userName;console.log(userName)

    if(artistId && userName == req.userNameToken && req.isAdmin){
      let artistExists = await Artist.findOne({id_artist:artistId}).lean();
      if(artistExists != null){
        let themeId = `${artistExists.id_artist}-${artistExists.themeList.length + 1}`
        artistExists.themeList.push({id: themeId, name: name, flag: flag, tags: tags, lyrics: lyrics, comments: [], likes: 0, dislikes: 0, views: 0});
        await Artist.findOneAndUpdate({id_artist:artistId}, artistExists);
        console.log(artistExists)
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
    let artistId = req.body.artistId;console.log(artistId)
    let themeId = req.body.themeId;console.log(themeId)
    let attribute = req.body.attribute;console.log(attribute)
    let value = req.body.value;console.log(value)
    let userName = req.body.userName;console.log(userName)
    
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
            res.status(200).json({status:true});
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

  module.exports = { getArtistDataCount, getArtistDataQuery , getArtistData, getThemeData, setArtistAttribute, setThemesAttribute, setArtist, removeArtist, reassignArtistTheme, reassignArtistThemes, setTheme, removeTheme, getArtistsAttributes };