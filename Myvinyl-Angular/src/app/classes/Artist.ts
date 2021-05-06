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

	setThemeList(themeList:Themes[]){
		this.themeList = themeList;
	}

	removeTheme(themeId:string){
		let themeIndex = this.themeList.map(theme=>{return theme.id}).indexOf(themeId);
		let index = 1;
		if(themeIndex != -1){
			this.themeList.splice(themeIndex, 1);
		}
		this.themeList.forEach(theme=>{
			theme.id = `${this.id_artist}-${index}`;
			index++;
		});
	}

	removeAllThemes(){
		this.themeList = [];
	}
}