import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-list-form',
  templateUrl: './theme-list-form.component.html',
  styleUrls: ['./theme-list-form.component.css']
})
export class ThemeListFormComponent implements OnInit {

  themeListName:string = '';
  themeListPrivacity:boolean = true;

  constructor() { }

  @Output() outputToparent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  verifyThemeName(){
    console.log('console')
    this.themeListName = this.themeListName.replace(/[@,.]/g,'');
  }

  createList(){
    if(this.themeListName != ''){
      let themeList = {themeList:{themeListName:this.themeListName,privacy:this.themeListPrivacity}}
      this.outputToparent.emit(JSON.stringify(themeList));
    }
  }

}
