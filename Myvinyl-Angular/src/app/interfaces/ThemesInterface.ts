import { Lyrics } from "./LyricsInterface";

export interface ThemesInterface{
    id: string;
    name: string;
    flag: string;
    tags: string[];
    lyrics: Lyrics;
    comments: ThemeComment[];
    likes: number;
    views: number;
}

export interface ThemeComment{
    commentId:string,
    userName:string,
    activeUser:string,
    comment:string,
}