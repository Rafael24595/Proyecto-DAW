
import { Component, OnInit } from '@angular/core';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { Variables } from 'src/utils/variables/variables';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {

  candyRow:CandyInterface[] = [{id: 'home', name:'Home', family:'candy-home',route:'Home', query:{}, routeQuery:''}];
  user = {
    email:'',
    password:''
  };

  constructor(private comunicationService :ComunicationServiceService, public authorization: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('lastCandyRow') != null){
      let candyRowAsString = localStorage.getItem('lastCandyRow') as string;
      this.candyRow = JSON.parse(candyRowAsString);
    }
    this.comunicationService.sendCandyObservable.subscribe((candy:CandyInterface)=>{
      this.updateRow(candy);
    });
  }

  expandOption(category:EventTarget | null){
    let categoryElements = category as Node;
    if(categoryElements != null && categoryElements.parentElement){
      let categoryTitle = categoryElements.parentElement;
      if (categoryTitle.className == "expand"){
        categoryTitle.className = "";
      }
      else{
        categoryTitle.className = "expand";
      }
    }
  }

  updateRow(candy:CandyInterface){

    let positionInRow:number = this.findRowPosition(candy.id);
    let newFamily: boolean = this.checkFamily(candy.family);
    let deadEnd: number = this.checkForDeadEnd();

    if(newFamily){

      this.candyRow.splice(1, );
      this.candyRow.push(candy);

    }
    else if (positionInRow != -1 && positionInRow < this.candyRow.length){

      this.candyRow.splice(positionInRow, );

    }
    else if (positionInRow == -1){

      if(deadEnd != -1){
        this.candyRow.splice(deadEnd -1, deadEnd -1);
      }

      this.candyRow.push(candy);

    }

    localStorage.setItem('lastCandyRow', JSON.stringify(this.candyRow));

  }

  findRowPosition(candyId:string){

    let position = 0;

    let candyItem = this.candyRow.find(candy=>{position++; return (candy.id == candyId) ? true : false});

    return (candyItem) ? position : -1;

  }

  checkFamily(candyFamily:string){

    let index = 0;
    let newFamily = false;

    while(index < this.candyRow.length && newFamily == false){

      let actualFamily = this.candyRow[index].family;

      newFamily = ((Variables.candyIdWhiteList.indexOf(actualFamily) == -1 && Variables.candyIdWhiteList.indexOf(candyFamily) == -1) && actualFamily != candyFamily) ? true : false;

      index++;

    }

    return newFamily;

  }

  checkForDeadEnd(){

    let position = 0;

    let item = this.candyRow.find(candy=>{
      position++;
      if (Variables.candyDeadEnd.indexOf(candy.id) != -1){
        return true;
      }
      return false;
    });

    return (item) ? position : -1;

  }

  routerLink(candy:EventTarget | null){

    let position:HTMLElement | string = candy as HTMLElement;
    position = position.id.split('-')[0];
    let selectedCandy = this.candyRow[parseInt(position)];

    if (selectedCandy.query){

      this.router.navigate([selectedCandy.route], {queryParams:selectedCandy.query});

      return

    }

    if (selectedCandy.routeQuery != ''){console.log(`/${selectedCandy.route}/${selectedCandy.routeQuery}`)

      this.router.navigate([`/${selectedCandy.route}/${selectedCandy.routeQuery}`]);

      return

    }

    this.router.navigate([selectedCandy.route]);

    console.log(this.candyRow[parseInt(position)]);

  }

}
