import { Component } from '@angular/core';
import { GlobalVariables } from 'src/utils/variables/variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  blackScreenStatus = GlobalVariables;
}
