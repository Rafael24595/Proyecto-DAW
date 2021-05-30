
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Artist = mongoose.model('Artist');
const Theme = mongoose.model('Theme');

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
      let nameExist = await User.find({name:newAttribute}).lean().catch(err=>{console.error(`Error: ${err}`);});
      if(user[attribute] == oldAttribute && typeof newAttribute == 'string' &&  (oldAttribute == newAttribute && nameExist.length == 1 || nameExist.length == 0)){
        isChanged = true;
        user.name = newAttribute;
      }else{inUse = true}
    break;
    case "email":
      let emailExist = await User.find({email:newAttribute}).lean().catch(err=>{console.error(`Error: ${err}`);});
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

async function setThemeArtist(themeList){
  let isSingle = false;
  if(themeList.id){
    themeList = [themeList];
    isSingle = true
  }
  for (let index = 0; index < themeList.length; index++) {
    let id_artist = themeList[index].artist.id;
    let artist = await Artist.findOne({id_artist:id_artist}).lean();
    themeList[index].artist.name = artist.name;
    themeList[index].artist.surname = artist.surname;
  }
  return (isSingle == false) ? themeList : themeList[0];
}

async function setArtistThemes(artistList){
  let isSingle = false;
  if(artistList.id_artist){
    artistList = [artistList];
    isSingle = true
  }
  artistList = (artistList.id_artist) ? [artistList] : artistList;
  for (let index = 0; index < artistList.length; index++) {
    let themes = await Theme.find({"artist.id":artistList[index].id_artist}).lean();
    artistList[index]['themeList'] = themes;
  }
  return (isSingle == false) ? artistList : artistList[0];
}

async function fillThemeList(themeList){
  return new Promise(resolve=>{
    var count = 0;
    var list = [];
    themeList.forEach(async themeData => {
      await Theme.findOne({"id":themeData.themeId}).lean().then(async theme=>{
        if(theme){
          let artist = await Artist.findOne({"id_artist":theme.artist.id}).lean();
          if(artist){
            theme.artist.name = artist.name;
            theme.artist.surname = artist.surname;
            theme.position = themeData.position;
            list.push(theme);
          }
        }
      });
      /*await Artist.findOne({"id_artist":theme.listId}).lean().then(async artist=>{
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
      });*/
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

  return new Date().getTime();
  
}

async function dropArtist(artistId, removeThemes){
  try {

    await Artist.deleteOne({id_artist:artistId});
    FilesManage.removeFileAction('artist_avatar', `${artistId}.png`);

    let themes = await Theme.find({'artist.id':artistId}).lean();
    if(removeThemes && themes){
      themes.forEach(async theme=>{
        let themeId = theme.id;
        await dropTheme(themeId);
      });
    }
    return true;
  } catch (error) {
    console.error(`Error: ${error}`);
    return false;
  }
}

async function dropTheme(themeId){
  try {
    await Theme.deleteOne({"id":themeId}).lean();
    FilesManage.removeFileAction('theme_cover', `${themeId}.png`);
    FilesManage.removeFileAction('theme_audio', `${themeId}.mp3`);
    return true;
  } catch (error) {
    console.error(`Error: ${error}`)
    return false;
  }
}

async function updateThemeAuthor(mainArtistId, targetArtistId, oldThemeId){
  try {
    let mainArtistExists = await Artist.findOne({id_artist:mainArtistId}).lean();
    let targetArtistExists = await Artist.findOne({id_artist:targetArtistId}).lean();
    let themeData = await Theme.findOne({"id":oldThemeId});
    if(mainArtistExists != null && targetArtistExists != null){
      let count = await Theme.find({'artist.id':targetArtistId}).lean();
      count = await checkEmptyThemePositions(count);

      themeData.id = `${targetArtistExists.id_artist}-${count}`
      themeData.artist.id = targetArtistExists.id_artist;
      themeData.markModified("artist");

      await themeData.save();

      FilesManage.renameFileAction('theme_cover', `${oldThemeId}.png`, `${themeData.id}.png`);
      FilesManage.renameFileAction('theme_audio', `${oldThemeId}.mp3`, `${themeData.id}.mp3`);
    }
    return true;
  } catch (error) {
    console.error(`Error: ${error}`)
    return false;
  }
}

async function updateThemesId(oldId, newId){
  try {
    let themes = await Theme.find({'artist.id':oldId});
    themes.forEach(theme=>{
      let idData = theme.id.split('-');
      if(idData.length > 1){
        theme.id = `${newId}-${idData[1]}`;
        theme.artist.id = newId
        theme.markModified("artist");
        theme.save();
      }
    });
    return themes;
  } catch (error) {
    console.error(`Error: ${error}`);
    return false;
  }
}

async function checkEmptyThemePositions(themeList){
  let position = 1;
  themeList = await themeListOrderByPosition(themeList);
  if(themeList){
    let count = 0
    while(count < themeList.length){
      let actualPosition = getThemePosition(themeList[count]);
      if(actualPosition != -1){
        if(actualPosition == position){
          position ++;
        }
        else{
          return position;
        }
      }
      else{
        return -1;
      }
      count ++;
    }
  }
  else{
    position = themeList.length + 1;
  }
  return position;
}

async function themeListOrderByPosition(themeList){
  let structure = true;
  themeList = themeList.sort((themeA, themeB)=>{
    let positionA = getThemePosition(themeA);
    let positionB = getThemePosition(themeB);
    if(positionA != -1 && positionB != -1){
      return positionA - positionB;
    }
    else{
      structure = false;
    }
  });
  return (structure) ? themeList : undefined;
}

function getThemePosition(theme){
  let position = theme.id.split('-');
  return (position[1] && parseInt(position[1]) != NaN) ? parseInt(position[1]) : -1;
}

module.exports = { usersExist, setUserAttribute, orderThemeListThemes, fillThemeList, simplifyThemeList, simplifyUsers, getActualDate, setThemeArtist, setArtistThemes, dropArtist, dropTheme, updateThemeAuthor, updateThemesId, checkEmptyThemePositions }