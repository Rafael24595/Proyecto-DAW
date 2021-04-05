import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchQuery:string = '';

  expandStatus = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  expandMenu(){
    this.expandStatus = !this.expandStatus;
  }

  launchQuery(){
    this.router.navigate(['/Search'], {queryParams:{query:this.searchQuery}});
    console.log(this.searchQuery);
  }

}
