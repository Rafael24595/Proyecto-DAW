import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { DataManage } from 'src/utils/tools/DataManage';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { ManageUser } from 'src/utils/tools/ManageUser';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { TooltipValues, Variables } from 'src/utils/variables/variables';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  globalVariables = Variables;
  sessionValues = sesionValues;
  range = Variables.range;
  TooltipValues = TooltipValues;
  mediaPath: string = '../../../../assets/media';

  constructor(public authorization: AuthorizationService, private manageUser: ManageUser, private router: Router, private route:ActivatedRoute, private manageComponent: ManageComponent) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.manageUser.checkToken();
    this.manageUser.getUserDataFromDataBase().then(()=>{
      this.sessionValues.activeUser = sesionValues.activeUser;
      if(this.sessionValues.activeUser.name == '@Usuario'){
        this.authorization.destroySession();
      }
    });
  }

  updateUrl(event: Event, type: string){
    let element = event.target as HTMLImageElement;
    DataManage.repairBrokenImages(element, this.mediaPath, type);
  }

  closeSession(){
    this.manageComponent.refreshComponent(this.router.url);
    this.authorization.destroySession();
  }

}
