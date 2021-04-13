export interface ThemeListsInterface{
    name:string;
    userView:boolean;
    userManage:boolean;
    privateState:boolean;
    list:ThemeDataInterface[];
}

export interface ThemeDataInterface{
    listId: string,
    themeId: string
}