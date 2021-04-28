require('../models/models');
const tools = require('../utils/tools');
const mongoose = require('mongoose');
const Artist = mongoose.model('Artist');

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

  async function setArtistAttribute(req, res){
    let artistId = req.body.artistId;console.log(artistId)
    let attribute = req.body.attribute;console.log(attribute)
    let value = req.body.value;console.log(value)
    let userName = req.body.userName;console.log(userName)
    
    if(userName == req.userNameToken && req.isAdmin){
      console.log(userName == req.userNameToken, req.isAdmin)
      let artist = await Artist.findOne({id_artist:artistId}).lean();
      if(artist[attribute] && typeof artist[attribute] == typeof value){
        if(attribute != 'id_artist' || attribute == 'id_artist' && await Artist.findOne({id_artist:value}) == null){
          artist[attribute] = value;
          if(attribute == 'id_artist'){
            artist = updateThemesId(artist);
          }
          await Artist.findOneAndUpdate({id_artist:artistId});
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

  async function updateThemesId(artist){
    var cont = 0;
    artist.themeList.forEach(theme => {
      artist.themeList[cont] = theme.id = artist.id_artist + (cont + 1);
      cont++;
    });
    return artist;
  }

  module.exports = { getArtistDataCount , getArtistData, getThemeData, setArtistAttribute };