import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchQuery:string = '';
  userName = sesionValues;
  expandStatus = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.userName = sesionValues.activeUser.name;
    window.onresize = ()=>{
      let width = window.innerWidth;
      if(width > 999){
        this.expandStatus = false;
      }
    }
  }

  expandMenu(){
    this.expandStatus = !this.expandStatus;
  }

  launchQuery(){
    let query = this.searchQuery.split(' ').join('+');
    this.router.navigate(['/Search'], {queryParams:{query:query}});
  }

  userRedirect(){
    if(sesionValues.activeUser.name == '@Usuario'){
      this.router.navigate([`/Profile/${sesionValues.activeUser.name}`]);
    }
    else{
      this.router.navigate([`/Sign-In`]);
    }
  }

}
