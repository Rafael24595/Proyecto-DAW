import { ThemesInterface } from "./ThemesInterface";

export interface ArtistInterface{

    id_artist: string;
	name: string;
	surname: string;	
	tags: string[];
	themeList: ThemesInterface[];

}