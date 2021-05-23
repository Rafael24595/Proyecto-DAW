import { Artist } from "src/app/classes/Artist";
import { Themes } from "src/app/classes/Themes";
import { sesionValues } from "../variables/sessionVariables";

export class DataManage{

    public static copyObject(object:object){
        let objectToString = JSON.stringify(object);
        return JSON.parse(objectToString);
    }

    public static setFocus(id:string){
        setTimeout(() => {document.getElementById(id)?.focus();}, 100);
      }

    public static syncForEach(list:any, func:Function){
        return new Promise(resolve=>{
            let result = list.forEach(func);
            resolve(result);
        });
    }

    public static toAsync(func:Function){
        return new Promise(resolve=>{
            func(resolve);
        })
    }

    public static async clearRepeatData(list: Artist[], single: string){

        let artistList: Artist[] = [];
        let themesList: Themes[] = [];
    
        await DataManage.syncForEach(list, (artist: Artist)=>{
          
          if (artist.name.toLowerCase().includes(single) || artist.surname.toLowerCase().includes(single) || artist.tags.lastIndexOf(single.toUpperCase()) != -1){
            let alredyIn = artistList.find(artistIn=>{return (artistIn.id_artist == artist.id_artist)});
            if (!alredyIn) artistList.push(artist);
          }
    
          artist.themeList.forEach(theme => {
            if (theme.name.toLowerCase().includes(single) || (theme.tags.lastIndexOf(single.toUpperCase()) != -1 || theme.tags.lastIndexOf(single.toLowerCase()) != -1)){
              let alredyIn = themesList.find(themeIn=>{return (themeIn.id == theme.id)});
              let newTheme = theme;
              newTheme.artist = {id:'', name: '', surname:''};
              newTheme.artist.id = artist.id_artist;
              newTheme.artist.name = artist.name;
              newTheme.artist.surname = artist.surname;
              if (!alredyIn) themesList.push(theme);
            }
          });
          
        });
    
        return {artistList, themesList};
    
      }

}