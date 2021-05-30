import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service';
import { CandyBomb, SearchQuery, Variables } from 'src/utils/variables/variables';
import { DataManage } from 'src/utils/tools/DataManage';
import { Artist } from 'src/app/classes/Artist';
import { Themes } from 'src/app/classes/Themes';
import { User } from 'src/app/classes/User';

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
  showUser: boolean = true;

  limitArtistTheme:number = 4;
  limitUser: number = 3;

  queryPageUsers: number = 1;
  queryPageArtist: number = 1;
  queryPageThemes: number = 1;

  constructor(private DatabaseConexService: DatabaseConexService, private comunicationService :ComunicationServiceService, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent) { }

  ngOnInit(): void {

    this.manageComponent.setLastURL();
    this.route.queryParams.subscribe(params =>{
      this.query = params['query'].toLowerCase().split('+');
      this.showUser = (!params['user']);
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

      if(fields && fields == 'user'){
        this.queryPageUsers ++;
        queryPage = this.queryPageUsers;
        fields = ['user'];
      }

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
    this.DatabaseConexService.getArtistDataByQuery(this.query, this.limitArtistTheme, queryPage, fields).subscribe(
      async sucess=>{
        if(sucess.message){
          let paginateObject = sucess.message;
          this.query.forEach(async queryValue=>{
            if(fields && typeof fields == 'object'){
              let artistFieldsQuery = (fields[0] == 'all') ? artistFields : fields;
              artistFieldsQuery.forEach(async field=>{
                if(field != 'theme' && field != 'user') this.queryResult.artists = this.queryResult.artists.concat(paginateObject[queryValue][field]['docs']);
              });
              let themeFieldsQuery = (fields[0] == 'all') ? themeFields : fields;
              themeFieldsQuery.forEach(async field=>{
                if(field != 'artist' && field != 'user') this.queryResult.themes = this.queryResult.themes.concat(paginateObject[queryValue][field]['docs']);
              });
            }
          });console.log( this.queryResult.artists)
          this.queryResult.artists = await DataManage.clearRepeatData(this.queryResult.artists, 'artist') as Artist[];
          this.queryResult.themes = await DataManage.clearRepeatData(this.queryResult.themes, 'theme') as Themes[];console.log( this.queryResult.artists)
        }
      },
      err=>{
        console.error(`Error: ${err}`);
      }
    );

    if(this.showUser && fields[0] != 'theme' && fields[0] != 'artist'){
      this.DatabaseConexService.getUsersData(this.query, this.limitUser, queryPage).subscribe(
        async sucess=>{
          let paginateObject = sucess.message;
          this.query.forEach(queryData=>{
            this.queryResult.users = this.queryResult.users.concat(paginateObject[queryData]['docs']);
          });
          this.queryResult.users = await DataManage.clearRepeatData(this.queryResult.users, 'user') as User[];
        },
        err=>{
          console.error(`Error: ${err}`);
        }
      );
    }

  }

  updateUrl(event: Event, type: string){
    let element = event.target as HTMLImageElement;
    DataManage.repairBrokenImages(element, this.mediaPath, type);
  }

  showLess(type:string){
    switch (type){

      case 'user':
        if(this.queryResult.users.length > this.limitUser){
          let remove = (this.queryResult.users.length - this.limitUser) / this.limitUser;
          remove = (remove > 1) ? 1 : remove;
          remove = this.limitUser * remove;
          this.queryResult.users.splice(-1 * remove, remove);
          this.queryPageUsers = (this.queryPageUsers == 1) ? 1 : this.queryPageUsers = this.queryPageUsers - 1;
        }
      break;

      case 'artist':
        if(this.queryResult.artists.length > this.limitArtistTheme){
          let remove = (this.queryResult.artists.length - this.limitArtistTheme) / this.limitArtistTheme;
          remove = (remove > 1) ? 1 : remove;
          remove = this.limitArtistTheme * remove;
          this.queryResult.artists.splice(-1 * remove, remove);
          this.queryPageArtist = (this.queryPageArtist == 1) ? 1 : this.queryPageArtist = this.queryPageArtist - 1;
        }
      break;

      case 'theme':
        if(this.queryResult.themes.length > this.limitArtistTheme){
          let remove = (this.queryResult.themes.length - this.limitArtistTheme) / this.limitArtistTheme;
          remove = (remove > 1) ? 1 : remove;
          remove = this.limitArtistTheme * remove;
          this.queryResult.themes.splice(-1 * remove, remove);
          this.queryPageThemes = (this.queryPageThemes == 1) ? 1 : this.queryPageThemes = this.queryPageThemes - 1;
        }
      break;

    }
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
