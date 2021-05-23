
import { Artist } from "src/app/classes/Artist";
import { Themes } from "src/app/classes/Themes";
import { User } from "src/app/classes/User";
import { CandyInterface } from "src/app/interfaces/CandyInterface";

export const Categories:CategoriesInterface = {
        OWB:{code: 'OWB', name:'Old World Blues', items:[]}, 
        MR:{code: 'MR', name:'Mojave Ride', items:[]}, 
        CW:{code: 'CW', name:'Classic Wave', items:[]}
}

export const SearchQuery:SearchQueryInterface = {
        users:[],
        artists:[],
        themes:[]
}


export const Variables = {
        candyIdWhiteList : ['candy-home'],
        candyDeadEnd:['theme'],
        host:'localhost',
        port:'2525',
        range:{0:'Estandard', 1:'Administrador'},
        filesPath:'../../../../public/assets/media'
}

export const CandyBomb:CandyInterface = {id: 'home', name:'Home', family:'candy-home',route:'Home', query:{}, routeQuery:''};

interface CategoriesInterface{
        OWB:{code: string, name:string, items:Themes[] | never}, 
        MR:{code: string, name:string, items:Themes[] | never}, 
        CW:{code: string, name:string, items:Themes[] | never}
}

interface SearchQueryInterface{
        users:User[];
        artists:Artist[];
        themes:Themes[];
    }