import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/classes/Artist';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { User } from 'src/app/classes/User';
import { FormValidations } from 'src/utils/tools/FormValidations';
import { DataManage } from 'src/utils/tools/DataManage';

@Component({
  selector: 'app-artist-panel',
  templateUrl: './artist-panel.component.html',
  styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'artist', name:'Artist', family:'candy-theme',route:'Artist', query:{}, routeQuery:''};
  artist: Artist | undefined;
  user: User | undefined;
  isAdmin: boolean = false;
  showInput: boolean = false;
  inputValue: string |string[] = '';
  inputSecondValue: string |string[] = '';
  inputAttr: string = '';
  attrTranslation = {id_artist: "Id", name: "Nombre", surname: "Apellido", description: "Descripción", tags: "Etiqueta", themeList: "Lista", cover:'Carátula', newTheme:"Nuevo tema", reassign:'Reasignar', avatar:'Avatar'};
  newTheme = {name:'', flag:'', flagFile: '', cover:[], themeFile:[], tags:'', lyrics:{native:'', esp:''}};
  reassignArtist = 'default';
  arstistIds:{id:string, name:string}[] = [];
  availableFlags: string[] = [];
  formErr = {text:'', class:''};
  nameErr = {text:'', class:''};
  flagErr = {text:'', class:''};
  coverErr = {text:'', class:''};
  flagFileErr = {text:'', class:''};
  themeErr = {text:'', class:''};

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent, private DatabaseConexService: DatabaseConexService) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.DatabaseConexService.getArtistData(params['id']).subscribe(
          sucess=>{
            if(sucess.artist){
              this.candy.query['id'] = params['id'];
              this.artist = new Artist(sucess.artist.id_artist, sucess.artist?.name, sucess.artist?.surname, sucess.artist.description, sucess.artist.tags, sucess.artist.themeList);
              this.comunicationService.sendCandy(this.candy);
              this.user = sesionValues.activeUser;
              this.isAdmin = (parseInt(sesionValues.activeUser.admin) == 1) ? true : false;
            }
            else{
              this.router.navigate(['/Home']);
            }
          },
          err=>{
            this.router.navigate(['/Home']);
          }
        );
      });
    });
  }

  showArtistForm(attribute:{attrName:string, attrId:string | string[], value:string | string[], secondValue?:string}){
    this.showInput = true;
    this.inputAttr = attribute.attrName;
    this.inputValue = attribute.value;
    this.inputSecondValue = (attribute.secondValue) ? attribute.secondValue : this.inputSecondValue;
    if(attribute.attrName == 'reassign' || attribute.attrName == 'reassignMulti'){
      this.arstistIds = [];
      this.DatabaseConexService.getArtistsIds('id_artist').subscribe(
        sucess=>{console.log(sucess)
          sucess.message.forEach(artistData=>{
            let artistDataSplited = artistData.split('&');
            if(artistDataSplited.length == 2){
              this.arstistIds.push({id:artistDataSplited[0], name:artistDataSplited[1]});
            }
          });
        },
        err=>{
          console.log(err)
        }
      );
    }
    if(attribute.attrName == 'newTheme'){
      this.DatabaseConexService.getFlagsNames().subscribe(
        sucess=>{
          this.availableFlags = sucess.message;
          console.log(this.availableFlags)
        },
        err=>{
          console.log(err);
        }
      );

    }
  }

  async confirmFrom(){
    let sendForm = await this.modifyArtistData({attrName:this.inputAttr, attrId:'', value: this.inputValue});
    if(this.inputAttr == 'name'){
      this.modifyArtistData({attrName:'surname', attrId:'', value: this.inputSecondValue});
    }
    if(sendForm){
      this.showInput = false;
      this.inputAttr = '';
      this.inputValue = '';
      this.inputSecondValue = '';
      this.newTheme = {name:'', flag:'', flagFile: '', cover:[], themeFile:[], tags:'', lyrics:{native:'', esp:''}};
      this.reassignArtist = 'default';
    }
    
  }

  async modifyArtistData(attribute:{attrName:string, attrId:string | string[], value?:string | string[]}){
    console.log(attribute)

    let sendSucess = false;
    let hasFiles = false;
    let correctForm = false;

    switch (attribute.attrName){

      case 'avatar':

        let cover = document.getElementById('avatar') as HTMLInputElement;
        let formData = new FormData();
        
        if(this.artist && cover.files && cover.files.length > 0){
          formData.append(`artist_avatar&${this.artist.id_artist}`, cover.files[0]);
          hasFiles = true;
        }

        formData.append(`userName`, sesionValues.activeUser.name);

        correctForm = this.checkForm([{id:'avatar', value:''}]);console.log(correctForm)

        if(correctForm){
          await DataManage.toAsync((resolve: (value: unknown) => void)=>{
            if(hasFiles){
              this.DatabaseConexService.sendFilesToServer(formData).subscribe(
                sucess=>{
                  sendSucess = true;
                  resolve(sendSucess);
                },
                err=>{
                  resolve(sendSucess);
                }
              );
            }
            else{
              sendSucess = true;
              resolve(sendSucess);
            }
          });
        }

      return sendSucess;

      case 'newTheme':

        let name = this.newTheme.name;
        let flag = this.newTheme.flag;
        let tags = FormValidations.checkTags(this.newTheme.tags);
        let lyricsNative = this.newTheme.lyrics.native;
        let lyricsEsp = this.newTheme.lyrics.esp;

        let formDataFiles = new FormData();
        let flagFile = document.getElementById('flagFile') as HTMLInputElement;
        let coverFile = document.getElementById('coverFile') as HTMLInputElement;
        let themeFile = document.getElementById('themeFile') as HTMLInputElement;
        
        formDataFiles.append(`userName`, sesionValues.activeUser.name);

        if(flagFile.files && flagFile.files.length > 0){
          formDataFiles.append(`theme_flag&${flag}`, flagFile.files[0]);
          hasFiles = true;
        }
        if(this.artist && coverFile.files && coverFile.files.length > 0){
          formDataFiles.append(`theme_cover&${this.artist.id_artist}`, coverFile.files[0]);
          hasFiles = true;
        }
        if(this.artist && themeFile.files && themeFile.files.length > 0){
          formDataFiles.append(`theme_audio&${this.artist.id_artist}`, themeFile.files[0]);
          hasFiles = true;
        }

        correctForm = this.checkForm([{id:'name', value:name}, {id:'flag', value:flag}, {id:'files', value:''}]);
        if(correctForm){
          await DataManage.toAsync((resolve: (value: unknown) => void)=>{
            if(this.artist){
              this.DatabaseConexService.setNewTheme(this.artist?.id_artist, name, flag, tags, {native:lyricsNative, esp:lyricsEsp}, sesionValues.activeUser.name).subscribe(
                sucess=>{
                  if(this.artist) this.artist.setThemeList(sucess.message);
                  if(hasFiles){
                    this.DatabaseConexService.sendFilesToServer(formDataFiles).subscribe(
                      sucess=>{
                        sendSucess = true;
                        resolve(sendSucess);
                      },
                      err=>{
                        resolve(sendSucess);
                      }
                    );
                  }
                  else{
                    sendSucess = true;
                    resolve(sendSucess);
                  }
                },
                err=>{
                  console.log(err);
                  resolve(sendSucess);
                }
              );
            }
          });
        }

        return sendSucess;

      case 'reassignMulti':

        if(this.reassignArtist != 'default'){
          await DataManage.toAsync((resolve: (value: unknown) => void)=>{
            if(this.artist){
              this.DatabaseConexService.reassignArtistThemes(this.artist.id_artist, this.reassignArtist, sesionValues.activeUser.name).subscribe(
                sucess=>{console.log('inxa')
                  if(this.artist){console.log('inx')
                    this.artist.removeAllThemes();
                    sendSucess = true;
                    resolve(sendSucess);
                  }
                  else{
                    resolve(sendSucess);
                  }
                },
                err=>{
                  console.log(err);
                  resolve(sendSucess);
                }
              );
            }
          }); 
        }

        return sendSucess;

      case 'reassign':

        if(this.reassignArtist != 'default'){
          await DataManage.toAsync((resolve: (value: unknown) => void)=>{
            if(this.artist){
              this.DatabaseConexService.reassignArtistTheme(this.artist.id_artist, this.reassignArtist, attribute.value as string, sesionValues.activeUser.name).subscribe(
                sucess=>{
                  if(this.artist){
                    this.artist.removeTheme(attribute.value as string);
                    sendSucess = true;
                    resolve(sendSucess);
                  }
                  else{
                    resolve(sendSucess);
                  }
                },
                err=>{
                  console.log(err);
                  resolve(sendSucess);
                }
              );
            }
          }); 
        }

        return sendSucess;

      default:

        attribute.value = (attribute.attrName == 'tags') ? this.modifyArtistTag(attribute.value as string) : attribute.value ;

        await DataManage.toAsync((resolve: (value: unknown) => void)=>{
          if(this.artist){
            this.DatabaseConexService.setArtistAttribute(this.artist.id_artist, attribute.attrName, (attribute.value) ? attribute.value: '', sesionValues.activeUser.name).subscribe(
              sucess=>{
                if(sucess.message){
                  this.artist = new Artist(sucess.message.id_artist, sucess.message.name, sucess.message.surname, sucess.message.description, sucess.message.tags, sucess.message.themeList);
                  sendSucess = true;
                  if(attribute.attrName == 'id_artist'){
                    this.router.navigate(['/Artist'], {queryParams:{id:this.artist.id_artist}});
                  }
                  resolve(sendSucess);
                }
                else{
                  resolve(sendSucess);
                }
              },
              err=>{
                console.log(err);
                resolve(sendSucess);
              }
            );
          }
        });

        return sendSucess;

    }
  }

  checkForm(data: {id:string, value:string}[]){

    let correctFiles = 0;

    data.forEach(singleData=>{console.log(singleData.id)
      
      switch (singleData.id){

        case 'name':
          if(singleData.value != ''){
            this.nameErr.class = '';
            this.nameErr.text = '';
            correctFiles++;
          }
          else{
            this.nameErr.class = 'input-error';
            this.nameErr.text = 'Campo obligatorio';
          }

        break;

        case 'flag':

          if(singleData.value != ''){
            this.flagErr.class = '';
            this.flagErr.text = '';
            correctFiles++;
          }
          else{
            this.flagErr.class = 'input-error';
            this.flagErr.text = 'Campo obligatorio';
          }

        break;

        case 'avatar':

          if(this.formErr.text == '' || this.formErr.class == ''){
            this.formErr.class = '';
            this.formErr.text = '';
            correctFiles++;
          }
          else{
            this.formErr.class = 'input-error';
            this.formErr.text = 'Formato incorrecto';
          }
          
        break;

        case 'files':

          let files = [this.coverErr, this.flagFileErr, this.themeErr];
          let checkFilesError = true;

          files.forEach(file=>{
            if(file.text != '' || file.class != ''){
              checkFilesError = false;
            }
          });

          correctFiles = (checkFilesError) ? correctFiles + 1 : correctFiles;
          
        break;

      }

    });

    return (correctFiles == data.length);

  }

  modifyArtistTag(artistTag:string){
    if (this.artist){
      let newTags = [...this.artist.tags];
      let tagExists = this.artist.tags.indexOf(artistTag);
      (tagExists > -1) ? newTags.splice(tagExists, 1) : newTags.push(artistTag) ;
      return newTags;
    }
    return [];
  }

  deleteArtist(id:string){
    if(this.artist){
      this.DatabaseConexService.removeArtist(this.artist.id_artist, sesionValues.activeUser.name).subscribe(
        sucess=>{
          this.router.navigate(['/Home']);
        },
        err=>{
          console.log(err);
        }
      );
    }
  }

  deleteTheme(themeId:string){
    if(this.artist){
      this.DatabaseConexService.removeTheme(this.artist.id_artist, themeId, sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.artist){
            this.artist.removeTheme(themeId);
          }
          this.artist?.themeList.map
        },
        err=>{
          console.log(err);
        }
      );
    }
  }

  searchFlag(){
    let flagPreview = document.getElementById('flagPreview') as HTMLImageElement;
    let path = (this.availableFlags.indexOf(this.newTheme.flag) != -1) ? this.newTheme.flag : 'ghostFlag';
    flagPreview.src = `/uploads/media/image/flags/${path}.png`;
  }

  async setImagePreview(mode:{input:string, preview:string, errObj:{text:string, class:string}}){

    var reader = new FileReader();
    let files:undefined | HTMLInputElement;
    let imagePreview: undefined | HTMLImageElement;
    let errMessage: undefined | string;
    let errClass: undefined | string;

    switch (mode.input){

      case 'avatar':
        files = document.getElementById('avatar') as HTMLInputElement;
        imagePreview = document.getElementById('formPreview') as HTMLImageElement;
      break;

      case 'flag':
        files = document.getElementById('flagFile') as HTMLInputElement;
        imagePreview = document.getElementById('flagPreview') as HTMLImageElement;
      break;

      case 'cover':
        files = document.getElementById('coverFile') as HTMLInputElement;
        imagePreview = document.getElementById('coverPreview') as HTMLImageElement;
      break;

    }

    errMessage = await new Promise(resolve=>{
      reader.onload = function(){
        let result = reader.result as string;
        if (imagePreview && result && result.split(";")[0].split("/")[1] == "png"){
          imagePreview.src = reader.result as string;
          errClass = '';
          errMessage = '';
        }
        else{
          errClass = 'input-error';
          errMessage = 'Formato incorrecto';
        }
        resolve(errMessage)
      }
      if(files && files.files)
      reader.readAsDataURL(files.files[0]);
    });

    mode.errObj.text = errMessage as string;
    mode.errObj.class = errClass as string;

    if(mode.input == 'cover'){
      this.coverErr.text = errMessage as string;
      this.coverErr.class = errClass as string;
    }

    if(mode.input == 'flag'){
      this.flagFileErr.text = errMessage as string;
      this.flagFileErr.class = errClass as string;
    }

  }

  checkAudioFile(){
    let files = document.getElementById('themeFile') as HTMLInputElement;
    if(files.files){
      let extension = files.files[0].name.split('.')[1];
      if(extension == 'mp3'){
        this.themeErr.text = '';
        this.themeErr.class = '';
      }
      else{
        this.themeErr.text = 'Formato incorrecto';
        this.themeErr.class = 'input-error';
      }
    }
  }

  showItem(id:string){
    this.router.navigate(['/Theme'], {queryParams:{id:id}});
  }

}
