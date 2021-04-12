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

    setNewComment(commentId:string,userName:string, activeUser:string,comment:string,){
        this.comments.push({commentId,userName:userName,activeUser:activeUser,comment:comment});
    }

    removeComment(commentId:string){
        let index = 0;
        this.comments.find(comment=>{
            if(comment.commentId == commentId){
                this.comments.splice(index,1);
                return true;
            }
            index++;
            return false;
        })
    }

}