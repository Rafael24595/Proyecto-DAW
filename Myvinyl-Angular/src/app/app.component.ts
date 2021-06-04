import { Component } from '@angular/core';
import { GlobalVariables, MyRootSprite } from 'src/utils/variables/variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mediaPath:string = '../assets/media';
  MyRootSprite = MyRootSprite;
  GlobalVariables = GlobalVariables;
}
