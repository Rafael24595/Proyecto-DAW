import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { AuthorizationService } from '../../services/autorization-service/authorization.service';
import { ManageComponent } from '../../../utils/tools/ManageComponent';
import { DataManage } from 'src/utils/tools/DataManage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchQuery:string = '';
  userName = sesionValues;
  expandStatus = false;
  sessionValues = sesionValues;
  mediaPath: string = '../../../assets/media';

  constructor(private router: Router, private authorization:AuthorizationService, private manageComponent:ManageComponent) { }

  ngOnInit(): void {
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

  updateUrl(event: Event, type: string){
    let element = event.target as HTMLImageElement;
    DataManage.repairBrokenImages(element, this.mediaPath, type);
  }

  closeSession(){
    this.authorization.destroySession();
    if(this.router.url.indexOf(`/Profile/${this.sessionValues.activeUser.name}`) != -1 || this.router.url.includes('/Artist') || this.router.url.includes('/Theme')){
      this.manageComponent.refreshComponent(this.router.url);
    }
  }

}
