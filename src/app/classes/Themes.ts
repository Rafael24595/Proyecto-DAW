export class Themes{
    id: string;
    name: string;
    flag: string;
    tags: string[];

    constructor(id: string, name: string, flag: string, tags: string[]){

        this.id = id;
        this.name = name;
        this.flag = flag;
        this.tags = tags;

    }
}