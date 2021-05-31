
require('../models/models');
const jwt = require('jsonwebtoken');
const userManage = require('./UserManage');
const secretWord = 'secret';

async function checkTokenDate(req, res){

  let userName = req.query.userName;
  let token = req.headers.authorization.split(' ')[1];
  let limit = 180000;
  let expirationTimeNotification = true;
  let message = {code:'correct', time:0};

  try {
    
    let payload = jwt.verify(token, 'secret');
    let existsUser = await userManage.searchUserDataById(payload._id);

    if(existsUser && existsUser.name == userName){
      let expirationTime = new Date(payload['exp'] * 1000) - new Date();
      expirationTimeNotification = (expirationTime > limit);
      message.code = (expirationTime > limit) ? message.code : `warn`;
      message.time = expirationTime;
    }
    else{
      res.status(401).send({status:false, message:'Unauthorize Request'});
    }

  } catch (err) {
    console.error(`Error: ${err}`);
    expirationTimeNotification = false;
    message.code = (err == 'TokenExpiredError: jwt expired') ? 'expired' : message.code;
  }

  res.status(200).send({status: expirationTimeNotification, message: message});

}

async function extendSession(req, res){

  let userName = req.query.userName;
  let token = req.headers.authorization.split(' ')[1];

  try {
    
    let payload = jwt.verify(token, 'secret');
    let existsUser = await userManage.searchUserDataById(payload._id);

    if(existsUser && existsUser.name == userName){
      const token = jwt.sign({_id: payload._id}, secretWord, { expiresIn: 900 });
      res.status(200).send({status: true, message: {token}});
    }
    else{
      res.status(401).send({status:false, message:'Unauthorize Request'});
    }

  } catch (err) {
    console.error(`Error: ${err}`);
    expirationTimeNotification = false;
    message.code = (err == 'TokenExpiredError: jwt expired') ? 'expired' : message.code;
  }

}

async function verifyToken (req, res, next){

  let id;
  let token = req.headers.authorization.split(' ')[1];
  let existsUser;

  req.validToken = false;
  req.userToken = false; 
  req.existsUser = false

  try {
    let payload = jwt.verify(token, 'secret');
    id = payload._id;
    req.validToken = true;
  } catch (error) {}

  existsUser = (id) ? await userManage.searchUserDataById(id) : undefined;

  if(existsUser){
    req.validToken = true;
  }

  let userName = (Object.keys(req.query).length != 0) ? req.query.profile : (req.body.profile) ? req.body.profile : req.params.user;
  let userId = await userManage.searchUserDataByName(userName);

  if(userId){
    req.existsUser = true;
  }

  if(userId && userId['_id'] == id){
    req.userToken = true; 
  }

  next();

}



async function verifyTokenStrict(req, res, next){

  let payload;
  let token;
  let exsistUser;

  if (!req.headers.authorization){
    return res.status(401).send('Unauthorize Request');
  }

  token =req.headers.authorization.split(' ')[1];

  if(token == null){
    return res.status(401).send('Unauthorize Request');
  }

  try {
    payload = jwt.verify(token, 'secret');
  } catch (error) {
    return res.status(401).send('{"destroyToken":"true","message":"Token mal formado"}');
  }

  exsistUser = await userManage.searchUserDataById(payload._id);

  if(!exsistUser){
    return res.status(401).send('{"destroyToken":"true","message":"Token no válido"}');
  }

  let user = await userManage.searchUserDataById(payload._id)

  req.userId = payload._id;
  req.isAdmin = (parseInt(user.admin) == 1) ? true : false;
  req.userNameToken = user.name;
  res.headerSent = false;

  next();

}

module.exports = { verifyTokenStrict, verifyToken, checkTokenDate, extendSession };
