import { ThemesInterface } from '../interfaces/ThemesInterface';
import { Themes } from './Themes';

export class Artist {
	id_artist: String;
	name: String;
	surname: String;	
	tags: String[];
	themeList: Themes[];

	constructor(id_artist:string, name: String, surname: String, tags: String[], themeList: ThemesInterface[]){

		this.id_artist = id_artist;
		this.name = name;
		this.surname = surname;
		this.tags = tags;
		this.themeList = [];

		themeList.forEach(theme=>{
			this.themeList.push(new Themes(theme.id, theme.name, theme.flag, theme.tags, theme.comments, theme.likes, theme.views))
		})

	}
}