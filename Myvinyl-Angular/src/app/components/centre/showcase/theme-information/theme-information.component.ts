import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Themes } from 'src/app/classes/Themes';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { ServerErrorToken } from 'src/app/interfaces/AuthorizationInterfaces';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { ThemeComment } from 'src/app/interfaces/ThemesInterface';
import { DataManage } from 'src/utils/tools/DataManage';
import { ThemeList } from 'src/app/classes/ThemeList';
import { Lyrics } from 'src/app/interfaces/LyricsInterface';
import { GlobalVariables } from 'src/utils/variables/variables';

@Component({
  selector: 'app-theme-information',
  templateUrl: './theme-information.component.html',
  styleUrls: ['./theme-information.component.css']
})
export class ThemeInformationComponent implements OnInit {

  candy: CandyInterface = {id: 'theme', name:'Theme', family:'candy-theme',route:'Theme', query:{}, routeQuery:''};
  mediaPath = '../../../../../assets/media';
  theme: Themes | undefined;
  flag: string = 'eng';
  lyrics: string | undefined;
  comment:string | undefined;
  defaultThemeList = '-- Selecciona lista --';
  selectedThemeList: string = this.defaultThemeList;
  userThemeLists:ThemeList[] = [];
  user = sesionValues.activeUser.name;
  coverCursorState = 'cursor-pointer';
  likesBarPercent:number = 0;
  dislikesBarColor:string = 'orange'; 
  isLike = 0;
  isSessionUser: boolean = false;
  isAdmin: boolean = false;
  suggestThemes: Themes[] = [];
  queryPage:number = 1;
  blackScreenStatus = GlobalVariables;

  vinylState = '';
  loadGif = false;

  showThemeListForm: boolean = false;
  buttonThemeList = 'Añadir';

  showInput: boolean = false;
  inputValue: string |string[] = '';
  inputSecondValue: string |string[] = '';
  inputAttr: string = '';
  formErr = {text:'', class:''};
  formErrFile = {text:'', class:''};
  attrTranslation = {id: "id", name: "nombre", flag: "bandera", tags: "etiqueta", lyrics: "letra", native:"original", esp: "traducción", cover:'portada', comments: "comentarios", likes: "likes", dislikes: "dislikes", views: "visitas", audio: "audio"};

  constructor(private comunicationService :ComunicationServiceService, private DatabaseConexService: DatabaseConexService, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent, private autorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.route.queryParams.subscribe(params =>{
      this.candy.query['id'] = params['id'];
      this.comunicationService.sendCandy(this.candy);
      this.DatabaseConexService.getThemeData(params['id']).subscribe(
        sucess=>{
          this.setDefaultValues(sucess);
        },
        err=>{
          this.router.navigate(['/Home']);
        }
      );
    });
    this.comunicationService.sendReproductorViewDataObservable.subscribe(data=>{this.reproductorSubscribe(data)});
  }

  updateUrl(event: Event, type: string){
    let element = event.target as HTMLImageElement;
    DataManage.repairBrokenImages(element, this.mediaPath, type);
  }

  reproductorSubscribe(data:{type:string, value: any}){

    if(data && data.type){
      let type = data.type;
      let value  = data.value;

      switch (type){

        case 'ready':
          if(this.theme){
            this.sentToReproductor('themes', {isThemeList:false, themes:[this.theme]});
          }
        break;

        case 'ended':
          this.vinylState = '';
          this.coverCursorState = 'cursor-pointer';
        break;

        case 'play':
          this.vinylState = 'show';
          this.coverCursorState = '';
        break;

        case 'stop':
          this.vinylState = 'cursor-pointer';
        break;

        case 'views':
          if(this.theme){
            this.theme.views = value
          }
        break;

        case 'loading-reverse':
          this.loadGif = true;
        break;

        case 'loaded-reverse':
          this.loadGif = false;
        break;
      }
    }

  }

  setDefaultValues(themeData){
    this.theme = new Themes(themeData.id,themeData.name,themeData.flag,themeData.tags,themeData.lyrics, themeData.artist, themeData.comments, themeData.likes, themeData.dislikes, themeData.views);
    this.lyrics = this.theme.lyrics.native;
    this.user = sesionValues.activeUser.name;
    this.userThemeLists = sesionValues.activeUser.themeLists;
    this.isSessionUser = (sesionValues.activeUser.email != undefined);
    this.isLike = sesionValues.activeUser.isThemeLike(themeData.id);
    this.isAdmin = (parseInt(sesionValues.activeUser.admin) == 1) ? true : false;

    this.checkForLastComment();
    this.calculateLikesPercentage();
    if(this.isLike < 0 && themeData.likes == 0 || this.isLike > 0 && themeData.dislikes == 0) {
      let likeValue = (this.isLike < 0) ? 'dislikes' : 'likes';
      //this.modifyThemeData({attrName:likeValue, attrId:'', value:themeData[likeValue] + 1});
    }

    this.searchResut();

  }

  searchResut(queryPage?: number | string){

    if(this.theme){

      let query = [this.theme.artist.name];
      query = query.concat(this.theme.tags);

      if(queryPage && queryPage == 'next'){
        this.queryPage ++;
        queryPage = this.queryPage;
      }
      else{
        this.suggestThemes = [];
      }

      queryPage = (queryPage) ? queryPage : 1;

      queryPage = queryPage as number;

      this.DatabaseConexService.getArtistDataByQuery(query, 2, queryPage, ['theme']).subscribe(
        async sucess=>{
          
          if(sucess.message){

            let paginateObject = sucess.message;

            query.forEach(async queryValue=>{
              this.suggestThemes = this.suggestThemes.concat(paginateObject[queryValue]['theme']['docs']);
            });

            this.suggestThemes = await DataManage.clearRepeatData(this.suggestThemes, 'theme', this.theme?.id) as Themes[];

          }

        },
        err=>{
          console.error(`Error: ${err}`);
        }
      );
    }

  }

  sentToReproductor(type:string, value?:any){
    value = (value != undefined) ? value : '';
    this.comunicationService.sendReproductorData({type, value});
  }

  calculateLikesPercentage(){
    if(this.theme){
      let total = this.theme.likes + this.theme.dislikes;
      let likesPercentage = this.theme.likes / total * 100;
      this.likesBarPercent = (isNaN(likesPercentage)) ? 0 : likesPercentage;
      if(total == 0){
        this.dislikesBarColor = 'gray';
      }
      else{
        this.dislikesBarColor = 'orange';
      }
    }
  }

  switchLyrics(){
    if (this.theme && this.lyrics == this.theme.lyrics.native){
      this.flag = 'spn';
      this.lyrics = this.theme.lyrics.esp;
    }
    else if(this.theme){
      this.flag = this.theme.flag;
      this.lyrics = this.theme.lyrics.native;
    }
  }
  
  publicateComment(){
    if(this.comment){
      localStorage.setItem('lastComment', JSON.stringify({themeId:this.theme?.id,comment:this.comment}));
      if(this.autorizationService.checkForToken() && this.theme){
        this.DatabaseConexService.setThemeComment(this.theme.id,sesionValues.activeUser.name,this.comment).subscribe(
          sucess=>{
            localStorage.removeItem('lastComment');
            if(this.theme && this.comment){
              this.theme.setNewComment(sucess.commentData.commentId,sucess.commentData.userName, true, sucess.commentData.comment, sucess.commentData.date);
              this.comment = '';
            }
          },
          err=>{
            let serverError = err.error as ServerErrorToken;
            if(serverError.destroyToken){
                this.autorizationService.destroySession();
                this.router.navigate(['/Sign-In']);
            }  
          }
        )
      }
      else{
        this.router.navigate(['/Sign-In']);
      }
    }
  }

  removeComment(commentId:string){
    if(this.autorizationService.checkForToken() && this.theme){
      this.DatabaseConexService.removeThemeComment(this.theme.id,sesionValues.activeUser.name,commentId).subscribe(
        success=>{
          if(this.theme){
            this.theme.removeComment(commentId);
          }
        },
        err=>{
          let serverError = err.error as ServerErrorToken;
            if(serverError.destroyToken){
                this.autorizationService.destroySession();
                this.router.navigate(['/Sign-In']);
            } 
        }
      );
    }
  }

  thumbValue(value:number){
    let thumb = (this.isLike != value) ? value : 0;

    if(this.autorizationService.checkForToken() && this.theme){
      this.DatabaseConexService.thumbValueTheme(this.theme.id, thumb, sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.theme){
            this.theme.likes = sucess.likes;
            this.theme.dislikes = sucess.dislikes;
            sucess.userThemeLists.forEach(themeList=>{
              sesionValues.activeUser.replaceThemeList(themeList.name ,themeList.list);
            });
            this.isLike = sesionValues.activeUser.isThemeLike(this.theme.id);  
            this.calculateLikesPercentage();         
          }
        },
        err=>{
          console.error(`Error: ${err}`);
          if(err.destroyToken){
            this.autorizationService.destroySession();
            this.router.navigate(['/Sign-In']);
        } 
        }
      );
    }
  }

  addToThmemeList(){
    if(this.theme){
      this.DatabaseConexService.addToThemeList(this.theme.artist.id, this.theme.id, this.selectedThemeList, sesionValues.activeUser.name).subscribe(
        sucess=>{
          sesionValues.activeUser.setThemeListList(this.selectedThemeList, sucess.message);
          this.showThemeListForm = false;
          this.selectedThemeList = '';
        },
        err=>{
          console.error(`Error: ${err}`);
        }
      );
    }
  }

  checkInList(){
    let inList = false;
    let list = sesionValues.activeUser.getThemeList(this.selectedThemeList);
    if(this.theme && list){
      inList = (list.list.map(theme=>{return (theme.id) ? theme.id : theme.themeId}).indexOf(this.theme.id) != -1);
    }

    this.buttonThemeList = (inList) ? 'Eliminar' : "Añadir";

  }

  async setImagePreview(mode:string){

    var reader = new FileReader();
    let files:undefined | HTMLInputElement;
    let imagePreview: undefined | HTMLImageElement;
    let errMessage: undefined | string;
    let errClass: undefined | string;

    files = document.getElementById(mode) as HTMLInputElement;console.log(files)
    imagePreview = document.getElementById('imagePreview') as HTMLImageElement;console.log(imagePreview)

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

    this.formErr.text = errMessage as string;
    this.formErrFile.class = errClass as string;

  }

  checkAudioFile(mode:string){
    let files = document.getElementById(mode) as HTMLInputElement;
    if(files.files){
      let extension = files.files[0].name.split('.')[1];
      if(extension == 'mp3'){
        this.formErr.text = '';
        this.formErr.class = '';
      }
      else{
        this.formErr.text = 'Formato incorrecto';
        this.formErrFile.class = 'input-error';
      }
    }
  }

  showThemeForm(attribute:{attrName:string, attrId:string | string[], value:string | string[], secondValue?:string}){
    this.clearForm();
    this.showInput = true;
    this.inputAttr = attribute.attrName;
    this.inputValue = attribute.value;
    this.inputSecondValue = (attribute.secondValue) ? attribute.secondValue : this.inputSecondValue;
    this.blackScreenStatus.blackScreenStatus = 'show';
  }

  async confirmFrom(){
    let sendForm = await this.modifyThemeData({attrName:this.inputAttr, attrId:'', value: this.inputValue});
    if(sendForm){
      this.clearForm();
    }
  }

  clearForm(){
    let imagePreview =  document.getElementById('imagePreview') as HTMLImageElement;
    this.showInput = false;
    this.inputAttr = '';
    this.inputValue = '';
    this.inputSecondValue = '';
    this.formErrFile.class = '';
    this.formErrFile.text = '';
    this.formErr.class = '';
    this.formErr.text = '';
    this.blackScreenStatus.blackScreenStatus = '';
    this.showThemeListForm = false;
    this.selectedThemeList = this.defaultThemeList;
    if(imagePreview) imagePreview.src = '';
  }

  deleteComment(commentId:string){

    if(this.theme){
      let commentIndex = this.theme?.comments.map(comment=>{return comment.commentId}).indexOf(commentId);
      if(commentIndex != -1){
        let list = DataManage.copyObject(this.theme.comments);
        list.splice(commentIndex, 1);
        this.modifyThemeData({attrName:'comments', attrId:'', value:list});
      }
    }

  }

  async modifyThemeData(attribute:{attrName:string, attrId:string | string[], value?:string | string[] | ThemeComment[] | Lyrics}){
    
    let sendSucess = false;

    switch (attribute.attrName){

      case 'audio':
      case 'flag':
      case 'cover':

        let formDataFiles = new FormData();
        let file = document.getElementById((attribute.attrName == 'flag') ? `${attribute.attrName}-file` : attribute.attrName) as HTMLInputElement;

        let fileType = (attribute.attrName == 'cover') ? 'theme_cover' : (attribute.attrName == 'audio') ? 'theme_audio' : 'theme_flag' ;
        let fileName = (attribute.attrName == 'flag') ? attribute.value : this.theme?.id;
        let correctionValues :{id:string, value:string}[] = [];

        switch (attribute.attrName){
          
          case 'flag':

            correctionValues.push({id:'flag', value:this.inputValue as string});

          break;

          case 'cover':

            correctionValues.push({id:'cover', value:''});

          break;

          case 'audio':

            correctionValues.push({id:'audio', value:''});

          break;

        }

        let correctForm = this.checkForm(correctionValues);

        if(correctForm){
          
          if(this.theme && file.files && file.files.length > 0){
            formDataFiles.append(`${fileType}&${fileName}`, file.files[0]);
            formDataFiles.append(`userName`, sesionValues.activeUser.name);
            await DataManage.toAsync((resolve: (value: unknown) => void)=>{
              this.DatabaseConexService.sendFilesToServer(formDataFiles).subscribe(
                sucess=>{
                  sendSucess = true;
                  resolve(sendSucess);
                },
                err=>{
                  resolve(sendSucess);
                }
              );
            });
          }

          if(attribute.attrName == 'flag'){
            await DataManage.toAsync((resolve: (value: unknown) => void)=>{
              if(this.theme){
                this.DatabaseConexService.setThemeAttribute(this.theme.id, attribute.attrName, (attribute.value) ? attribute.value : '', sesionValues.activeUser.name).subscribe(
                  sucess=>{
                    if(this.theme && sucess.message){
                      this.theme = new Themes(sucess.message.id, sucess.message.name, sucess.message.flag, sucess.message.tags, sucess.message.lyrics, this.theme.artist, sucess.message.comments, sucess.message.likes, sucess.message.dislikes, sucess.message.views);
                      sendSucess = true;
                      resolve(sendSucess);
                    }
                    else{
                      sendSucess = false;
                      resolve(sendSucess);
                    }
                  },
                  err=>{
                    console.error(`Error: ${err}`);
                    sendSucess = false;
                    resolve(sendSucess);
                  }
                );
              }
            });      
          }

        }

        return sendSucess;

      default:

        attribute.value = (attribute.attrName == 'tags') ? this.modifyThemeTag(attribute.value as string) : attribute.value ;
        attribute.value = (attribute.attrName == 'lyrics') ? {native: this.inputValue, esp:this.inputSecondValue} as Lyrics : attribute.value ;

        await DataManage.toAsync((resolve: (value: unknown) => void)=>{
          if(this.theme){
            this.DatabaseConexService.setThemeAttribute(this.theme.id, attribute.attrName, (attribute.value) ? attribute.value : '', sesionValues.activeUser.name).subscribe(
              sucess=>{
                if(this.theme && sucess.message){
                  let lyricsType = (this.lyrics == this.theme.lyrics.native) ? 'native' : 'esp';
                  this.theme = new Themes(sucess.message.id, sucess.message.name, sucess.message.flag, sucess.message.tags, sucess.message.lyrics, this.theme.artist, sucess.message.comments, sucess.message.likes, sucess.message.dislikes, sucess.message.views);
                  if(attribute.attrName == 'lyrics'){
                    this.lyrics = this.theme.lyrics[lyricsType];
                  }
                  sendSucess = true;
                  resolve(sendSucess);
                }
                else{
                  resolve(sendSucess);
                }
              },
              err=>{
                console.error(`Error: ${err}`);
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

    data.forEach(singleData=>{
      
      switch (singleData.id){

        case 'flag':
          if(singleData.value == '' || this.formErrFile.class == ''){
            this.formErr.class = '';
            this.formErr.text = '';
            correctFiles++;
          }
          else{
            this.formErr.class = 'input-error';
            this.formErr.text = 'Campo obligatorio';
          }

        break;

        case 'cover':
        case 'audio':

          if(this.formErr.text == '' && this.formErrFile.class == ''){
            this.formErrFile.class = '';
            this.formErr.text = '';
            correctFiles++;
          }
          else{
            this.formErrFile.class = 'input-error';
            this.formErr.text = 'Campo obligatorio';
          }

        break;

      }

    });

    return (correctFiles == data.length);

  }

  modifyThemeTag(themeTag:string){
    if (this.theme){
      let newTags = [...this.theme.tags];
      let tagExists = this.theme.tags.indexOf(themeTag);
      (tagExists > -1) ? newTags.splice(tagExists, 1) : newTags.push(themeTag) ;
      return newTags;
    }
    return [];
  }

  routeArtist(){
    this.router.navigate(['/Artist'], {queryParams:{id:this.theme?.artist.id}});
  }

  checkForLastComment(){
    if(localStorage.getItem('lastComment')){
      let lastComment = JSON.parse(localStorage.getItem('lastComment') as string);
      
      if(lastComment.themeId == this.theme?.id){
        this.comment = lastComment.comment;
      }     
      localStorage.removeItem('lastComment');
    }
  }

}
