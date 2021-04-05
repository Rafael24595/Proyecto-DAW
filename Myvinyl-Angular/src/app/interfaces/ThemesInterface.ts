import { Lyrics } from "./LyricsInterface";

export interface ThemesInterface{
    id: string;
    name: string;
    flag: string;
    tags: string[];
    lyrics: Lyrics;
    comments: string[];
    likes: number;
    views: number;
}