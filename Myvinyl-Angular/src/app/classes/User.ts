
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { ThemeListsInterface } from '../interfaces/ThemeListsInterface';
import { ThemeList } from './ThemeList';

export class User{

    public static activeUser: any;

    name: string;
    email: string;
    admin: string;
    themeLists: ThemeList[];
    likes : string[];

    private constructor(name: string, email: string, admin: string, likes: string[], themeLists?: ThemeListsInterface[]){
        
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.themeLists = [];
        this.likes = likes;

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
        })
    }

    public static setUser(name: string, email: string, admin: string,  themeLists: ThemeListsInterface[], likes: string[]){

        User.activeUser = new User(name, email, admin, likes, themeLists);

        return User.activeUser;

    }

    public static destroyUser(){

        User.setUser('@Usuario', 'user@example.com', '0', [ThemeList.emptyThemeList()], []);

        sesionValues.activeUser = User.activeUser;

    }

    public static getUser(){

        if (User.activeUser){

            return User.activeUser;

        }
        else{

            return User.setUser('@Usuario', 'user@example.com', '0', [ThemeList.emptyThemeList()], []);

        }

    }

}