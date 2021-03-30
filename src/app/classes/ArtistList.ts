import { Artist } from "./Artist";
import { ArtistInterface } from '../interfaces/ArtistsInterface'

export class ArtistList{

    list: Artist[];

    constructor(){
        this.list = []
    }

    setArtist(artist: ArtistInterface){

        this.list.push(new Artist(artist.id_artist, artist.name, artist.surname, artist.tags, artist.themeList));

    }

}