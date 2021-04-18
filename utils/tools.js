
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
  });
}

async function setUserAttribute(user, attribute, oldAttribute, newAttribute){
  let isChanged = false;
  let inUse = false;
  switch (attribute){
    case "name":
      let nameExist = await User.find({name:newAttribute}).lean().catch(err=>{console.log(err);});
      if(user[attribute] == oldAttribute && typeof newAttribute == 'string' &&  (oldAttribute == newAttribute && nameExist.length == 1 || nameExist.length == 0)){
        isChanged = true;
        user.name = newAttribute;
      }else{inUse = true}
    break;
    case "email":
      let emailExist = await User.find({email:newAttribute}).lean().catch(err=>{console.log(err);});
      if(user[attribute] == oldAttribute && typeof newAttribute == 'string' &&  (oldAttribute == newAttribute && emailExist.length == 1 || emailExist.length == 0)){
        isChanged = true;
        user.email = newAttribute;
      }else{inUse = true}
    break;
    default:
      if(user[attribute] && typeof newAttribute == typeof user[attribute]){
        isChanged = true;
        user[attribute] = newAttribute;
      }
    break;
  } 
  return {status:isChanged, user:user, inUse:inUse};
}

module.exports = { usersExist, setUserAttribute }