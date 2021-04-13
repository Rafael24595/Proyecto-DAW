import { ThemeList } from "../classes/ThemeList";

export interface UserInterface{
    name: string;
    email: string;
    admin: string;
    themeLists: ThemeList[];
    likes : string[];
}