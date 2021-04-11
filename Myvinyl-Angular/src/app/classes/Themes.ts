import { Lyrics } from '../interfaces/LyricsInterface'
import { ThemeComment } from '../interfaces/ThemesInterface';

export class Themes{
    id: string;
    name: string;
    flag: string;
    tags: string[];
    lyrics: Lyrics;
    comments: ThemeComment[];
    likes: number;
    views: number;

    constructor(id: string, name: string, flag: string, tags: string[], lyrics:Lyrics, comments?: ThemeComment[], likes?: number, views?: number){

        this.id = id;
        this.name = name;
        this.flag = flag;
        this.tags = tags;
        this.lyrics = lyrics;
        this.comments = comments || [];
        this.likes = likes || 0;
        this.views = views || 0;

    }
}