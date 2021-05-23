
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Artist = mongoose.model('Artist');

async function usersExist(theme){
  return new Promise(async resolve=>{
    let cont = 0;
    for (let index = 0; index < theme.comments.length; index++) {
      let user = await User.findOne({"name":theme.comments[index].userName});
      theme.comments[index]['activeUser'] = (user != null) ? true : false;
      if(index == theme.comments.length - 1){
        resolve(theme)
      }
    }
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
      console.log('in')
      if(user[attribute] && typeof newAttribute == typeof user[attribute]){ console.log('inx')
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

async function orderThemeListThemes(themeList){
  return new Promise(resolve=>{
    let index = 0;
    themeList.sort((themeI, themeII)=>{
      return themeI.position - themeII.position;
    });
    themeList.forEach(theme=>{
      if(theme.position != index){
        themeList[index].position = index;
      }
      index++;
    });
    resolve(themeList)
  });
}

async function fillThemeList(themeList){
  return new Promise(resolve=>{
    var count = 0;
    var list = [];
    themeList.forEach(async theme => {
      await Artist.findOne({"id_artist":theme.listId}).lean().then(async artist=>{
        if(artist && artist.themeList && artist.themeList.length > 0){
          await artist.themeList.find(themeListData=>{
            if(themeListData.id == theme.themeId){
              themeListData.artist = {};
              themeListData.artist.id = artist.id_artist;
              themeListData.artist.name = artist.name;
              themeListData.artist.surname = artist.surname;
              themeListData.position = theme.position;
              list.push(themeListData);
              return true;
            }
            return false;
          });
        }
      });
      count++;
      if(count == themeList.length){
        resolve(list);
      }
    });
  });
  
}

async function simplifyThemeList(themeList){
  let list = [];
  themeList.forEach(themeData => {
    let listId = (themeData.artist && themeData.artist.id) ? themeData.artist.id :themeData.listId;
    let themeId = (themeData.id) ? themeData.id : themeData.themeId;
    let position = (themeData.position) ? themeData.position : 0;
    if(listId && listId){
      list.push({listId, themeId, position});
    }
  });
  return list;
}

async function simplifyUsers(users){
  let list = [];
  users.forEach(user=>{
    let name = user.name;
    let admin = user. admin;
    let description = user.description;
    list.push({name, admin, description});
  });
  return list;
}

async function getActualDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
}

module.exports = { usersExist, setUserAttribute, getArtistById, orderThemeListThemes, fillThemeList, simplifyThemeList, simplifyUsers, getActualDate }