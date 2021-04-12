
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { ThemeListsInterface } from '../interfaces/ThemeListsInterface';

export class User{

    public static activeUser: any;

    name: string;
    email: string;
    admin: string;
    themeLists: ThemeListsInterface[];
    likes : string[];

    private constructor(name: string, email: string, admin: string,  themeLists: ThemeListsInterface[], likes: string[]){
        
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.themeLists = themeLists;
        this.likes = likes;

    }

    public static setUser(name: string, email: string, admin: string,  themeLists: ThemeListsInterface[], likes: string[]){

        User.activeUser = new User(name, email, admin, themeLists, likes);

        return User.activeUser;

    }

    public static destroyUser(){

        User.setUser('@Usuario', 'user@example.com', '0', [], []);

        sesionValues.activeUser = User.activeUser;

    }

    public static getUser(){

        if (User.activeUser){

            return User.activeUser;

        }
        else{

            return User.setUser('@Usuario', 'user@example.com', '0', [], []);

        }

    }

}