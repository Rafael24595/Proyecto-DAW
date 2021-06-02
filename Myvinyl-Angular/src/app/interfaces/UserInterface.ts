import { ThemeList } from "../classes/ThemeList";

export interface UserInterface{
    name: string;
    email: string;
    date:number;
    description:string,
    admin: string;
    themeLists: ThemeList[];
    likes : string[];
    activeAccount: boolean;
}