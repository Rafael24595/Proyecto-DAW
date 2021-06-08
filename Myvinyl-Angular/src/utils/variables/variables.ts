
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
        host:'3.15.187.168',
        port:'2525',
        range:{0:'User', 1:'Admin'}
}

export let GlobalVariables: {blackScreenStatus: string, notificationStatus:string, notificationMessage:string, notificationIsShowing:boolean, notificationCloseManual:boolean, notificationAnswer:boolean, notificationAnswerFunction:Function | undefined} = {
        blackScreenStatus: '',
        notificationStatus: '',
        notificationMessage: '',
        notificationIsShowing: false,
        notificationCloseManual: false,
        notificationAnswer: false,
        notificationAnswerFunction: undefined
}

export const TooltipValues = {
        'placement': 'right',
        'show-delay': 10,
        'theme': "light",
        'hide-delay': 10
}

export let MyRootSprite: {eye:string, body:string} = {
        eye: 'root_open_eye',
        body:'root_base.png'
}

export const CandyBomb:CandyInterface = {id: 'home', name:'Home', family:'candy-home',route:'Home', query:{}, routeQuery:''};

interface CategoriesInterface {
        OWB:{code: string, name:string, items:Themes[] | never}, 
        MR:{code: string, name:string, items:Themes[] | never}, 
        CW:{code: string, name:string, items:Themes[] | never}
}

interface SearchQueryInterface{
        users:User[];
        artists:Artist[];
        themes:Themes[];
    }