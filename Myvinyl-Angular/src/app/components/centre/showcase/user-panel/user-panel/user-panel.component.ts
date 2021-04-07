import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/User';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { ManageUser } from 'src/utils/tools/ManageUser';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'Profile', name:'Profile', family:'candy-profile',route:'Profile', query:{}, routeQuery:''};
  ProfileData: UserInterface | undefined ;
  UserData: User | undefined;
  userName:string = sesionValues.activeUser.name;
  isSessionUser:boolean = false;

  constructor(private route:ActivatedRoute, private manageUser: ManageUser, private comunicationService :ComunicationServiceService,) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params =>{
      this.userName = params['username'];
      this.manageUser.getProfileDataFromDataBase(this.userName).then((profile)=>{
        if(this.userName == sesionValues.activeUser.name){
          this.isSessionUser = true;
          this.ProfileData = sesionValues.activeUser; console.log(this.ProfileData);
          this.setCandy()
        }
        else{
          this.ProfileData = profile; console.log(this.ProfileData);
          this.setCandy()
        }
      })
    })

  }

  setCandy(){

    if(this.ProfileData){

      this.candy.name = this.ProfileData.name;
      this.candy.family = `candy-${this.ProfileData.name}`;
      this.candy.route = `Profile`;
      this.candy.routeQuery = this.ProfileData.name;

      this.comunicationService.sendCandy(this.candy);

    }

  }
  
}
