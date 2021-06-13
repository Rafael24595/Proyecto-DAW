import { Component } from '@angular/core';
import { NotificationManage } from 'src/utils/tools/NotificationManage';
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
  rootData = [];
  showRoot = false;

  resetForm(){
    NotificationManage.enableScroll();
    GlobalVariables.blackScreenStatus = "";
  }
}
