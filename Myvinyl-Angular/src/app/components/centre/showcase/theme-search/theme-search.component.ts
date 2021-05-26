import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service';
import { CandyBomb, SearchQuery, Variables } from 'src/utils/variables/variables';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { ArtistInterface } from 'src/app/interfaces/ArtistsInterface';
import { DataManage } from 'src/utils/tools/DataManage';
import { Artist } from 'src/app/classes/Artist';
import { Themes } from 'src/app/classes/Themes';

@Component({
  selector: 'app-theme-search',
  templateUrl: './theme-search.component.html',
  styleUrls: ['./theme-search.component.css']
})
export class ThemeSearchComponent implements OnInit {

  candy: CandyInterface = {id: 'search', name:'Search', family:'candy-theme',route:'Search', query:{}, routeQuery:''};
  mediaPath = '../../../../../assets/media';
  query:string[] = [];
  queryResult = SearchQuery;
  range = Variables.range;

  queryPageUsers: number = 1;
  queryPageArtist: number = 1;
  queryPageThemes: number = 1;

  constructor(private DatabaseConexService: DatabaseConexService, private comunicationService :ComunicationServiceService, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent) { }

  ngOnInit(): void {

    this.manageComponent.setLastURL();
    this.route.queryParams.subscribe(params =>{
      this.query = params['query'].toLowerCase().split('+');
      this.candy.query['query'] = params['query'];
      this.searchResut();
      }
    )
  
    this.comunicationService.sendCandy(CandyBomb);
    this.comunicationService.sendCandy(this.candy);

  }

  searchResut(queryPage?: number | string, fields?:string[] | string){

    let artistFields = ['name', 'surname', 'tags'];
    let themeFields = ['themeListName', 'themeListTags'];

    if(queryPage && queryPage == 'next'){

      if(fields && fields == 'theme'){
        this.queryPageThemes ++;
        queryPage = this.queryPageThemes;
        fields = ['theme'];
      }
  
      if(fields && fields == 'artist'){
        this.queryPageArtist ++;
        queryPage = this.queryPageArtist;
        fields = ['artist'];
      }
      
    }
    else{
      this.queryResult.users = [];
      this.queryResult.artists = [];
      this.queryResult.themes = [];
    }

    queryPage = (queryPage) ? queryPage : 1;
    fields = (fields) ? fields : ['all'];

    queryPage = queryPage as number;
    fields = fields as string[];

    this.DatabaseConexService.getArtistDataByQuery(this.query, 4, queryPage, fields).subscribe(
      async sucess=>{
        if(sucess.message){

          let paginateObject = sucess.message;

          this.query.forEach(async queryValue=>{
            artistFields.forEach(async field=>{
              if(field != 'theme') this.queryResult.artists = this.queryResult.artists.concat(paginateObject[queryValue][field]['docs']);
            });
            themeFields.forEach(async field=>{
              if(field != 'artist') this.queryResult.themes = this.queryResult.themes.concat(paginateObject[queryValue][field]['docs']);
            });
            
          });

          this.queryResult.artists = await DataManage.clearRepeatData(this.queryResult.artists, 'artist') as Artist[];
          this.queryResult.themes = await DataManage.clearRepeatData(this.queryResult.themes, 'theme') as Themes[];

        }
      },
      err=>{
        console.log(err);
      }
    );

    this.DatabaseConexService.getUsersData(this.query, 3).subscribe(
      sucess=>{
        console.log(sucess)
        this.queryResult.users = sucess.message;
      },
      err=>{
        console.log(`Error: ${err}`);
      }
    );

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
