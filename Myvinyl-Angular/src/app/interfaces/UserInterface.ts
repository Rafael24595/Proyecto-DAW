import { ThemeList } from "../classes/ThemeList";

export interface UserInterface{
    name: string;
    email: string;
    description:string,
    admin: string;
    themeLists: ThemeList[];
    likes : string[];
}