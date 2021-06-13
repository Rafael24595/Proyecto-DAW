const fs = require("fs");
const mongoose = require('mongoose');
const Artist = mongoose.model('Artist');
const Theme = mongoose.model('Theme');

async function uploadFile(req, res){
    let userName = req.body.userName;
    let files = req.files;
    let correctFiles = {total:Object.keys(files).length, count:0, messages:[]};
    if(userName == req.userNameToken){
        for (const file in files) {
            if(files[file].length > 1){
                correctFiles.total = correctFiles.total + files[file].length - 1;
                correctFiles = await new Promise(async resolve=>{
                    files[file].forEach(async keyFile => {
                        let fileData = keyFile.fieldName.split('&');
                        let fileType = fileData[0];
                        let name = fileData[1];
                        let isNameComplete = (name.split('-').length > 1);
                        if(!isNameComplete && (fileType == 'theme_audio' || fileType == 'theme_cover')){
                            name = await setThemeCoverName(name);
                            if(!name){
                                res.headerSent = true;
                                res.status(404).json({status:false});
                            }
                        }
                        if(fileType == 'user_avatar' || (userName == req.userNameToken && fileType == 'artist_avatar' || fileType == 'theme_audio' || fileType == 'theme_cover' || fileType == 'theme_flag' && req.isAdmin)){
                            resolve (await acceptFile(keyFile, fileType, name, correctFiles));
                        }
                        else{
                            res.headerSent = true;
                            res.status(401).json({status:false});
                        }
                    });
                });     
            }
            else{
                let fileData = files[file].fieldName.split('&');
                let fileType = fileData[0];
                let name = fileData[1];
                let isNameComplete = (name.split('-').length > 1);
                if(!isNameComplete && (fileType == 'theme_audio' || fileType == 'theme_cover')){
                    name = await setThemeCoverName(name);
                    if(!name){
                        res.headerSent = true;
                        res.status(404).json({status:false});
                    }
                }
                if(fileType == 'user_avatar' || (userName == req.userNameToken && fileType == 'artist_avatar' || fileType == 'theme_audio' || fileType == 'theme_cover' || fileType == 'theme_flag' && req.isAdmin)){
                    correctFiles = await acceptFile(files[file], fileType, name, correctFiles);
                }
                else{
                    res.headerSent = true;
                    res.status(401).json({status:false});
                }
            }
        }
        if(!res.headerSent && correctFiles.total == correctFiles.count) {res.headerSent = true; res.status(200).json({status:true, files_total: correctFiles.total, files_uploaded: correctFiles.count, files_errors:correctFiles.messages});}
        else {res.headerSent = true; res.status(500).json({status:false, files_total: correctFiles.total, files_uploaded: correctFiles.count, files_errors:correctFiles.messages});}
    }
    else{
        res.status(401).json({status:false});
    }
    checkTempSize();
  }

  async function setThemeCoverName(name){
    let artist = await Artist.findOne({"id_artist":name}).lean();
    if(artist){
        let themes = await Theme.find({"artist.id":name}).lean();
        return `${name}-${themes.length}`;
    }
    else{
        return undefined;
    }
  }

  async function renameFile(req, res){
    let userName = req.body.userName;
    let fileType = req.body.fileType;
    let fileNameOld = req.body.fileNameOld;
    let fileNameNew = req.body.fileNameNew;

    if(userName == req.userNameToken && req.isAdmin){
        let status = await renameFileAction(fileType, fileNameOld, fileNameNew);
        if(status){
            if(!res.headerSent) {res.headerSent = true; res.status(200).json({status:true});}
        }
        else{
            if(!res.headerSent) res.status(404).json({status:'file-not-exists'});
        }
    }
    else{
        if(!res.headerSent) res.status(401).json({status:false});
    }

  }

  async function renameFileAction(fileType, fileNameOld, fileNameNew){
    let folder = await locateFolder(fileType);
    let pathExist = fs.existsSync(`./${folder}/${fileNameOld}`);
    if(pathExist){
        fs.renameSync(`./${folder}/${fileNameOld}`, `./${folder}/${fileNameNew}`);
        return true;
    }
    else{
        return false;
    }
  }

  async function removeFile(req, res){
    let userName = req.body.userName;
    let fileType = req.body.fileType;
    let fileName = req.body.fileName;
    if(userName == req.userNameToken && req.isAdmin){
        let status = await removeFileAction(fileType, fileName);
        if(status){
            if(!res.headerSent) {res.headerSent = true; res.status(200).json({status:true});}
        }
        else{
            if(!res.headerSent) res.status(404).json({status:'file-not-exists'});
        }
    }
    else{
        if(!res.headerSent) res.status(401).json({status:false});
    }

  }

  async function removeFileAction(fileType, fileName){
    let folder = await locateFolder(fileType);
    let pathExist = fs.existsSync(`./${folder}/${fileName}`);
    if(pathExist){
        fs.rmSync(`./${folder}/${fileName}`);
        return true
    }
    else{
        return false;
    }

  }

  async function acceptFile(file, fileType, fileName, correctFiles){

    let maxFileSize= 157286400;
    let folder = await locateFolder(fileType);
    let extension = (file.type == 'image/png' || file.type == 'image/jpeg') ? 'png' : (file.type == 'audio/mpeg') ? 'mp3' : 'erase'; 

    if(file.type == 'image/jpeg' || file.type == 'image/png' || (fileType == 'theme_audio' && file.type == 'audio/mpeg')){
        let fileData = fs.statSync(file.path);
        if(fileData.size <= maxFileSize){
            fs.copyFileSync(file.path, `./${folder}/${fileName}.${extension}`);
            correctFiles.count = correctFiles.count + 1;
        }
        else{
            correctFiles.messages.push({status:'err', error:'invalid-size', file:file.name });
        }
    }
    else{
        correctFiles.messages.push({status:'err', error:'invalid-format', file:file.name });
    }
    fs.unlinkSync(file.path);


    return correctFiles;

  }

  async function locateFolder(fileType){

    let folder = '.temp';

    switch (fileType){

        case 'user_avatar':
            folder = 'public/assets/media/images/users';
        break;

        case 'artist_avatar':
            folder = 'public/assets/media/images/artists';
        break;

        case 'theme_flag':
            folder = 'public/assets/media/images/flags';
        break;

        case 'theme_cover':
            folder = 'public/assets/media/images/covers';
        break;

        case 'theme_audio':
            folder = 'public/assets/media/audio/themes';
        break;

    }

    return folder;

  }

  async function checkTempSize(){
      let maxDirSize = 524288000;
      let dirFiles = fs.readdirSync('./.temp');
      let dirSize = await calculateTempSize(dirFiles);
      if(dirSize >= maxDirSize){
        deleteTempFiles();
      }
  }

  async function calculateTempSize(filesArray){
    let size = 0;
    filesArray.forEach(file=>{
        let fileData = fs.statSync(`./.temp/${file}`);
        if(fileData.size){
            size = size + fileData.size;
        }
    });
    return size
  }

  async function deleteTempFiles(){
    let maxFileLifeTime = 60000;
    let dirFiles = fs.readdirSync('./.temp');
    dirFiles.forEach(file=>{
        let fileData = fs.statSync(`./.temp/${file}`);
        let fileLifeTime = new Date() - fileData.birthtime
        if(fileLifeTime > maxFileLifeTime){
            fs.rmSync(`./.temp/${file}`);
        }
    });
  }

  async function getFlagsList(req, res){
    let flags = fs.readdirSync('./uploads/media/image/flags');
    let cleanFlags = [];
    flags.forEach(flag=>{
        if(!flag.includes('_')){
            cleanFlags.push(flag.split('.')[0]);
        }
    });
    res.status(200).json({status:true,message:cleanFlags});
  }

module.exports = { uploadFile, removeFile, renameFile, removeFileAction, renameFileAction, getFlagsList };