import { ThemesInterface } from '../interfaces/ThemesInterface';
import { Themes } from './Themes';

export class Artist {
	id_artist: String;
	name: String;
	surname: String;
	description:String;	
	tags: String[];
	themeList: Themes[];

	constructor(id_artist:string, name: String, surname: String, description:string, tags: String[], themeList: ThemesInterface[]){

		this.id_artist = id_artist;
		this.name = name;
		this.surname = surname;
		this.description = description;
		this.tags = tags;
		this.themeList = [];

		themeList.forEach(theme=>{
			this.themeList.push(new Themes(theme.id, theme.name, theme.flag, theme.tags, theme.lyrics, theme.comments, theme.likes, theme.views))
		})

	}
}