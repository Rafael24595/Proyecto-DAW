import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/classes/Artist';
import { Themes } from 'src/app/classes/Themes';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';

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

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent) { }

  ngOnInit(): void {
  
    this.manageComponent.setLastURL();
    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.candy.query['id'] = params['id'];
        this.getThemeById(params['id']);
        }
      )
    
      this.comunicationService.sendCandy(this.candy);
      console.log(this.theme);

      if(this.theme == undefined){

        this.router.navigate(['/Home']);

      }

    });

  }

  getThemeById(id:string){

    sesionValues.artistList.list.find((artist:Artist)=>{
      artist.themeList.forEach((theme:Themes)=>{
        if(theme.id == id){
          this.theme = theme;
          if(theme.lyrics.native){
            this.lyrics = theme.lyrics.native;
            this.flag = theme.flag;
          }
          return true
        }
        return false})
    })

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
  
}
