import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerList:string[]=["Accesibilidad", "F.A.Q", "Acerca de nosotros"]

  constructor() { }

  ngOnInit(): void {
  }

}
