

require('../modelos/models');
const data = require('../data/artist-users-data');
const tools = require('../utils/tools');
const mongoose = require('mongoose');
const artist = mongoose.model('Artist');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

async function generateDatabase(req, res) {
  try {

    artist.remove({}, function(err) { 

      console.log('Database removed'); 

    });

    User.remove({}, function(err) { 

      console.log('Database removed'); 

    });

    restartArtist();

    restartUsers();
    
    return res.send({status: 'success'});

  } catch (error) {return res.status(400).send({status: 'failure'});}
}

async function restartArtist(){

  data.artistData.forEach(data=>{

    new artist(data).save();

  });

}

async function restartUsers(){

  data.usersData.forEach(data=>{

    new User(data).save();

  });

}

async function getData(req, res){

  try {
    const artists = (parseInt(req.query.count) == -1) ? await artist.find({}) : await artist.find({}).limit(parseInt(req.query.count));
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
    const theme = await artist.findOne({"themeList.id":themeId}).lean().then(async artist=>{
      let theme = artist.themeList.find(theme=>{return (theme.id == themeId)});
      if(theme.comments.length > 0){
        theme = await tools.usersExist(theme); console.log(theme)
      }
      return res.send(theme);
    });
  }catch (error) {console.log(error)
    return res.status(400).send({
      status: 'failure'
    })
  }

}

async function singUp(req, res){

  const {name, email, password} = req.body;
  const newUser = new User({name: name, password: password, email: email, admin:0, themeLists:[], likes: []});
  const token = jwt.sign({_id: newUser._id}, 'secret');

  await newUser.save();
  
  res.status(200).json({token});

}

async function signIn(req, res){

  const { email, password } = req.body;console.log(req.body)
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

async function publishComment(req, res){
  let themeId = req.body.themeId;console.log(themeId)
  let userName = req.body.userName;console.log(userName)
  let comment = req.body.comment;console.log(comment)
  let artistData = await artist.findOne({"themeList.id":themeId}).lean();
  let index = 0;
  artistData.themeList.find(theme=>{
    if(theme.id == themeId){
      artistData.themeList[index].comments.push({userName:userName,comment:comment});
      return true;
    }
    index++;
  });
  await artist.findOneAndUpdate({"themeList.id":themeId}, artistData);
  res.status(200).json({refresh:false})
}

async function getUserData(req, res){
  let userData = await searchUserData(req.userId);
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

async function searchUserDataByName(name){
  let userData = await User.findOne({name:name}).lean().catch(err=>{console.log(err);})
  return userData 
}

async function searchUserData(userId){
  let userData = await User.findOne({_id:userId}).catch(err=>{console.log(err);})
  return userData 
}

async function checkToken(req, res, next){

  let id;
  let token = req.headers.authorization.split(' ')[1];
  let exsistUser;

  req.validToken = false;
  req.userToken = false; 

  try {
    let payload = jwt.verify(token, 'secret');
    id = payload._id;
    req.validToken = true;
  } catch (error) {}

  exsistUser = (id) ? await searchUserData(id) : undefined;

  if(exsistUser){
    req.validToken = true;
  }

  let userId = await searchUserDataByName(req.query.profile);

  if(userId && userId['_id'] == id){console.log('in')
    req.userToken = true; 
  }

  next();

}

async function verifyToken(req, res, next){

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

  exsistUser = await searchUserData(payload._id);

  if(!exsistUser){
    return res.status(401).send('{"destroyToken":"true","message":"Token no válido"}');
  }

  req.userId = payload._id;

  next();

}

module.exports = { generateDatabase, getData , singUp, signIn, verifyToken, checkToken, getUserData, getProfileData, getThemeData, publishComment};