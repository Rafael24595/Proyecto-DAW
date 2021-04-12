import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ComunicationServiceService } from "src/app/services/comunication-service.service";

@Injectable({
    providedIn: 'root'
  })

export class ManageComponent{

    constructor(private router: Router, private comunicationService: ComunicationServiceService){}

    refreshComponent(componentURL:string){
        this.router.navigateByUrl('/Home', { skipLocationChange: true }).then(() => {
            if(componentURL.indexOf('?') == -1){
                this.router.navigate([componentURL]);
            }
            else{
                let queryAndRoute = componentURL.split('?');
                let query = queryAndRoute[1].split('=');
                let queryObject = [];
                queryObject[query[0]] = query[1];
                this.router.navigate([queryAndRoute[0]], {queryParams:queryObject});
            }
        });

    }

    setLastURL(){

        let item = {route:this.router.url,count:0};
        if(localStorage.getItem('lastURL') != null){
             let itemOld = JSON.parse(localStorage.getItem('lastURL') as string);
             itemOld.count = (this.router.url == '/Sign-In' || this.router.url == '/Sign-Up') ? 1 : 0;
            if (itemOld.count == 1){
                itemOld.count = itemOld.count - 1;
                item = itemOld;
            }
        }
        localStorage.setItem('storeCandyRow', localStorage.getItem('lastCandyRow') as string);
        localStorage.setItem('lastURL', JSON.stringify(item));
    }

    getLastURL():string{

        let route = 'Home';
        if(localStorage.getItem('lastURL') != null){
            let saveRoute = JSON.parse(localStorage.getItem('lastURL') as string) as {route:string, count:number};
            route = saveRoute.route;
        }
        this.comunicationService.sendCandies(JSON.parse(localStorage.getItem('storeCandyRow') as string));

        return route;
    }

}