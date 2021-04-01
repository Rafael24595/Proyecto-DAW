import { Themes } from "src/app/classes/Themes";

export const Categories:CategoriesInterface = {
        OWB:{code: 'OWB', name:'Old World Blues', items:[]}, 
        MR:{code: 'MR', name:'Mojave Ride', items:[]}, 
        CW:{code: 'CW', name:'Classic Wave', items:[]}
}

export interface CategoriesInterface{
        OWB:{code: string, name:string, items:Themes[] | never}, 
        MR:{code: string, name:string, items:Themes[] | never}, 
        CW:{code: string, name:string, items:Themes[] | never}
}