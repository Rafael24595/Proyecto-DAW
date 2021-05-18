import { Lyrics } from "./LyricsInterface";

export interface ThemesInterface{
    id: string;
    name: string;
    flag: string;
    tags: string[];
    lyrics: Lyrics;
    comments: ThemeComment[];
    likes: number;
    dislikes: number;
    views: number;
    artist:{id:string, name:string, surname:string},
}

export interface ThemeComment{
    commentId:string,
    userName:string,
    activeUser:boolean,
    comment:string,
}