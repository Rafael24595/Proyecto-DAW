import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
