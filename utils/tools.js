
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');

async function usersExist(theme){

    return new Promise(resolve=>{
      let cont = 0;
      theme.comments.forEach(async comment=>{
        let user = await User.findOne({"name":comment.userName});
        theme.comments[cont]['activeUser'] = (user) ? true : false;
        cont++;
        if(cont == theme.comments.length){
          resolve(theme)
        }
      });
    })
  }

  module.exports = { usersExist }