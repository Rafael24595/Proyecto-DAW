import { Component, OnInit } from '@angular/core';
import { DatabaseConexService } from '../../../../services/database-conex.service'
import { sesionValues } from '../../../../../utils/sessionVariables';
import { ArtistInterface } from 'src/app/interfaces/ArtistsInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private DatabaseConexService: DatabaseConexService) { }

  ngOnInit(): void {

    this.DatabaseConexService.getArtists().subscribe(artists =>{
     
      artists.forEach(artist =>{

        let artistData = artist as ArtistInterface;

        sesionValues.artistList.setArtist(artistData);

      });

      console.log(sesionValues.artistList.list);
    
    });

  }

}
