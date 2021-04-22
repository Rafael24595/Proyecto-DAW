import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/classes/Artist';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { DatabaseConexService } from '../../../../services/database-conex-service/database-conex.service'
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-artist-panel',
  templateUrl: './artist-panel.component.html',
  styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'artist', name:'Artist', family:'candy-theme',route:'Artist', query:{}, routeQuery:''};
  artist: Artist | undefined;

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
          },
          err=>{
            this.router.navigate(['/Home']);
          }
        );
      });
    });

  }

  showItem(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;

    this.router.navigate(['/Theme'], {queryParams:{id:itemId}});

  }

}
