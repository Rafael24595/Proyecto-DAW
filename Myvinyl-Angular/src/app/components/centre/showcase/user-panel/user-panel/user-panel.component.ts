import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/User';
import { ProfileData } from 'src/app/interfaces/ProfileDataInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { ManageUser } from 'src/utils/tools/ManageUser';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  ProfileData: ProfileData = {name:'', admin:'', themeLists:[]};
  UserData: User | undefined;
  userName:string = '';
  isSessionUser:boolean = false;

  constructor(private route:ActivatedRoute, private manageUser: ManageUser) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params =>{
      this.userName = params['username'];
      this.isSessionUser = (this.userName == sesionValues.activeUser.name);
      if(sesionValues.activeUser.name.indexOf('@') != -1){
        this.manageUser.getProfileDataFromDataBase(this.userName).then((profile)=>{
          if(!this.isSessionUser){
            this.ProfileData = profile; console.log(profile);
          }
        })
      }
      else if(!this.isSessionUser){
        this.manageUser.getProfileDataFromDataBase(this.userName).then((profile)=>{
          this.ProfileData = profile; console.log(profile);
        })
      }
      else{
        this.ProfileData = sesionValues.activeUser; console.log(sesionValues.activeUser);
      }
    })

    ComunicationServiceService.OnSessionUserChange.subscribe(()=>{

      this.isSessionUser = (this.userName == sesionValues.activeUser.name);
      if(this.isSessionUser){
        this.userName = sesionValues.activeUser.name
        this.ProfileData = sesionValues.activeUser; console.log(sesionValues.activeUser);
      }
      
    });

  }

}
