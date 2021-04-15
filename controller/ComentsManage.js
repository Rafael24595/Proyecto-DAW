require('../models/models');
const sha256 = require('js-sha256');
const mongoose = require('mongoose');
const artist = mongoose.model('Artist');

async function publishComment(req, res){
    let themeId = req.body.themeId;
    let userName = req.body.userName;
    let comment = req.body.comment;

    if(userName == req.userNameToken){
      let commentId = await sha256(`${themeId}-${userName}-${comment}-${Date.now()}`);
      let artistData = await artist.findOne({"themeList.id":themeId}).lean();
      let index = 0;

      artistData.themeList.find(theme=>{
        if(theme.id == themeId){
          artistData.themeList[index].comments.push({comment:comment,userName:userName,commentId:commentId});
          return true;
        }
        index++;
      });
      await artist.findOneAndUpdate({"themeList.id":themeId}, artistData);
      res.status(200).json({commentId:commentId,userName:userName,comment:comment});
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
      let indexLevelI = 0;
      let indexLevelII = 0;
      //let artistData = await artist.updateOne({"themeList.id.comments.commentId":commentId},{$pull:{themeList.id.comments.commentId":commentId}});
      let artistData = await artist.findOne({"themeList.id":themeId}).lean();

      artistData.themeList.forEach(theme=>{
        if(theme.id == themeId){
          theme.comments.forEach(comment=>{
            if(comment.commentId == commentId){
              artistData.themeList[indexLevelI].comments.splice(indexLevelII,1);
            }
            indexLevelII++;
          })
        }
        indexLevelI++;
      });
      await artist.findOneAndUpdate({"themeList.id":themeId}, artistData);
      res.status(200).json({status:'correct'});
    }
    else{
      res.status(404).send('{"destroyToken":"true","message":"Sesión no válida"}');
    }
  }

  module.exports = { publishComment, deleteComment };