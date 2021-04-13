import { ThemeDataInterface } from '../interfaces/ThemeListsInterface'

export class ThemeList{

    name:string;
    userView:boolean;
    userManage:boolean;
    privateState:boolean;
    list:ThemeDataInterface[];

    constructor(name:string, userView:boolean | string, userManage:boolean | string, privateState:boolean | string, list:ThemeDataInterface[]){
        this.name = name;
        this.userView = (typeof userManage == 'string') ? JSON.parse(userView as string) : userView;
        this.userManage = (typeof userManage == 'string') ? JSON.parse(userManage as string) : userManage;
        this.privateState = (typeof privateState == 'string') ? JSON.parse(privateState as string) : privateState;
        this.list = list;
    }

    public static emptyThemeList(){
        return new ThemeList('',false,false,false,[])
    }

}
