import { ThemeListsInterface } from "./ThemeListsInterface";

export interface UserInterface{
    name: string;
    email: string;
    admin: string;
    themeLists: ThemeListsInterface[];
    likes : string[];
}