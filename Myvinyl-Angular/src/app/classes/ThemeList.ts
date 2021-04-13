export class ThemeList{

    name:string;
    userView:string;
    userManage:string;
    private:string
    list:ThemeDataInterface[];

    constructor(name:string,userView:string,userManage:string,list:ThemeDataInterface){
        this.name = name;
        this.userView = userView;
        this.userManage = userManage;
    }

}

interface ThemeDataInterface{
    listId: string,
    themeId: string
}