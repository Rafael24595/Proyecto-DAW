import { ArtistInterface } from 'src/app/interfaces/ArtistsInterface';
import { DatabaseConexService } from '../../app/services/database-conex.service'
import { sesionValues } from '../variables/sessionVariables';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UpdateArtistList{

    constructor(private DatabaseConexService: DatabaseConexService){};

    getFromDataBase = this.getDataFromDataBase();

    getDataFromDataBase(): Promise<boolean> {

        return new Promise(resolve=>{

            sesionValues.artistList.clearArtistList();

            this.DatabaseConexService.getArtists().subscribe(artists =>{console.log(artists)
 
                artists.forEach(artist =>{
          
                  let artistData = artist as ArtistInterface;
          
                  sesionValues.artistList.setArtist(artistData);
          
                });
    
                resolve(true);
              
            });

        })

    }

}