import { Component, OnInit } from '@angular/core';
import { DatabaseConexService } from '../../../../services/database-conex.service'
import { sesionValues } from '../../../../../utils/sessionVariables';
import { ArtistInterface } from 'src/app/interfaces/ArtistsInterface';
import { Categories } from '../../../../../utils/variables';
import { Artist } from 'src/app/classes/Artist';
import { Themes } from 'src/app/classes/Themes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = Categories;

  constructor(private DatabaseConexService: DatabaseConexService) { }

  ngOnInit(): void {

    this.DatabaseConexService.getArtists().subscribe(artists =>{
     
      artists.forEach(artist =>{

        let artistData = artist as ArtistInterface;

        sesionValues.artistList.setArtist(artistData);

      });

      this.generateShowcaseItems();

      console.log(sesionValues.artistList.list);
    
    });

  }

  generateShowcaseItems(){

    sesionValues.artistList.list.forEach(artist => {

      artist.themeList.forEach(theme=>{

        for (const category in this.categories) {
          
          if (theme.tags.indexOf(`_${this.categories[category].code}`) != -1 && this.categories[category].items.length < 4){

            this.categories[category].items.push(theme);

          }
          
        }

      })

    });

  }

  showItem(element:EventTarget | null){

    let elementId = element as HTMLElement;
    let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;
    let item:Themes | null = null;

    sesionValues.artistList.list.find((artist:Artist)=>{
      artist.themeList.forEach((theme:Themes)=>{
        if(theme.id == itemId){
          item = theme;
          return true
        }
        return false})
    })

    console.log(item)
  }

}
