import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { SearchQuery } from 'src/utils/variables/variables';

@Component({
  selector: 'app-theme-search',
  templateUrl: './theme-search.component.html',
  styleUrls: ['./theme-search.component.css']
})
export class ThemeSearchComponent implements OnInit {

  candy: CandyInterface = {id: 'search', name:'Search', family:'candy-search',route:'Search', query:''};
  query:string = '';
  queryResult = SearchQuery;

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.query = params['query'].toLowerCase();
        this.candy.query = `?query=${params['query']}`;
        console.log(params['query'])
        this.searchResut();
        }
      )
    
      this.comunicationService.sendCandy(this.candy);

    });

  }

  searchResut(){

    this.queryResult.artists = [];
    this.queryResult.themes = [];

    sesionValues.artistList.list.forEach(artist=>{

      if (artist.name.toLowerCase().includes(this.query) || artist.surname.toLowerCase().includes(this.query) || artist.tags.lastIndexOf(this.query.toUpperCase()) != -1){
        this.queryResult.artists.push(artist);
      }

      artist.themeList.forEach(theme => {
        
        if (theme.name.toLowerCase().includes(this.query) || (theme.tags.lastIndexOf(this.query.toUpperCase()) != -1 || theme.tags.lastIndexOf(this.query.toLowerCase()) != -1)){
          this.queryResult.themes.push(theme);
        }

      });

    });console.log(this.queryResult)

  }

  showItem(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;

    this.router.navigate(['/Theme'], {queryParams:{id:itemId}});

  }

}
