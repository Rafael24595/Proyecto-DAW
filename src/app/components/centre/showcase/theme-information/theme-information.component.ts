import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/classes/Artist';
import { Themes } from 'src/app/classes/Themes';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-theme-information',
  templateUrl: './theme-information.component.html',
  styleUrls: ['./theme-information.component.css']
})
export class ThemeInformationComponent implements OnInit {

  theme: Themes | undefined;
  lyrics: string = '<p><b>Letra no disponible</b><p>';

  constructor(private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.getThemeById(params['id']);
        }
      )
    
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
          }
          return true
        }
        return false})
    })

  }
  
}
