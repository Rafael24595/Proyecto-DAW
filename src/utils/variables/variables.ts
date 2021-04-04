
import { Artist } from "src/app/classes/Artist";
import { Themes } from "src/app/classes/Themes";
import { CandyInterface } from "src/app/interfaces/CandyInterface";

export const Categories:CategoriesInterface = {
        OWB:{code: 'OWB', name:'Old World Blues', items:[]}, 
        MR:{code: 'MR', name:'Mojave Ride', items:[]}, 
        CW:{code: 'CW', name:'Classic Wave', items:[]}
}

export const SearchQuery:SearchQueryInterface = {
        artists:[],
        themes:[]
}

export const Variables = {
        candyIdWhiteList : ['candy-home'],
        candyDeadEnd:['theme']
}

export const CandyBomb:CandyInterface = {id: 'home', name:'Home', family:'candy-home',route:'Home', query:{}};

interface CategoriesInterface{
        OWB:{code: string, name:string, items:Themes[] | never}, 
        MR:{code: string, name:string, items:Themes[] | never}, 
        CW:{code: string, name:string, items:Themes[] | never}
}

interface SearchQueryInterface{
        artists:Artist[];
        themes:Themes[];
    }