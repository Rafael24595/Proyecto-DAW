import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { CandyBomb, SearchQuery } from 'src/utils/variables/variables';

@Component({
  selector: 'app-theme-search',
  templateUrl: './theme-search.component.html',
  styleUrls: ['./theme-search.component.css']
})
export class ThemeSearchComponent implements OnInit {

  candy: CandyInterface = {id: 'search', name:'Search', family:'candy-theme',route:'Search', query:{}, routeQuery:''};
  query:string[] = [];
  queryResult = SearchQuery;

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.query = params['query'].toLowerCase().split('+');
        this.candy.query['query'] = params['query'];
        this.searchResut();
        }
      )
    
      this.comunicationService.sendCandy(CandyBomb);
      this.comunicationService.sendCandy(this.candy);

    });

  }

  searchResut(){

    this.queryResult.artists = [];
    this.queryResult.themes = [];

    this.query.forEach(single=>{

      sesionValues.artistList.list.forEach(artist=>{

        if (artist.name.toLowerCase().includes(single) || artist.surname.toLowerCase().includes(single) || artist.tags.lastIndexOf(single.toUpperCase()) != -1){
          let alredyIn = this.queryResult.artists.find(artistIn=>{return (artistIn.id_artist == artist.id_artist)});
          if (!alredyIn) this.queryResult.artists.push(artist);
        }
  
        artist.themeList.forEach(theme => {
          
          if (theme.name.toLowerCase().includes(single) || (theme.tags.lastIndexOf(single.toUpperCase()) != -1 || theme.tags.lastIndexOf(single.toLowerCase()) != -1)){
            let alredyIn = this.queryResult.themes.find(themeIn=>{return (themeIn.id == theme.id)});
            if (!alredyIn) this.queryResult.themes.push(theme);
          }
  
        });
  
      });

    });

  }

  showItem(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;

    this.router.navigate(['/Theme'], {queryParams:{id:itemId}});

  }

  showArtist(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;

    this.router.navigate(['/Artist'], {queryParams:{id:itemId}});

  }

}
