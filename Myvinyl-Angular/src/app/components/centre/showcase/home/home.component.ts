import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { sesionValues } from '../../../../../utils/variables/sessionVariables';
import { Categories, GlobalVariables } from '../../../../../utils/variables/variables';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { DataManage } from 'src/utils/tools/DataManage';
import { FormValidations } from 'src/utils/tools/FormValidations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candy: CandyInterface = {id: 'home', name:'Home', family:'candy-home',route:'Home', query:{}, routeQuery:''};
  mediaPath = '../../../../../assets/media';
  categories = Categories;
  isAdmin: boolean = false;
  showForm: boolean = false;
  newArtist = {id: '', name:'', surname:'', description:'', tags: '', avatarFile:[]};
  artistIds:string[] = [];
  artistIdsLoad = false;
  idErr = {text:'', class:''};
  nameErr = {text:'', class:''};
  avatarErr = {text:'', class:''};
  blackScreenStatus = GlobalVariables;

  constructor(private DatabaseConexService: DatabaseConexService, private comunicationService :ComunicationServiceService, private router: Router, private manageComponent:ManageComponent) { }

  ngOnInit(): void {

    this.manageComponent.setLastURL();
    this.comunicationService.sendCandy(this.candy);
    let query = ['OWB', 'MR', 'CW'];
    this.DatabaseConexService.getArtistDataByQuery(query, 4, 1, ['themeListTags']).subscribe(
      async sucess=>{
        if(sucess.message){
          console.log(sucess)
          this.generateShowcaseItems(sucess.message)
        }
      },
      err=>{
        console.log(err);
      }
    );

  }



  generateShowcaseItems(paginateList){

    for (const category in this.categories) {
      let items = paginateList[category]['themeListTags']['docs'];
      this.categories[category].items = items;
    }

    this.isAdmin = (parseInt(sesionValues.activeUser.admin) == 1) ? true : false;

  }

  showItem(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;

    this.router.navigate(['/Theme'], {queryParams:{id:itemId}});

  }

  showHomeForm(){
    this.showForm = true;
    this.DatabaseConexService.getArtistsIds('id_artist').subscribe(
      sucess=>{
        sucess.message.forEach(artistData=>{
          let artistDataSplited = artistData.split('&');
          if(artistDataSplited.length == 2){
            this.artistIds.push(artistDataSplited[0]);
            this.artistIdsLoad = true;
          }
        });
        this.blackScreenStatus.blackScreenStatus = 'show';
      },
      err=>{
        console.log(err);
      }
    );
  }

  async confirmFrom(){
    let sendForm = await this.modifyThemeData();
    console.log(sendForm)
    if(sendForm){
      this.setImagePreview('default')
      this.newArtist = {id: '', name:'', surname:'', description:'', tags: '', avatarFile:[]};
      this.showForm = false;
    }
  }

  async modifyThemeData(){
    console.log(this.newArtist)
    let sendSucess = false;
    let hasFiles = false;
    let id = this.newArtist.id.toLowerCase();
    let name = this.newArtist.name;
    let surname = this.newArtist.surname;
    let description = this.newArtist.description;
    let tags = FormValidations.checkTags(this.newArtist.tags);
    let formDataFiles = new FormData();
    let avatarFile = document.getElementById('avatarFile') as HTMLInputElement;
    if(avatarFile.files && avatarFile.files.length > 0){
      formDataFiles.append(`artist_avatar&${id}`, avatarFile.files[0]);
      formDataFiles.append(`userName`, sesionValues.activeUser.name);
      hasFiles = true;
    }
    let correctForm = this.checkForm([{id:'id', value:id}, {id:'name', value:name}, {id:'avatar', value:''}]);
    if(correctForm){
      await DataManage.toAsync((resolve: (value: unknown) => void)=>{
        this.DatabaseConexService.setNewArtist(id, name, surname, description, tags, sesionValues.activeUser.name).subscribe(
          sucess=>{
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
      });
    }
    return sendSucess;
  }

  checkForm(data: {id:string, value:string}[]){

    let correctFiles = 0;

    data.forEach(singleData=>{
      
      switch (singleData.id){

        case 'id':

          if(singleData.value != ''){
            if(this.checkId(singleData.value)){
              this.idErr.class = '';
              this.idErr.text = '';
              correctFiles++;
            }
            else{
              this.idErr.class = 'input-error';
              this.idErr.text = 'Id en uso';
            }
          }
          else{
            this.idErr.class = 'input-error';
            this.idErr.text = 'Campo obligatorio';
          }

        break;

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

        case 'avatar':

          if(this.avatarErr.text == '' && this.avatarErr.class == ''){
            this.avatarErr.class = '';
            this.avatarErr.text = '';
            correctFiles++;
          }
          
        break;

      }

    });

    return (correctFiles == data.length);

  }

  checkId(id:string){
    let idExists = this.artistIds.indexOf(id);
    return (this.artistIdsLoad && idExists == -1) ? true : false;
  }

  async setImagePreview(mode:string){

    var reader = new FileReader();
    let files:undefined | HTMLInputElement;
    let imagePreview: undefined | HTMLImageElement;
    let errMessage: undefined | string;
    let errClass: undefined | string;
    let loadFile = false;

    switch (mode){

      case 'avatar':
        files = document.getElementById('avatarFile') as HTMLInputElement;
        imagePreview = document.getElementById('avatarPreview') as HTMLImageElement;
        loadFile = true;
      break;

      case 'default':
        let avatarPreview = document.getElementById('avatarPreview') as HTMLImageElement;
        avatarPreview.src = 'ghotAvatar.png' 
      break;

    }

    if(loadFile){

      errMessage = await new Promise(resolve=>{
        reader.onload = function(){
          let result = reader.result as string;
          if (imagePreview && result && result.split(";")[0].split("/")[1] == "png"){
            imagePreview.src = reader.result as string;
            errClass = '';
            errMessage = '';
          }
          else{
            errClass ='input-error';
            errMessage = 'Formato incorrecto';
          }
          resolve(errMessage)
        }
        if(files && files.files)
        reader.readAsDataURL(files.files[0]);
      });
  
      if(mode == 'avatar'){
        this.avatarErr.text = errMessage as string;
        this.avatarErr.class = errClass as string;
      }

    }

  }
  
}
