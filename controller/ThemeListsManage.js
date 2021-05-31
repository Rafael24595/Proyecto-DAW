
require('../models/models');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Tools = require('../utils/tools');

async function privatizeThemeList(req, res){
    let themeListName = req.params.id;
    let state = JSON.parse(req.body.state);
    let userName = req.params.user;
    let index = 0;
   state = (state != true && state != false) ? false : state;
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
      if(!res.headerSent) res.status(200).json({status:state});
    }
  }
  
  async function createNewThemeList(req, res){
    let themeListName = req.params.id;
    let privacy = req.body.privacy;
    let list;
    let userName = req.params.user;

    if(req.body.list && typeof req.body.list == 'object'){
      list = await Tools.simplifyThemeList(req.body.list);
    }
    else{
      list = [];
    }
    if(userName == req.userNameToken){
      let newThemeList = {name:themeListName,userView:'true',userManage:'true',privateState:privacy, list:list};
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
    let themeListName = req.params.id;
    let userName = req.params.user;
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
      if(!res.headerSent) res.status(200).json({status:true});
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }
  
  async function addToUserThemeList(req, res){
    let artistId = req.body.artistId;
    let newTheme = req.params.theme;
    let themeListName = req.params.id;
    let userName = req.params.user;
    let index = 0;
    if(userName == req.userNameToken){
      let user = await User.findOne({name:userName}).lean();
      user.themeLists.find(themeList=>{
        if(themeList.name == themeListName){
          let themeExists = user.themeLists[index].list.map(theme=>{return theme.themeId}).indexOf(newTheme);
          if(JSON.parse(themeList.userManage)){
            if(themeExists == -1){
              user.themeLists[index].list.push({listId:artistId, themeId:newTheme, position:user.themeLists[index].list.length});
            }
            else{
              user.themeLists[index].list.splice(themeExists, 1);
            }
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
      if(!res.headerSent) res.status(200).json({status:'Ok', message:user.themeLists[index].list});
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }
  
  async function removeFromUserThemeList(req, res){
    let themeId = req.params.theme;
    let themeListName = req.params.id;
    let userName = req.params.user;

    if(userName == req.userNameToken){
      let user = await User.findOne({name:userName}).lean();
      let themeListPositionInUser = user.themeLists.map(themeList =>{return themeList.name}).indexOf(themeListName);
      if(themeListPositionInUser != -1){
        let themePositionInList = user.themeLists[themeListPositionInUser].list.map(theme=>{return theme.themeId}).indexOf(themeId);
        if(themePositionInList != -1){
          user.themeLists[themeListPositionInUser].list.splice(themePositionInList, 1);
          user.themeLists[themeListPositionInUser].list = await Tools.orderThemeListThemes(user.themeLists[themeListPositionInUser].list);
          await User.findOneAndUpdate({name:userName},user);
          res.headerSent = true;
          res.status(200).json({status:true, message: user.themeLists[themeListPositionInUser].list});
        }
      }
      if(!res.headerSent){
        res.headerSent = true;
        res.status(401).json({status:'Invalid petition'});
      } 
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }

  async function updateUserThemeList(req, res){
    let newThemeList = req.body.themeList;
    let themeListName = req.params.id;
    let userName = req.params.user;
    if(userName == req.userNameToken){
      let user = await User.findOne({name:userName}).lean();
      let index = user.themeLists.map(theme=>{return theme.name}).indexOf(themeListName);
      if(index != -1){
        newThemeList.list = await Tools.simplifyThemeList(newThemeList.list);
        user.themeLists[index] = newThemeList;
        if(JSON.parse(user.themeLists[index].userManage)){
          newThemeList.list = await Tools.orderThemeListThemes(newThemeList.list);
          user.themeLists[index] = newThemeList;
        }
        else{
          res.headerSent = true;
          res.status(401).json({status:'Invalid petition'});
        }
      }
      else{
        res.headerSent = true;
        res.status(404).json({status:'Invalid petition'});
      }
      await User.findOneAndUpdate({name:userName},user);
      if(!res.headerSent) res.status(200).json({status:true});
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }

  module.exports = { privatizeThemeList, createNewThemeList, deleteThemeList, addToUserThemeList, removeFromUserThemeList, updateUserThemeList };