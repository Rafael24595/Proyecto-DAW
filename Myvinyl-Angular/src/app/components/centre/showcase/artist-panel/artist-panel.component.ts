import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/classes/Artist';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service'
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { User } from 'src/app/classes/User';

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
  attrTranslation = {id_artist: "Id", name: "Nombre", surname: "Apellido", description: "Descripción", tags: "Etiqueta", themeList: "Lista", cover:'Carátula', newTheme:"Nuevo tema", reassign:'Reasignar'};
  newTheme = {name:'', flag:'', flagFile: '', cover:[], themeFile:[], tags:[], lyrics:{native:'', esp:''}};
  reassignArtist = 'default';
  arstistIds:{id:string, name:string}[] = [];
  availableFlags: string[] = [];
  coverInputErr:string = '';
  flagInputErr:string = '';
  themeInputErr:string = '';

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent, private DatabaseConexService: DatabaseConexService) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.DatabaseConexService.getArtistData(params['id']).subscribe(
          sucess=>{
            this.candy.query['id'] = params['id'];
            this.artist = sucess.artist as Artist;
            this.comunicationService.sendCandy(this.candy);
            this.user = sesionValues.activeUser;
            this.isAdmin = (parseInt(sesionValues.activeUser.admin) == 1) ? true : false;
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
    if(attribute.attrName == 'reassign'){
      this.arstistIds = [];
      this.DatabaseConexService.getArtistsIds('id_artist').subscribe(
        sucess=>{
          sucess.message.forEach(artistData=>{
            let artistDataSplited = artistData.split('&');
            if(artistDataSplited.length == 2){
              this.arstistIds.push({id:artistDataSplited[0], name:artistDataSplited[1]});
            }
          });
        },
        err=>{

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

  confirmFrom(){
    this.modifyArtistData({attrName:this.inputAttr, attrId:'', value: this.inputValue});
    if(this.inputAttr == 'name'){
      this.modifyArtistData({attrName:'surname', attrId:'', value: this.inputSecondValue});
    }
    this.showInput = false;
    this.inputAttr = '';
    this.inputValue = '';
    this.inputSecondValue = '';
    this.newTheme = {name:'', flag:'', flagFile: '', cover:[], themeFile:[], tags:[], lyrics:{native:'', esp:''}};
    this.reassignArtist = 'default';
  }

  modifyArtistData(attribute:{attrName:string, attrId:string | string[], value?:string | string[]}){
    console.log(attribute)
    switch (attribute.attrName){

      case 'newTheme':

        console.log(this.newTheme)

        let formDataFiles = new FormData();
        let flagFile = document.getElementById('flagFile') as HTMLInputElement;
        let coverFile = document.getElementById('coverFile') as HTMLInputElement;
        let themeFile = document.getElementById('themeFile') as HTMLInputElement;
        if(flagFile.files && flagFile.files.length > 0){
          formDataFiles.append('theme_flag', flagFile.files[0]);
          console.log(formDataFiles.getAll('theme_flag'));
        }
        if(coverFile.files && coverFile.files.length > 0){
          formDataFiles.append('theme_cover', coverFile.files[0]);
          console.log(formDataFiles.getAll('theme_cover'));
        }
        if(themeFile.files && themeFile.files.length > 0){
          formDataFiles.append('theme_audio', themeFile.files[0]);
          console.log(formDataFiles.getAll('theme_audio'));
        }

      break;

      case 'reassignMulti':

        if(this.reassignArtist != 'default'){
          
        }

      break;

      case 'reassign':

        if(this.reassignArtist != 'default'){
          console.log(this.reassignArtist)
        }

      break

      case 'tags':



      break;

      default:

      break;

    }
  }

  modifyArtistTag(artistTag:string){
    if (this.artist){
      let newTags = [...this.artist.tags];
      let tagExists = this.artist.tags.indexOf(artistTag);
      (tagExists > -1) ? newTags.splice(tagExists, 1) : newTags.push(artistTag) ;
      this.modifyArtistData({attrName:'tags', attrId:'', value: newTags});
    }
  }

  searchFlag(){
    let flagPreview = document.getElementById('flagPreview') as HTMLImageElement;
    let path = (this.availableFlags.indexOf(this.newTheme.flag) != -1) ? this.newTheme.flag : 'ghostFlag';
    flagPreview.src = `/uploads/media/image/flags/${path}.png`;
  }

  async setImagePreview(mode:string){

    var reader = new FileReader();
    let files:undefined | HTMLInputElement;
    let imagePreview: undefined | HTMLImageElement;
    let errMessage: undefined | string ;

    switch (mode){

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
          files?.classList.remove('input-error');
          errMessage = '';
        }
        else{
          files?.classList.add('input-error');
          errMessage = 'Formato incorrecto';
        }
        resolve(errMessage)
      }
      if(files && files.files)
      reader.readAsDataURL(files.files[0]);
    });

    if(mode == 'cover'){
      this.coverInputErr = errMessage as string;
    }

    if(mode == 'flag'){
      this.flagInputErr = errMessage as string;
    }

  }

  checkAudioFile(){
    let files = document.getElementById('themeFile') as HTMLInputElement;
    if(files.files){
      let extension = files.files[0].name.split('.')[1];
      if(extension == 'mp3'){
        this.themeInputErr = '';
        files.classList.remove('input-error');
      }
      else{
        files.classList.add('input-error');
        this.themeInputErr = 'Formato incorrecto';
      }
    }
  }

  showItem(id:string){
    this.router.navigate(['/Theme'], {queryParams:{id:id}});
  }

}
