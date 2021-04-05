import { ThemesInterface } from "./ThemesInterface";

export interface ArtistInterface{

    id_artist: string;
	name: string;
	surname: string;	
	description:string;
	tags: string[];
	themeList: ThemesInterface[];

}