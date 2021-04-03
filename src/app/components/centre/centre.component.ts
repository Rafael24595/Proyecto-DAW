import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { Variables } from 'src/utils/variables/variables';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {

  candyRow:CandyInterface[] = [{id: 'home', name:'Home', family:'candy-home',route:'Home', query:''}];

  constructor(private comunicationService :ComunicationServiceService) { }

  ngOnInit(): void {
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

    if(newFamily){

      this.candyRow.splice(1, );
      this.candyRow.push(candy);

    }
    else if (positionInRow != -1 && positionInRow < this.candyRow.length){

      this.candyRow.splice(positionInRow, );

    }
    else if (positionInRow == -1){

      this.candyRow.push(candy);

    }

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

}
