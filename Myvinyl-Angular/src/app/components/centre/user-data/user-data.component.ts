import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { AuthorizationService } from 'src/app/services/authorization.service';
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

  constructor(public authorization: AuthorizationService, private manageUser: ManageUser, private router: Router) { }

  ngOnInit(): void {
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

}
