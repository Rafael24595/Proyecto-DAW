var fs = require("fs");

async function uploadFile(req, res){
    let userName = req.body.userName;
    let fileType = req.body.fileType;
    let files = req.files;
    let correctFiles = {total:Object.keys(files).length, count:0, messages:[]};

    if((userName == req.userNameToken && fileType == 'user_avatar') || (userName == req.userNameToken && fileType == 'theme_audio' || fileType == 'theme_cover' || fileType == 'theme_flag' && req.isAdmin)){
        for (const file in files) {
            if(file == 'null'){
                correctFiles.total = correctFiles.total + files[file].length - 1;
                correctFiles = await new Promise(async resolve=>{
                    files[file].forEach(async nullKeyFile => {
                        resolve (await acceptFile(nullKeyFile, fileType, correctFiles));
                    });
                });
            }
            else{
                correctFiles = await acceptFile(files[file], fileType, correctFiles);
            }
        }console.log(correctFiles);
        if(!res.headerSent && correctFiles.total == correctFiles.count) {res.headerSent = true; res.status(200).json({status:true, files_total: correctFiles.total, files_uploaded: correctFiles.count, files_errors:correctFiles.messages});}
        else {res.headerSent = true; res.status(500).json({status:false, files_total: correctFiles.total, files_uploaded: correctFiles.count, files_errors:correctFiles.messages});}
    }
    else{
        res.status(401).json({status:false});
    }
    checkTempSize();
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

  async function acceptFile(file, fileType, correctFiles){

    let maxFileSize= 157286400;
    let folder = await locateFolder(fileType);

    if(file.type == 'image/jpeg' || file.type == 'image/png' || (fileType == 'theme_audio' && file.type == 'audio/mpeg')){
        let fileData = fs.statSync(file.path);
        if(fileData.size <= maxFileSize){
            fs.copyFileSync(file.path, `./${folder}/${file.name}`);
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
            folder = 'uploads/media/image/users';
        break;

        case 'artist_avatar':
            folder = 'uploads/media/image/artists';
        break;

        case 'theme_flag':
            folder = 'uploads/media/image/flags';
        break;

        case 'theme_cover':
            folder = 'uploads/media/image/covers';
        break;

        case 'theme_audio':
            folder = 'uploads/media/audio/themes';
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

module.exports = { uploadFile, removeFile, renameFile, removeFileAction, renameFileAction };