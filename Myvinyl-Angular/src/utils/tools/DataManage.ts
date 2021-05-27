import { Artist } from "src/app/classes/Artist";
import { Themes } from "src/app/classes/Themes";
import { User } from "src/app/classes/User";
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

    public static async clearRepeatData(list: Artist[] | Themes[] | User[], type:string){
    
        let cleanList: Artist[] | Themes[] | User[] = [];

        if(type == 'artist'){
          
          cleanList = cleanList as Artist[];
          list = list as Artist[];

          await DataManage.syncForEach(list, (artist: Artist)=>{
            cleanList = cleanList as Artist[];
            let inList = cleanList.map((artist: Artist)=>{return artist.id_artist}).indexOf(artist.id_artist);
            if(inList == -1){
              cleanList.push(artist);
            }
          });

        }
    
        if(type == 'theme'){
          
          cleanList = cleanList as Themes[];
          list = list as Themes[];

          await DataManage.syncForEach(list, (theme: Themes)=>{
            cleanList = cleanList as Themes[];
            let inList = cleanList.map((theme: Themes)=>{return theme.id}).indexOf(theme.id);
            if(inList == -1){
              cleanList.push(theme);
            }
          });

        }

        if(type == 'user'){
          
          cleanList = cleanList as User[];
          list = list as User[];

          await DataManage.syncForEach(list, (user: User)=>{
            cleanList = cleanList as User[];
            let inList = cleanList.map((user: User)=>{return user.name}).indexOf(user.name);
            if(inList == -1){
              cleanList.push(user);
            }
          });

        }

        return cleanList;
    
    }

}