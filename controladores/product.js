

require('../modelos/models');
const data = require('../data/artist-users-data');
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

function verifyToken(req, res, next){

  if (!req.headers.authorization){
    return res.status(401).send('Unauthorize Request');
  }

  const token =req.headers.authorization.split(' ')[1];

  if(token == null){
    return res.status(401).send('Unauthorize Request');
  }

  const payload = jwt.verify(token, 'secret');

  req.userId = payload._id;

  next();

}

module.exports = { generateDatabase, getData , singUp, signIn};
