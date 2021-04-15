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
  
  async function getThemeData(req, res){
    try {
      const themeId = req.query.theme;
      await Artist.findOne({"themeList.id":themeId}).lean().then(async artist=>{
        let theme = artist.themeList.find(theme=>{return (theme.id == themeId)});
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

  module.exports = { getArtistDataCount , getThemeData };