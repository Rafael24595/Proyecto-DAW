
import { ThemeDataInterface, ThemeListsInterface } from '../interfaces/ThemeListsInterface';
import { ThemeList } from './ThemeList';
import { Themes } from './Themes';

export class User{

    public static activeUser: any;

    name: string;
    email: string;
    admin: string;
    themeLists: ThemeList[];

    private constructor(name: string, email: string, admin: string, themeLists?: ThemeList[]){
        
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.themeLists = [];

        if(themeLists){
            themeLists.forEach(themeList=>{
            this.themeLists.push(new ThemeList(themeList.name,themeList.userView,themeList.userManage,themeList.privateState,themeList.list));
            });
        }
        else{
            this.setBasicThemeLists();
        }

    }

    getThemeList(themeListName:string){
        return this.themeLists.find(themeList=>{
            return (themeList.name == themeListName);
        })
    }

    setThemeListList(themeListName:string, newThemeList:Themes[]){

        console.log(newThemeList)

        let posicion = this.themeLists.map(theme=>{return theme.name}).indexOf(themeListName);
        console.log(this.themeLists)
        if(posicion != -1){

            this.themeLists[posicion].list = newThemeList;

        }
        console.log(this.themeLists)
    }

    setBasicThemeLists(){
        this.themeLists.push(new ThemeList('@likes-list', true, false,true,[]));
        this.themeLists.push(new ThemeList('@dislikes-list', false, false,true,[]));

    }

    setAttribute(attribute:string, value:string){
        switch (attribute){
            case 'name':
                this.name = value;
            break;
            case 'email':
                this.email = value;
            break;
        }
    }

    setNewThemeList(themeList:ThemeList){
        this.themeLists.push(themeList);
    }

    setThemeListPrivacity(themeListName:string, status:boolean){
        let index = 0;
        this.themeLists.find(themeList=>{
            if(themeList.name == themeListName){
                this.themeLists[index].privateState = status;
                return true
            }
            return false;
        });
    }

    removeThemeList(themeListName:string){
        let index = 0;
        this.themeLists.find(themeList=>{
            if(themeList.name == themeListName){
                this.themeLists.splice(index, 1);
                return true;
            }
            index++;
            return false;
        });
    }

    removeFromThemeList(themeListName:string, themeId:string){
        let indexLevelI = 0;
        let indexLevelII = 0;
        this.themeLists.find(themeList=>{
            if(themeList.name == themeListName){
                themeList.list.find(theme=>{
                    if(theme.id == themeId){
                        this.themeLists[indexLevelI].list.splice(indexLevelII, 1);
                        return true
                    }
                    if(theme['themeId'] == themeId){
                        this.themeLists[indexLevelI].list.splice(indexLevelII, 1);
                        return true
                    }
                    indexLevelII++;
                    return false;
                });
                return true;
            }
            indexLevelI++;
            return false;
        });
    }

    replaceThemeList(themeListName:string, newList){
        let count = 0;
        this.themeLists.find(themeList=>{
            if(themeList.name == themeListName){
                this.themeLists[count].list = newList;
                return true;
            } 
            count++;
            return false
        });
    }

    isThemeLike(themeId:string){
        let likeList = this.themeLists.find(theme=>(theme.name == '@likes-list'));
        let dislikeList = this.themeLists.find(theme=>(theme.name == '@dislikes-list'));
        let isLike = 0;
        if(likeList){
            isLike = (likeList.list.find(themeData=>(themeData.id == themeId || themeData.themeId == themeId))) ? 1 : 0 ;
        }
        if(dislikeList && isLike == 0){
            isLike = (dislikeList.list.find(themeData=>(themeData.id == themeId || themeData.themeId == themeId))) ? -1 : 0 ;
        }
        else if (isLike == 0){
            
        }
        console.log(isLike)
        return isLike;
    }

    public static setUser(name: string, email: string, admin: string,  themeLists: ThemeList[]){

        User.activeUser = new User(name, email, admin, themeLists);

        return User.activeUser;

    }

    public static getUser(){

        if (User.activeUser){

            return User.activeUser;

        }
        else{

            return User.setUser('@Usuario', 'user@example.com', '0', [ThemeList.emptyThemeList()]);

        }

    }

}