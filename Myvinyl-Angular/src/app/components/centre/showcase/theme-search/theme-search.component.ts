import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service';
import { CandyBomb, SearchQuery } from 'src/utils/variables/variables';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { ArtistInterface } from 'src/app/interfaces/ArtistsInterface';
import { DataManage } from 'src/utils/tools/DataManage';
import { Artist } from 'src/app/classes/Artist';

@Component({
  selector: 'app-theme-search',
  templateUrl: './theme-search.component.html',
  styleUrls: ['./theme-search.component.css']
})
export class ThemeSearchComponent implements OnInit {

  candy: CandyInterface = {id: 'search', name:'Search', family:'candy-theme',route:'Search', query:{}, routeQuery:''};
  query:string[] = [];
  queryResult = SearchQuery;

  constructor(private DatabaseConexService: DatabaseConexService, private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent) { }

  ngOnInit(): void {

    this.manageComponent.setLastURL();
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
    console.log('inx')
console.log(this.query)
    this.query.forEach(single=>{

      this.DatabaseConexService.getArtistDataByQuery(this.query).subscribe(
        async sucess=>{
          if(sucess.message){

            sesionValues.artistList.list = [];

            await DataManage.syncForEach(sucess.message, (artist: Artist)=>{
              let artistData = artist as ArtistInterface;
              sesionValues.artistList.setArtist(artistData);
            });

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

          }
        },
        err=>{
          console.log(err);
        }
      );

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
