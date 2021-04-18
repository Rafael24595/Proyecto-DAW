
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Tools = require('../utils/tools');
const jwt = require('jsonwebtoken');

async function singUp(req, res){

    const {name, email, password} = req.body;
    const newUser = new User({name: name, password: password, email: email, admin:0, themeLists:[], likes: []});
    const token = jwt.sign({_id: newUser._id}, 'secret');
  
    await newUser.save();
    
    res.status(200).json({token});
  
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
  
    return res.status(200).json({token})
  
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

async function updateUserData(req, res){
  let attribute = req.body.attribute;
  let oldAttribute = req.body.oldAttribute;
  let newAttribute = req.body.newAttribute;
  let userName = req.body.userName;console.log(userName + " " + req.userNameToken)
  if(userName == req.userNameToken){
    let user = await User.findOne({name:userName}).lean();
    let userModify = await Tools.setUserAttribute(user, attribute, oldAttribute, newAttribute);
    if(userModify.status){
      await User.findOneAndUpdate({name:userName},user);
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
    res.headerSent = true;
  }
}

module.exports = { singUp, signIn, getUserData, getProfileData, searchUserDataById, searchUserDataByName, updateUserData };