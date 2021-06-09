
require('../models/models');
const CryptoJS = require("crypto-js");
const fs = require("fs");
const path = require('path');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Tools = require('../utils/tools');
const Mail = require('../utils/mail').Mail;
const jwt = require('jsonwebtoken');
const secretWord = 'secret';

async function singUp(req, res){

    const {name, email, password} = req.body;
    let usersExist = await User.findOne({ $or: [{ name: name }, { email: { $regex: new RegExp("^" + email.toLowerCase(), "i") }}]});
    if(!usersExist){
      let newUser = new User({name: name, password: password, email: email.toLowerCase(), admin:0, themeLists:[], likes: []});
      newUser = await setBasicThemeLists(newUser);
      newUser.date = new Date().getTime();
      newUser.activeAccount = false;
      newUser.activationCode = await generateActivationCode(name);
      const token = jwt.sign({_id: newUser._id}, secretWord, { expiresIn: 900 });

      let template = await getTemplate('mail');

      if(template){

        template = await setTemplateData({name, email, code:newUser.activationCode}, template, 'verification');

      }

      await newUser.save();

      let mail = Mail.getMailInstance();
      
      mail.sendMail(email, `Bienvenido a MyVinyl ${name}`, template, 'html');
      
      res.status(200).json({status:true, token:token, user: Tools.simplifyProfile(newUser)});
    }
    else{
      return res.status(403).send({status:"User/Mail exists"});
    }
    
  }
  
  async function setTemplateData(data, template, type){

    switch (type){

      case 'verification':

        let protocol = 'http';
        let domain = 'myvinyl.es';
        let port = '';
        let path = `${protocol}://${domain}/#/Verificar/${data.code}`;

        template = template.replace(/<!-- name -->/g, data.name);
        template = template.replace(/<!-- mail -->/g, data.email);
        template = template.replace(/<!-- path -->/g, path);

      break;

    }

    return template;

  }

  async function getTemplate(name){
    let templatePath = path.join('public', 'assets', 'templates', `myvinyl-template-${name}.html`);
    let templateHtml;
    if(fs.existsSync(templatePath)){
      templateHtml = fs.readFileSync(templatePath).toString();
    }
    return templateHtml;
  }

  async function generateActivationCode(userName) {
    
    let date = new Date().getTime();
    let randomString = '';

    for (let index = 0; index < 10; index++) {
        randomString = randomString +  Math.random().toString(36).substring(2, 15)
    }

    const hashBuffer = CryptoJS.SHA256(`${userName}${date}${randomString}`);     
    const hashArray = Array.from(new Uint8Array(hashBuffer.words));             
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
  }

  async function setBasicThemeLists(user){
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
  
    let { email, password } = req.body;
    const user = await User.findOne({email: { $regex: new RegExp("^" + email.toLowerCase(), "i") } });
  
    if (!user){
      return res.status(401).send('{"attribute":"email","message":"La cuenta no existe"}')
    }
    
    if(user.password != password){
      return res.status(401).send('{"attribute":"password","message":"Contraseña incorrecta"}');
    }
    
    const token = jwt.sign({_id: user._id}, secretWord, { expiresIn: 900 });
  
    return res.status(200).json({status:true, token:token, user: user});
  
  }

async function searchUserDataByName(name){
    let userData = await User.findOne({name:name}).lean().catch(err=>{console.error(err);})
    return userData 
}
  
async function searchUserDataById(userId){
    let userData = await User.findOne({_id:userId}).catch(err=>{console.error(err);})
    return userData 
}

async function getUserData(req, res){
    let userData = await searchUserDataById(req.userId);
    res.status(200).send(Tools.simplifyProfile(userData));
}

async function searchUsersDataByName(req, res){console.log(req.query.nameQuery)
  let nameQuery = (req.query.nameQuery) ? JSON.parse(req.query.nameQuery) : [''];
  let limitQuery = parseInt(req.params.limit);
  let pageQuery = parseInt(req.params.page);
  if(Array.isArray(nameQuery)){
    let userData = await new Promise(resolve=>{
      let data = {};
      let index = 0;
      nameQuery.forEach(async query => {
        data[query] = [];
        let queryResult = await User.paginate({name:{ "$regex": query, "$options": "i" }},{limit: limitQuery, page: pageQuery});
        queryResult.docs = await Tools.simplifyUsers(queryResult.docs);
        data[query] = queryResult;
        index ++;
        if(index == nameQuery.length){
          resolve(data);
        }
      });
    });
    res.status(200).send({status: true, message:userData});
  }
  else{
    res.status(400).send({status: "Bad query"});
  }
}

async function _searchUsersDataByName(req, res){
  let nameQuery = req.body.nameQuery;
  let limitQuery = req.body.limitQuery;
  if(Array.isArray(nameQuery)){
    let userData = await new Promise(resolve=>{
      let data = [];
      let index = 0;
      nameQuery.forEach(async query => {
        let queryResult = await User.find({name:{ "$regex": query, "$options": "i" }}).limit(limitQuery).lean();
        data = data.concat(queryResult)
        index ++;
        if(index == nameQuery.length){
          resolve(data);
        }
      });
    });
    userData = await Tools.simplifyUsers(userData);
    res.status(200).send({status: true, message:userData});
  }
  else{
    res.status(400).send({status: "Bad query"});
  }
}

async function getProfileData(req, res){
  let profileName = req.params.user;
  let profileData = await User.findOne({name:profileName}).catch(err=>{console.error(err);})
  if(profileData){
    if(req.userToken == true){
      res.status(200).send({validToken:req.validToken, data:Tools.simplifyProfile(profileData)});
    }
    else{
      res.status(200).send({validToken:req.validToken, data:{name:profileData.name, admin:profileData.admin, description:profileData.description, themeLists: profileData.themeLists}});
    }
  }
  else{
    res.status(404).send('El usuario no existe');
  }
  //if(!req.validToken){res.status(404).send({"destroyToken":"true","message":"Token mal formado"})}
}

async function getThemesFromList(req, res){
  let themeListName = req.params.id;
  let profileName = req.params.user;

  if(req.existsUser){
    let profileData = await User.findOne({name:profileName}).catch(err=>{console.error(err);});
    let themeList = profileData.themeLists.find(list=>{return(list.name == themeListName)});
    if(JSON.parse(themeList && (req.userToken == true && JSON.parse(themeList.userView) || req.userToken != true && JSON.parse(themeList.userView) && !JSON.parse(themeList.privateState)))){
      themeList = (themeList.list.length > 0) ? await Tools.fillThemeList(themeList.list) : [];
      themeList = await Tools.orderThemeListThemes(themeList);
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

async function updateUserData(req, res){
  let attribute = req.params.attribute;console.log(attribute)
  let oldAttribute = req.body.oldAttribute;console.log(oldAttribute)
  let newAttribute = req.body.newAttribute;console.log(newAttribute)
  let userName = req.params.user;console.log(userName)
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

async function getUserAttribute(req, res){
  let attributte = req.params.attributte;

  if(attributte){
    if(attributte == 'password'){
      checkPassword(req, res);
    }
  }
  else{
    res.status(401).json({status:'Not found'});
  }

}

async function checkPassword(req, res){
  let userName = req.params.user;console.log(userName)
  let password = req.params.value;console.log(password)
  if(userName == req.userNameToken){
    let user = await User.findOne({name:userName}).lean();
    res.headerSent = true;
    (user.password == password) ? res.status(200).json({status:true}) : res.status(401).json({status:false});
  }
  else{
    if(!res.headerSent) res.status(401).json({status:'invalid-petition'});
  }
}

async function checkActivationCode(req, res){

  let code = req.params.code;
  let user = await User.findOne({"activationCode":code});
  if(user && user.activeAccount == false){
    const token = jwt.sign({_id: user._id}, secretWord, { expiresIn: 900 });
    user.activeAccount = true;
    user.activationCode = '';
    user.save();
    res.status(200).json({status:true, user:Tools.simplifyProfile(user), token:token});
  }
  else{
    res.status(404).json({status:'Not found'});
  }

}

async function dropNonVerifiedUsers(){
  let actualDate = new Date().getTime();
  let maxDate = 2592000000;
  let users = await User.find({"activeAccount":false});
  users.forEach(user=>{
    let signUpDate = actualDate - user.date;
    if(signUpDate > maxDate){
      user.remove();
    }
  });

}

module.exports = { singUp, signIn, getUserData, searchUsersDataByName, getProfileData, searchUserDataById, searchUserDataByName, updateUserData, getUserAttribute, getThemesFromList, checkActivationCode, dropNonVerifiedUsers };