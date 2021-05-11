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

@Component({
  selector: 'app-theme-information',
  templateUrl: './theme-information.component.html',
  styleUrls: ['./theme-information.component.css']
})
export class ThemeInformationComponent implements OnInit {

  candy: CandyInterface = {id: 'theme', name:'Theme', family:'candy-theme',route:'Theme', query:{}, routeQuery:''};
  theme: Themes | undefined;
  flag: string = 'eng';
  lyrics: string | undefined;
  comment:string | undefined;
  user = sesionValues.activeUser.name;
  isLike = 0;
  isAdmin: boolean = false;
  showInput: boolean = false;
  inputValue: string |string[] = '';
  inputSecondValue: string |string[] = '';
  inputAttr: string = '';
  formErr = {text:'', class:''};
  attrTranslation = {id: "Id", name: "Nombre", flag: "Bandera", tags: "Etiqueta", lyrics: "Letra", native:"Original", esp: "Traducción", picture:'Portada', comments: "Comentarios", likes: "Likes", dislikes: "Dislikes", views: "Visitas", audio: "Audio"};

  constructor(private comunicationService :ComunicationServiceService, private DatabaseConexService: DatabaseConexService, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent, private autorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.route.queryParams.subscribe(params =>{
      this.candy.query['id'] = params['id'];
      this.comunicationService.sendCandy(this.candy);
      this.DatabaseConexService.getThemeData(params['id']).subscribe(theme =>{
        this.theme = new Themes(theme.id,theme.name,theme.flag,theme.tags,theme.lyrics, theme.artist, theme.comments, theme.likes, theme.dislikes, theme.views,);
        this.checkForLastComment();
        this.user = sesionValues.activeUser.name;
        this.isLike = sesionValues.activeUser.isThemeLike(theme.id);
        this.isAdmin = (parseInt(sesionValues.activeUser.admin) == 1) ? true : false;
        if(this.isLike < 0 && theme.likes == 0 || this.isLike > 0 && theme.dislikes == 0) {
          let likeValue = (this.isLike < 0) ? 'dislikes' : 'likes';
          this.modifyThemeData({attrName:likeValue, attrId:'', value:theme[likeValue] + 1});
        }
      });
      }
    )
  }

  switchLyrics(){
    if (this.theme && this.lyrics == this.theme.lyrics.native){
      this.flag = 'esp';
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
          sucess=>{console.log(sucess);
            localStorage.removeItem('lastComment');
            if(this.theme && this.comment){
              this.theme.setNewComment(sucess.commentId,sucess.userName,'true',sucess.comment);
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
          }
        },
        err=>{console.log(err);
          if(err.destroyToken){
            this.autorizationService.destroySession();
            this.router.navigate(['/Sign-In']);
        } 
        }
      );
    }
  }

  async setImagePreview(mode:string){

    var reader = new FileReader();
    let files:undefined | HTMLInputElement;
    let imagePreview: undefined | HTMLImageElement;
    let errMessage: undefined | string;
    let errClass: undefined | string;

    files = document.getElementById(mode) as HTMLInputElement;
    imagePreview = document.getElementById('imagePreview') as HTMLImageElement;

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
    this.formErr.class = errClass as string;

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
        this.formErr.class = 'input-error';
      }
    }
  }

  showThemeForm(attribute:{attrName:string, attrId:string | string[], value:string | string[], secondValue?:string}){
    this.showInput = true;
    this.inputAttr = attribute.attrName;
    this.inputValue = attribute.value;
    this.inputSecondValue = (attribute.secondValue) ? attribute.secondValue : this.inputSecondValue;
  }

  async confirmFrom(){
    let sendForm = await this.modifyThemeData({attrName:this.inputAttr, attrId:'', value: this.inputValue});
    if(sendForm){
      this.showInput = false;
      this.inputAttr = '';
      this.inputValue = '';
      this.inputSecondValue = '';
    }
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

  async modifyThemeData(attribute:{attrName:string, attrId:string | string[], value?:string | string[] | ThemeComment[]}){
    console.log(attribute)
    
    let sendSucess = false;

    switch (attribute.attrName){

      case 'audio':
      case 'flag':
      case 'cover':

        let formDataFiles = new FormData();
        let file = document.getElementById(attribute.attrName) as HTMLInputElement;

        let fileType = (attribute.attrName == 'cover') ? 'theme_cover' : (attribute.attrName == 'audio') ? 'theme_audio' : 'theme_flag' ;
        let fileName = (attribute.attrName == 'flag') ? attribute.value : this.theme?.id;
        let correctionValues = await ()=>{
          switch (attribute.attrName){
            
            case 'flag':

              return 

            break;

          }
        }

        let correctForm = this.checkForm([{id:'name', value:name}, {id:'flag', value:flag}, {id:'files', value:''}]);

        if(correctForm){
          
        }

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

        return sendSucess;

      default:

        attribute.value = (attribute.attrName == 'tags') ? this.modifyThemeTag(attribute.value as string) : attribute.value ;

        await DataManage.toAsync((resolve: (value: unknown) => void)=>{
          if(this.theme){
            this.DatabaseConexService.setThemeAttribute(this.theme.artist.id, this.theme.id, attribute.attrName, (attribute.value) ? attribute.value : '', sesionValues.activeUser.name).subscribe(
              sucess=>{
                if(this.theme && sucess.message){
                  this.theme = new Themes(sucess.message.id, sucess.message.name, sucess.message.flag, sucess.message.tags, sucess.message.lyrics, this.theme.artist, sucess.message.comments, sucess.message.likes, sucess.message.dislikes, sucess.message.views);
                  console.log(this.theme)
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

        return sendSucess;
      
    }

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
      
      if(lastComment.themeId == this.theme?.id){console.log(lastComment.themeId + " - " + this.theme?.id)
        this.comment = lastComment.comment;
      }     
      localStorage.removeItem('lastComment');
    }
  }

}
