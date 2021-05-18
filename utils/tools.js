
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Artist = mongoose.model('Artist');

async function usersExist(theme){
  return new Promise(async resolve=>{
    let cont = 0;
    for (let index = 0; index < theme.comments.length; index++) {
      let user = await User.findOne({"name":theme.comments[index].userName});
      theme.comments[index]['activeUser'] = (user) ? true : false;
      if(index == theme.comments.length - 1){
        resolve(theme)
      }
    }
    /*theme.comments.forEach(async comment=>{
      let user = await User.findOne({"name":comment.userName});
      console.log(user)
      theme.comments[cont]['activeUser'] = (user) ? true : false;
      console.log(theme.comments[cont].id)
      console.log(theme.comments[cont]['activeUser'])
      cont++;
      if(cont == theme.comments.length){
        resolve(theme)
      }
    });*/
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
    case "admin":
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

async function getArtistById(artistId){
  try {
    let artist = await Artist.findOne({"id_artist":artistId}).lean();
    return (artist != null) ? artist : undefined;
  }catch (error) {
    return undefined;
  }
}

module.exports = { usersExist, setUserAttribute, getArtistById }