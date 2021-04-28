import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/classes/Artist';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service'
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-artist-panel',
  templateUrl: './artist-panel.component.html',
  styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'artist', name:'Artist', family:'candy-theme',route:'Artist', query:{}, routeQuery:''};
  artist: Artist | undefined;
  user: User | undefined;
  isAdmin: boolean = false;
  showInput: boolean = false;
  inputValue: string |string[] = '';
  inputSecondValue: string |string[] = '';
  inputAttr: string = '';
  attrTranslation = {id_artist: "Id", name: "Nombre", surname: "Apellido", description: "Descripción", tags: "Etiqueta", themeList: "Lista", picture:'Avatar'};

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute, private manageComponent:ManageComponent, private DatabaseConexService: DatabaseConexService) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.DatabaseConexService.getArtistData(params['id']).subscribe(
          sucess=>{
            this.candy.query['id'] = params['id'];
            this.artist = sucess.artist as Artist;
            this.comunicationService.sendCandy(this.candy);
            this.user = sesionValues.activeUser;
            this.isAdmin = (parseInt(sesionValues.activeUser.admin) == 1) ? true : false;
          },
          err=>{
            this.router.navigate(['/Home']);
          }
        );
      });
    });

  }

  showArtistForm(attribute:{attrName:string, attrId:string | string[], value:string | string[], secondValue?:string}){
    this.showInput = true;
    this.inputAttr = attribute.attrName;
    this.inputValue = attribute.value;
    this.inputSecondValue = (attribute.secondValue) ? attribute.secondValue : this.inputSecondValue;
  }

  confirmFrom(){
    this.modifyArtistData({attrName:this.inputAttr, attrId:'', value: this.inputValue});
    if(this.inputAttr == 'name'){
      this.modifyArtistData({attrName:'surname', attrId:'', value: this.inputSecondValue});
    }
    this.showInput = false;
    this.inputAttr = '';
    this.inputValue = '';
    this.inputSecondValue = '';
  }

  modifyArtistData(attribute:{attrName:string, attrId:string | string[], value?:string | string[]}){
    console.log(attribute)
  }

  modifyArtistTag(artistTag:string){
    if (this.artist){
      let newTags = [...this.artist.tags];
      let tagExists = this.artist?.tags.indexOf(artistTag);
      (tagExists > -1) ? newTags.splice(tagExists, 1) : newTags.push(artistTag) ;
      this.modifyArtistData({attrName:'tags', attrId:'', value: newTags});
    }
  }

  showItem(id:string){

    this.router.navigate(['/Theme'], {queryParams:{id:id}});

  }

}
