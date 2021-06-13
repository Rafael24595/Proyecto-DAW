require('../models/models');
const sha256 = require('js-sha256');
const Tools = require('../utils/tools');
const mongoose = require('mongoose');
const Theme = mongoose.model('Theme');
const User = mongoose.model('User');

async function publishComment(req, res){
    let themeId = req.params.theme;
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
    let themeId = req.params.theme;
    let commentId = req.params.id;
    let userName = req.query.user;

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
    let themeId = req.params.theme;
    let thumbValue = req.params.value;
    let userName = req.body.userName;

    let user = await User.findOne({name:userName}).lean();
    let theme = await Theme.findOne({"id":themeId});

    if(userName == req.userNameToken){

      let themeInLikes = user.themeLists.find(list=>{return list.name == `@likes-list`}).list.find(themeData =>{return (themeData.themeId == themeId)});
      let themeInDisikes = user.themeLists.find(list=>{return list.name == `@dislikes-list`}).list.find(themeData =>{return (themeData.themeId == themeId)});

      if(thumbValue == 1 && !themeInLikes){

        resetThumbList(user, {listId:theme.artist.id, themeId:themeId});

        let position = user.themeLists.find(list=>{return list.name == `@likes-list`}).list.length + 1;
        user.themeLists.find(list=>{return list.name == `@likes-list`}).list.push({listId:theme.artist.id, themeId:themeId, position});
        theme.likes = theme.likes + Math.abs(thumbValue);

        if(themeInDisikes){
          theme.dislikes = (theme.dislikes -1 < 0) ? 0 : theme.dislikes -1;
        }
      }

      if(thumbValue == -1 && !themeInDisikes){

        resetThumbList(user, {listId:theme.artist.id, themeId:themeId});

        let position = user.themeLists.find(list=>{return list.name == `@dislikes-list`}).list.length + 1;
        user.themeLists.find(list=>{return list.name == `@dislikes-list`}).list.push({listId:theme.artist.id, themeId:themeId, position});
        theme.dislikes = theme.dislikes + Math.abs(thumbValue);

        if(themeInLikes){
          theme.likes = (theme.likes -1 < 0) ? 0 : theme.likes -1;
        }
      }

      if(thumbValue == 0){

        resetThumbList(user, {listId:theme.artist.id, themeId:themeId});

        if(themeInLikes){
          theme.likes = (theme.likes -1 < 0) ? 0 : theme.likes -1;
        }
        if(themeInDisikes){
          theme.dislikes = (theme.dislikes -1 < 0) ? 0 : theme.dislikes -1;
        }
      }

      theme.markModified('likes');
      theme.markModified('dislikes');
      theme.save();
      await User.findOneAndUpdate({name:userName}, user);
      res.status(200).json({status:true, userThemeLists:user.themeLists, likes: theme.likes, dislikes: theme.dislikes});

    }
    else{
      res.status(404).send('{"destroyToken":"true","message":"Sesión no válida"}');
    }

  }

  async function resetThumbList(user, themeInList){

    if(user){

      let likesList = user.themeLists.find(list=>{return list.name == `@likes-list`}).list.map(themeData=>{return themeData.themeId}).indexOf(themeInList.themeId);
      if(likesList != -1) user.themeLists.find(list=>{return list.name == `@likes-list`}).list.splice(likesList, 1);

      let dislikesList = user.themeLists.find(list=>{return list.name == `@dislikes-list`}).list.map(themeData=>{return themeData.themeId}).indexOf(themeInList.themeId);
      if(dislikesList != -1) user.themeLists.find(list=>{return list.name == `@dislikes-list`}).list.splice(dislikesList, 1);

      await User.findOneAndUpdate({name:user.name}, user);

    }

  }

  module.exports = { publishComment, deleteComment, thumbValueTheme };