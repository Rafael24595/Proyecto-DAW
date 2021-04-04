import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/classes/Artist';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-artist-panel',
  templateUrl: './artist-panel.component.html',
  styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'artist', name:'Artist', family:'candy-theme',route:'Artist', query:{}};
  artist: Artist | undefined;

  constructor(private comunicationService :ComunicationServiceService, private updateArtistList:UpdateArtistList, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.updateArtistList.getFromDataBase.then(()=> {

      this.route.queryParams.subscribe(params =>{
        this.candy.query['id'] = params['id'];
        this.getArtistById(params['id']);
        }
      )
    
      this.comunicationService.sendCandy(this.candy);

      if(this.artist == undefined){

        this.router.navigate(['/Home']);

      }

    });

  }

  getArtistById(id:string){

    sesionValues.artistList.list.find((artist:Artist)=>{
      if(artist.id_artist == id){
        this.artist =  artist;
        return true;
      }
      return false;
    });

  }

  showItem(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;

    this.router.navigate(['/Theme'], {queryParams:{id:itemId}});

  }

}
