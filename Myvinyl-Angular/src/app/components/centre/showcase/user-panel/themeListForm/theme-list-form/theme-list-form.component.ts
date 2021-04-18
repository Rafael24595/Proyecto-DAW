import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-theme-list-form',
  templateUrl: './theme-list-form.component.html',
  styleUrls: ['./theme-list-form.component.css']
})
export class ThemeListFormComponent implements OnInit {

  themeListName:string = '';
  themeListPrivacity:boolean = true;

  constructor() { }

  @Input() task:string = '';
  @Output() outputToparent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  verifyThemeName(){
    this.themeListName = this.themeListName.replace(/[@,.]/g,'');
  }

  createList(){
    if(this.themeListName != ''){
      let themeList = {task:this.task ,themeList:{themeListName:this.themeListName,privacy:this.themeListPrivacity}}
      this.outputToparent.emit(JSON.stringify(themeList));
    }
  }

}
