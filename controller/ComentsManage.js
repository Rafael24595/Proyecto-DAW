require('../models/models');
const sha256 = require('js-sha256');
const Tools = require('../utils/tools');
const mongoose = require('mongoose');
const artist = mongoose.model('Artist');
const Theme = mongoose.model('Theme');
const User = mongoose.model('User');

async function publishComment(req, res){
    let themeId = req.body.themeId;
    let comment = req.body.comment;
    let userName = req.body.userName;

    if(userName == req.userNameToken && comment){
      let commentId = await sha256(`${themeId}-${userName}-${comment}-${Date.now()}`);
      let theme = await Theme.findOne({"id":themeId});
      let date = await Tools.getActualDate();
      if(theme != null){
        theme.comments.push({comment:comment,userName:userName,commentId:commentId, date});
        theme.markModified('comments');
        theme.save();
        res.status(200).json({status: true, commentData:{commentId:commentId,userName:userName,comment:comment, date}});
      }
      else{
        res.status(404).json({status:'Not Found'});
      }
    }
    else{
      res.status(401).json({status:'Invalid petition'});
    }
  }
  
  async function deleteComment(req, res){
    let themeId = req.body.themeId;
    let commentId = req.body.commentId;
    let userName = req.body.userName;

    if(userName == req.userNameToken){

      let theme = await Theme.findOne({"id":themeId});

      if(theme != null){
        let index = theme.comments.map(comment=>{return comment.commentId}).indexOf(commentId);
        if(index != -1){
          theme.comments.splice(index, 1);
          theme.markModified('comments');
          theme.save();
          res.status(200).json({status:true});
        }
        else{
          res.status(404).json({status:'Not Found'});
        }
      }
      else{
        res.status(404).json({status:'Not Found'});
      }
    }
    else{
      res.status(404).send('{"destroyToken":"true","message":"Sesión no válida"}');
    }
  }

  async function thumbValueTheme(req, res){
    let themeId = req.body.themeId;console.log(themeId)
    let thumbValue = req.body.thumbValue;console.log(thumbValue)
    let userName = req.body.userName;console.log(userName)

    /*let template = {true:'likes', false:'dislikes'};
    let activeMode = template[(thumbValue > 0)];*/

    /*let likes_dislikes = (thumbValue > 0) ? "likes" : "dislikes";
    let dislikes_likes = (thumbValue > 0) ? "dislikes" : "likes";
    let activeThemeListName = (thumbValue > 0) ? "@likes-list" : "@dislikes-list";
    let unusedThemeListName = (thumbValue > 0) ? "@dislikes-list" : "@likes-list";*/

    let user = await User.findOne({name:userName}).lean();
    let theme = await Theme.findOne({"id":themeId});

    console.log(req.userNameToken, userName == req.userNameToken)
    if(userName == req.userNameToken){
      
      let template = {true:'likes', false:'dislikes'};
      let activeList = template[(thumbValue > 0)];
      let inactiveList = template[!(thumbValue > 0)]

      console.log(`@${activeList}-list`, `@${inactiveList}-list`, )
      /*let indexActive = user.themeLists.map(themeList=>{return themeList.name}).indexOf(activeThemeListName);
      let indexUnused = user.themeLists.map(themeList=>{return themeList.name}).indexOf(unusedThemeListName);*/

      let themeInActiveList = user.themeLists.find(list=>{return list.name == `@${activeList}-list`}).list.find(themeData =>{return (themeData.themeId == themeId)});
      let themeInUnusedList = user.themeLists.find(list=>{return list.name == `@${inactiveList}-list`}).list.find(themeData =>{return (themeData.themeId == themeId)});

      console.log(user.themeLists.find(list=>{return list.name == `@${activeList}-list`}).list)
      console.log('--------------------')
      console.log(user.themeLists.find(list=>{return list.name == `@${inactiveList}-list`}).list)
      console.log('@@@@@@@@@@@@@@@@@@@@')
      console.log(themeInActiveList)
      console.log('--------------------')
      console.log(themeInUnusedList)

      if(theme && thumbValue != 0 && (themeInUnusedList && !themeInActiveList || !themeInActiveList && !themeInUnusedList)){

        let position = user.themeLists.find(list=>{return list.name == `@${activeList}-list`}).list.length;

        if(themeInUnusedList){
          let indexUnusedTheme = user.themeLists.find(list=>{return list.name == `@${inactiveList}-list`}).list.map(themeData=>{return themeData.themeId}).indexOf(themeInUnusedList.themeId);
          user.themeLists.find(list=>{return list.name == `@${inactiveList}-list`}).list.splice(indexUnusedTheme, 1);
        }

        user.themeLists.find(list=>{return list.name == `@${activeList}-list`}).list.push({listId:theme.artist.id, themeId:themeId, position});

        console.log(theme)

        //let index = artistData.themeList.map(theme=>{return theme.id}).indexOf(themeId);
        theme[activeList] = theme[activeList] + Math.abs(thumbValue);
        if(themeInUnusedList) theme[inactiveList] = (theme[inactiveList] - 1 > -1) ? theme[inactiveList] - 1 : 0;

        //await User.findOneAndUpdate({name:userName}, user);
        
        console.log(theme)

        theme.markModified(inactiveList);
        theme.markModified(inactiveList);
        //theme.save();
        //await artist.findOneAndUpdate({"themeList.id":themeId}, artistData).catch(err=>{console.log(err);});

        res.status(200).json({status:true, userThemeLists:user.themeLists, likes: theme.likes, dislikes: theme.dislikes});

      }
      else{
          //let index = artistData.themeList.map(theme=>{return theme.id}).indexOf(themeId);
          if(themeInActiveList) theme[activeList] = (theme[activeList] -1 > -1) ? theme[activeList] - 1 : 0;
          if(themeInUnusedList) theme[inactiveList] = (theme[inactiveList] - 1 > -1) ? theme[inactiveList] - 1 : 0;
          resetThumbList(user, [`@${activeList}-list`], [`@${inactiveList}-list`], {listId:theme.artist.id, themeId:themeId});
          //await User.findOneAndUpdate({name:userName}, user);
          //await artist.findOneAndUpdate({"themeList.id":themeId}, artistData).catch(err=>{console.log(err);});
          theme.markModified(inactiveList);
          theme.markModified(inactiveList);
          //theme.save();
          (thumbValue == 0) ? res.status(200).json({status:true, userThemeLists:user.themeLists, likes: theme.likes, dislikes: theme.dislikes}) : res.status(404).send('{"destroyToken":"false","message":"Theme not found"}'); 
      }
    }
    else{
      res.status(404).send('{"destroyToken":"true","message":"Sesión no válida"}');
    }
  }

  /*async function thumbValueTheme_X(req, res){
    let themeId = req.body.themeId;console.log(themeId)
    let thumbValue = req.body.thumbValue;console.log(thumbValue)
    let userName = req.body.userName;console.log(userName)
    let likes_dislikes = (thumbValue > 0) ? "likes" : "dislikes";
    let dislikes_likes = (thumbValue > 0) ? "dislikes" : "likes";
    let activeThemeListName = (thumbValue > 0) ? "@likes-list" : "@dislikes-list";
    let unusedThemeListName = (thumbValue > 0) ? "@dislikes-list" : "@likes-list";

    let user = await User.findOne({name:userName}).lean();
    let artistData = await artist.findOne({"themeList.id":themeId}).lean();

    if(userName == req.userNameToken){
      
      let indexActive = user.themeLists.map(themeList=>{return themeList.name}).indexOf(activeThemeListName);
      let indexUnused = user.themeLists.map(themeList=>{return themeList.name}).indexOf(unusedThemeListName);
      let themeInActiveList = user.themeLists[indexActive].list.find(themeData =>{return (themeData.themeId == themeId)});
      let themeInUnusedList = user.themeLists[indexUnused].list.find(themeData =>{return (themeData.themeId == themeId)});

      console.log(user.themeLists[indexActive].list)
      console.log(user.themeLists[indexUnused].list)

      if(artistData && thumbValue != 0 && (themeInUnusedList && !themeInActiveList || !themeInActiveList && !themeInUnusedList)){

        if(themeInUnusedList){
          let indexUnusedTheme = user.themeLists[indexUnused].list.map(themeData=>{return themeData.themeId}).indexOf(themeInUnusedList.themeId);
          user.themeLists[indexUnused].list.splice(indexUnusedTheme, 1);
        }

        user.themeLists[indexActive].list.push({listId:artistData.id_artist, themeId:themeId});

        let index = artistData.themeList.map(theme=>{return theme.id}).indexOf(themeId);
        artistData.themeList[index][likes_dislikes] = artistData.themeList[index][likes_dislikes] + Math.abs(thumbValue);
        if(themeInUnusedList) artistData.themeList[index][dislikes_likes] = (artistData.themeList[index][dislikes_likes] - 1 > -1) ? artistData.themeList[index][dislikes_likes] - 1 : 0;

        await User.findOneAndUpdate({name:userName}, user);
        await artist.findOneAndUpdate({"themeList.id":themeId}, artistData).catch(err=>{console.log(err);});

        res.status(200).json({status:true, userThemeLists:user.themeLists, likes: artistData.themeList[index].likes, dislikes: artistData.themeList[index].dislikes});

      }
      else{
          let index = artistData.themeList.map(theme=>{return theme.id}).indexOf(themeId);
          if(themeInActiveList) artistData.themeList[index][likes_dislikes] = (artistData.themeList[index][likes_dislikes] -1 > -1) ? artistData.themeList[index][likes_dislikes] - 1 : 0;
          if(themeInUnusedList) artistData.themeList[index][dislikes_likes] = (artistData.themeList[index][dislikes_likes] - 1 > -1) ? artistData.themeList[index][dislikes_likes] - 1 : 0;
          resetThumbList(user, indexActive, indexUnused, {listId:artistData.id_artist, themeId:themeId});
          await User.findOneAndUpdate({name:userName}, user);
          await artist.findOneAndUpdate({"themeList.id":themeId}, artistData).catch(err=>{console.log(err);});
          (thumbValue == 0) ? res.status(200).json({status:true, userThemeLists:user.themeLists, likes: artistData.themeList[index].likes, dislikes: artistData.themeList[index].dislikes}) : res.status(404).send('{"destroyToken":"false","message":"Theme not found"}'); 
      }
    }
    else{
      res.status(404).send('{"destroyToken":"true","message":"Sesión no válida"}');
    }
  }*/

  async function resetThumbList(user, indexActive, indexUnused, themeInList){

    if(user){

      console.log(`${indexActive}`, `${indexUnused}`)
      let indexActiveTheme = user.themeLists.find(list=>{return list.name == `${indexActive}`}).list.map(themeData=>{return themeData.themeId}).indexOf(themeInList.themeId);
      user.themeLists.find(list=>{return list.name == `${indexActive}`}).list.splice(indexActiveTheme, 1);

      let indexUnusedTheme = user.themeLists.find(list=>{return list.name == `${indexUnused}`}).list.map(themeData=>{return themeData.themeId}).indexOf(themeInList.themeId);
      user.themeLists.find(list=>{return list.name == `${indexUnused}`}).list.splice(indexUnusedTheme, 1);

      //await User.findOneAndUpdate({name:user.name}, user);

      console.log(user.themeLists.find(list=>{return list.name == `${indexActive}`}).list)
      console.log(user.themeLists.find(list=>{return list.name == `${indexUnused}`}).list)

    }

  }

  module.exports = { publishComment, deleteComment, thumbValueTheme };