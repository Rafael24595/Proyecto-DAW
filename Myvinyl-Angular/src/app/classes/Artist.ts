import { ThemesInterface } from '../interfaces/ThemesInterface';
import { Themes } from './Themes';

export class Artist {
	id_artist: string;
	name: string;
	surname: string;
	description:string;	
	tags: string[];
	themeList: Themes[];

	constructor(id_artist:string, name: string, surname: string, description:string, tags: string[], themeList: ThemesInterface[]){

		this.id_artist = id_artist;
		this.name = name;
		this.surname = surname;
		this.description = description;
		this.tags = tags;
		this.themeList = [];

		themeList.forEach(theme=>{
			this.themeList.push(new Themes(theme.id, theme.name, theme.flag, theme.tags, theme.lyrics, theme.artist, theme.comments, theme.likes, theme.dislikes, theme.views))
		})

	}
}