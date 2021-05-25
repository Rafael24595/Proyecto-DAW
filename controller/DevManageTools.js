require('../models/models');
const data = require('../data/artist-users-data');
const mongoose = require('mongoose');
const artist = mongoose.model('Artist');
const User = mongoose.model('User');
const Theme = mongoose.model('Theme');

async function generateDatabase(req, res) {
    try {
      artist.remove({}, function(err) {console.log('Artists removed');});
      Theme.remove({}, function(err) {console.log('Users removed');});
      User.remove({}, function(err) {console.log('Users removed');});

      restartArtist();
      restartThemes();
      restartUsers();

      return res.send({status: 'success'});
  
    } catch (error) {return res.status(400).send({status: 'failure'});}
  }
  
  async function restartArtist(){
    data.artistData.forEach(data=>{new artist(data).save();});
  }
  
  async function restartThemes(){
    data.themesData.forEach(data=>{new Theme(data).save();});
  }

  async function restartUsers(){
    data.usersData.forEach(data=>{new User(data).save();});
  }

  module.exports = { generateDatabase };