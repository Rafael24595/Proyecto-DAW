import { ThemeListsInterface } from '../interfaces/ThemeListsInterface'

export class User{

    public static activeUser: any;

    name: string;
    password: string;
    email: string;
    admin: string;
    themeLists: ThemeListsInterface[];

    private constructor(name: string, password: string, email: string, admin: string,  themeLists: ThemeListsInterface[]){
        
        this.name = name;
        this.password = password;
        this.email = email;
        this.admin = admin;
        this.themeLists = themeLists;

    }

    public static setUser(name: string, password: string, email: string, admin: string,  themeLists: ThemeListsInterface[]){

        User.activeUser = new User(name, password, email, admin, themeLists);

        return User.activeUser;

    }

    public static getUser(){

        if (User.activeUser){

            return User.activeUser;

        }
        else{

            return User.setUser('@Usuario', '1234', 'user@example.com', '0',  []);

        }

    }

}