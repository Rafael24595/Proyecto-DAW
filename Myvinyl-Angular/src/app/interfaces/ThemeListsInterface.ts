import { Themes } from "../classes/Themes";

export interface ThemeListsInterface{
    name:string;
    userView:boolean;
    userManage:boolean;
    privateState:boolean;
    list:Themes[];
}

export interface ThemeDataInterface{
    listId: string,
    themeId: string,
    name?:string,
}