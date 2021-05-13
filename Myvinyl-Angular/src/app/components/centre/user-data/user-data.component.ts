import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { ManageUser } from 'src/utils/tools/ManageUser';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { Variables } from 'src/utils/variables/variables';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  user: User = sesionValues.activeUser;
  range = Variables.range;

  constructor(public authorization: AuthorizationService, private manageUser: ManageUser, private router: Router, private route:ActivatedRoute, private manageComponent: ManageComponent) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.manageUser.getUserDataFromDataBase().then(()=>{
      this.user = sesionValues.activeUser
      if(this.user.name == '@Usuario'){
        this.authorization.destroySession();
      }
    });
  }

  userRedirect(){
    this.router.navigate([`/Profile/${this.user.name}`]);
  }

  closeSession(){

    this.authorization.destroySession();

    if(this.router.url.indexOf(`/Profile/${this.user.name}`) != -1 || this.router.url.includes('/Artist') || this.router.url.includes('/Theme')){
      this.manageComponent.refreshComponent(this.router.url);
    }

  }

}
