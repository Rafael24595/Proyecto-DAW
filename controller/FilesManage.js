var fs = require("fs");

async function uploadFile(req, res){
    let userName = req.body.userName;
    let fileType = req.body.fileType;
    let files = req.files;
    let numFiles = Object.keys(files).length;
    let correctFiles = 0;

    if((userName == req.userNameToken && fileType == 'user_avatar') || (userName == req.userNameToken && fileType == 'theme_audio' || fileType == 'theme_cover' || fileType == 'theme_flag' && req.isAdmin)){
        for (const file in files) {
            if(file == 'null'){
                files[file].forEach(nullKeyFile => {
                    correctFiles = acceptFile(nullKeyFile, fileType, correctFiles);
                });
            }
            else{
                correctFiles = acceptFile(files[file], fileType, correctFiles);
            }
        }
        if(!res.headerSent && numFiles == correctFiles) {res.headerSent = true; res.status(200).json({status:true, files_total: numFiles, files_uploaded: correctFiles});}
        if(!res.headerSent && numFiles != correctFiles) {res.headerSent = true; res.status(500).json({status:false, files_total: numFiles, files_uploaded: correctFiles});}
    }
    else{
        res.status(401).json({status:false});
    }
    checkTempSize();
  }

  async function removeFile(req, res){
    let userName = req.body.userName;
    let fileType = req.body.fileType;
    let fileName = req.body.fileName;

    if(userName == req.userNameToken && req.isAdmin){

        let folder = await locateFolder(fileType);
        let pathExist = fs.existsSync(`./${folder}/${fileName}`);
        
        if(pathExist){
            fs.rmSync(`./${folder}/${fileName}`);
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

  async function acceptFile(file, fileType, correctFiles){

    let folder = await locateFolder(fileType);

    if(file.type == 'image/jpeg' || file.type == 'image/png' || (fileType == 'theme_audio' && file.type == 'audio/mpeg')){
        console.log(`./${folder}/${file.name}`)
        fs.copyFileSync(file.path, `./${folder}/${file.name}`);
        correctFiles++;
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

module.exports = { uploadFile, removeFile };