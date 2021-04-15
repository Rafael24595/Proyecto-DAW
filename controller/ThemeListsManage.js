
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

async function privatizeThemeList(req, res){console.log(req.body)
    let themeListName = req.body.themeListName;
    let state = JSON.parse(req.body.state);
    let userName = req.body.userName;
    let index = 0;
    state = (state != true && state != false) ? false : state;console.log(state);
    state = JSON.stringify(!state);
    if(userName == req.userNameToken){
      let user = await User.findOne({name:userName}).lean();
      user.themeLists.find(themeList=>{
        if(themeList.name == themeListName){
          if (JSON.parse(user.themeLists[index].userView)){
            user.themeLists[index].privateState = state;
          }
          else{
            res.headerSent = true;
            res.status(401).json({status:'Invalid petition'});
          }
          return true
        }
        index++;
        return false
      })
      await User.findOneAndUpdate({name:userName},user);
      if(!res.headerSent) res.status(200).json({state:state});
    }
  }
  
  async function createNewThemeList(req, res){
    let themeListName = req.body.themeListName;
    let state = req.body.state;
    let userName = req.body.userName;
    if(userName == req.userNameToken){
      let newThemeList = {name:themeListName,userView:'true',userManage:'true',privateState:state,list:[]};
      let user = await User.findOne({name:userName}).lean();
      let existList = user.themeLists.find(themeList=>{return (themeList.name == themeListName)});
      if(!existList){
        user.themeLists.push(newThemeList);
        await User.findOneAndUpdate({name:userName},user);
        res.status(200).json({list:newThemeList});
      }
      else{
        res.status(401).json({status:'List-Exists'})
      }
    }
    else{
      res.status(401).json({status:'Invalid petition'})
    }
  }
  
  async function deleteThemeList(req, res){
    let themeListName = req.body.themeListName;
    let userName = req.body.userName;
    let themeListToRemove;
    let index = 0;
    if(userName == req.userNameToken){
      let user = await User.findOne({name:userName}).lean();
      themeListToRemove = user.themeLists.find(themeList=>{
        if(themeList.name == themeListName){
          if(JSON.parse(themeList.userManage)){
            user.themeLists.splice(index, 1);
          }
          else{
            res.headerSent = true;
            res.status(401).json({status:'Invalid petition'});
          }
          return true;
        }
        index++;
        return false;
      });
      (themeListToRemove) ? await User.findOneAndUpdate({name:userName},user) : res.status(401).json({status:'Invalid petition'});
      if(!res.headerSent) res.status(200).json({status:'Ok'});
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }
  
  async function addToUserThemeList(req, res){
    let newTheme = req.body.theme;
    let themeListName = req.body.themeListName;
    let userName = req.body.userName;
    let index = 0;
    if(userName == req.userNameToken){
      let user = await User.findOne({name:userName}).lean();
      user.themeLists.find(themeList=>{
        if(themeList.name == themeListName){
          if(JSON.parse(themeList.userManage)){
            user.themeLists[index].list.push(newTheme);
          }
          else{
            res.headerSent = true;
            res.status(401).json({status:'Invalid petition'});
          }
          return true;
        }
        index++;
        return false;
      });
      await User.findOneAndUpdate({name:userName},user);
      if(!res.headerSent) res.status(200).json({status:'Ok'});
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }
  
  async function removeUserThemeList(req, res){
    let themeName = req.body.theme;console.log(themeName);
    let themeListName = req.body.themeListName;console.log(themeListName);
    let userName = req.body.userName;console.log(userName);
    let themeToRemove;
    let indexLevelI = 0;
    let indexLevelII = 0;
    if(userName == req.userNameToken){
      let user = await User.findOne({name:userName}).lean();
      user.themeLists.find(themeList=>{
        if(themeList.name == themeListName){
          if(JSON.parse(themeList.userManage)){
            themeToRemove = themeList.list.find(theme=>{
              if(theme.themeId == themeName.themeId){
                res.headerSent = true;
                user.themeLists[indexLevelI].list.splice(indexLevelII, 1);
                return true;
              }
              indexLevelII++;
              return false;
            });
          }
          else{
            res.headerSent = true;
            res.status(401).json({status:'Invalid petition'});
          }
          return true;
        }
        indexLevelI++;
        return false;
      });
      (themeToRemove) ? await User.findOneAndUpdate({name:userName},user) : res.headerSent = true; res.status(401).json({status:'Invalid petition'});
      if(!res.headerSent) res.status(200).json({status:'Ok'});
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }

  module.exports = { privatizeThemeList, createNewThemeList, deleteThemeList, addToUserThemeList, removeUserThemeList };