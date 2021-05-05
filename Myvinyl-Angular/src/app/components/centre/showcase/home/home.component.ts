import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { sesionValues } from '../../../../../utils/variables/sessionVariables';
import { Categories } from '../../../../../utils/variables/variables';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ManageComponent } from 'src/utils/tools/ManageComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candy: CandyInterface = {id: 'home', name:'Home', family:'candy-home',route:'Home', query:{}, routeQuery:''};
  categories = Categories;
  isAdmin: boolean = false;
  showForm: boolean = false;
  newArtist = {id: '', name:'', surname:'', tags: [], avatar:[]};
  avatarSRC = 'ghostAvatar.png';

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private manageComponent:ManageComponent) { }

  ngOnInit(): void {

    this.manageComponent.setLastURL();
    this.comunicationService.sendCandy(this.candy);
    this.updateArtistList.getFromDataBase.then(()=> this.generateShowcaseItems());

  }

  generateShowcaseItems(){

    sesionValues.artistList.list.forEach(artist => {
      artist.themeList.forEach(theme=>{
        for (const category in this.categories) {
          if (theme.tags.indexOf(`_${this.categories[category].code}`) != -1 && this.categories[category].items.length < 4){
            this.categories[category].items.push(theme);
          }
        }
      });
    });

    this.isAdmin = (parseInt(sesionValues.activeUser.admin) == 1) ? true : false;

  }

  showItem(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;

    this.router.navigate(['/Theme'], {queryParams:{id:itemId}});

  }

  showHomeForm(){

    this.showForm = true;

  }

  confirmFrom(){
    this.modifyThemeData();
    this.newArtist = {id: '', name:'', surname:'', tags: [], avatar:[]};
  }

  modifyThemeData(){
    console.log(this.newArtist)
  }

}
