
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Artist = mongoose.model('Artist');
const Tools = require('../utils/tools');
const jwt = require('jsonwebtoken');

async function singUp(req, res){

    const {name, email, password} = req.body;
    let newUser = new User({name: name, password: password, email: email, admin:0, themeLists:[], likes: []});
    newUser = await setBasicThemeLists(newUser);
    const token = jwt.sign({_id: newUser._id}, 'secret');
  
    await newUser.save();
    
    res.status(200).json({status:true, token:token, user: newUser});
  
  }
  
  async function setBasicThemeLists(user){
    console.log(user)
    user.themeLists.push({
      "name":'@likes-list',
      "userView":"true",
      "userManage":"false",
      "privateState":"true",
      "list":[]
    });
    user.themeLists.push({
      "name":'@dislikes-list',
      "userView":"false",
      "userManage":"false",
      "privateState":"true",
      "list":[]
    });
    return user;
  }

  async function signIn(req, res){
  
    const { email, password } = req.body;
    const user = await User.findOne({email});
  
    if (!user){
      return res.status(401).send('{"attribute":"email","message":"La cuenta no existe"}')
    }
    
    if(user.password != password){
      return res.status(401).send('{"attribute":"password","message":"Contraseña incorrecta"}');
    }
    
    const token = jwt.sign({_id: user._id}, 'secret');
  
    return res.status(200).json({status:true, token:token, user: user});
  
  }

async function searchUserDataByName(name){
    let userData = await User.findOne({name:name}).lean().catch(err=>{console.log(err);})
    return userData 
  }
  
async function searchUserDataById(userId){
    let userData = await User.findOne({_id:userId}).catch(err=>{console.log(err);})
    return userData 
}

async function getUserData(req, res){
    let userData = await searchUserDataById(req.userId);
    res.status(200).send(userData);
  }
  
async function getProfileData(req, res){
  let profileName = req.query.profile;
  let profileData = await User.findOne({name:profileName}).catch(err=>{console.log(err);})
  if(profileData){
    if(req.userToken == true){
      res.status(200).send({validToken:req.validToken, data:profileData});
    }
    else{
      res.status(200).send({validToken:req.validToken, data:{name:profileData.name, admin:profileData.admin, themeLists: profileData.themeLists}});
    }
  }
  else{
    res.status(404).send('El usuario no existe');
  }
  //if(!req.validToken){res.status(404).send({"destroyToken":"true","message":"Token mal formado"})}
}

async function getThemesFromList(req, res){
  let themeListName = req.body.themeListName;
  let profileName = req.body.profile;

  if(req.existsUser){console.log('34')
    let profileData = await User.findOne({name:profileName}).catch(err=>{console.log(err);});
    let themeList = profileData.themeLists.find(list=>{return(list.name == themeListName)});
    if(JSON.parse(themeList && (req.userToken == true && JSON.parse(themeList.userView) || req.userToken != true && JSON.parse(themeList.userView) && !JSON.parse(themeList.privateState)))){
      console.log('cojones')
      themeList = await fillThemeList(themeList.list);
      console.log(themeList)
      res.status(200).json({status:true, list:themeList});
    }
    else{
      res.status(404).json({status:false,list:'not-found'});
    }
  }
  else{
    res.status(404).json({status:false,list:'not-found'});
  }
}

async function fillThemeList(themeList){
  return new Promise(resolve=>{
    var count = 0;
    var list = [];
    themeList.forEach(async theme => {
      console.log(theme)
      await Artist.findOne({"id_artist":theme.listId}).lean().then(async artist=>{
        console.log('inx')
        if(artist && artist.themeList && artist.themeList.length > 0){
          await artist.themeList.find(themeListData=>{
            if(themeListData.id == theme.themeId){
              themeListData.artist = {};
              themeListData.artist.id = artist.id_artist;
              themeListData.artist.name = artist.name;
              themeListData.artist.surname = artist.surname;
              console.log(themeListData)
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

async function updateUserData(req, res){
  let attribute = req.body.attribute;
  let oldAttribute = req.body.oldAttribute;
  let newAttribute = req.body.newAttribute;
  let userName = req.body.userName;
  if(userName == req.userNameToken){
    let user = await User.findOne({name:userName}).lean();
    let userModify = await Tools.setUserAttribute(user, attribute, oldAttribute, newAttribute);
    if(userModify.status){
      await User.findOneAndUpdate({name:userName}, user);
      res.headerSent = true;
      res.status(200).json({status:true});
    }
    else{
      let message = (userModify.inUse) ? 'in-use' : 'invalid-petition';
      if(!res.headerSent) res.status(401).json({status:message});
      res.headerSent = true;
    }
  }
  else{
    if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
  }
}

async function checkPassword(req, res){
  let userName = req.body.userName;
  let password = req.body.password;
  if(userName == req.userNameToken){
    let user = await User.findOne({name:userName}).lean();
    res.headerSent = true;
    (user.password == password) ? res.status(200).json({status:true}) : res.status(401).json({status:false});
  }
  else{
    if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
  }
}

module.exports = { singUp, signIn, getUserData, getProfileData, searchUserDataById, searchUserDataByName, updateUserData, checkPassword, getThemesFromList };