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

  constructor(private comunicationService :ComunicationServiceService, private DatabaseConexService: DatabaseConexService, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent, private autorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.route.queryParams.subscribe(params =>{
      this.candy.query['id'] = params['id'];
      this.comunicationService.sendCandy(this.candy);
      this.DatabaseConexService.getThemeData(params['id']).subscribe(theme =>{
        this.theme = new Themes(theme.id,theme.name,theme.flag,theme.tags,theme.lyrics, theme.artist, theme.comments, theme.likes,theme.views,);
        this.checkForLastComment();
        this.user = sesionValues.activeUser.name;
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
    if(this.theme){
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
