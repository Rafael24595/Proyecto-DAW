import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeList } from 'src/app/classes/ThemeList';
import { User } from 'src/app/classes/User';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { DatabaseConexService } from '../../../../../services/database-conex.service'
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { ManageUser } from 'src/utils/tools/ManageUser';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ServerErrorToken } from 'src/app/interfaces/AuthorizationInterfaces';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'Profile', name:'Profile', family:'candy-profile',route:'Profile', query:{}, routeQuery:''};
  ProfileData: UserInterface | User | undefined ;
  userName:string = (sesionValues.activeUser) ? sesionValues.activeUser.name : '';
  selectedThemeList:string | undefined;
  themeList:ThemeList | undefined;
  isSessionUser:boolean = false;
  privatizeThemeListValue:any;

  constructor(private route:ActivatedRoute, private manageUser: ManageUser, private DatabaseConexService: DatabaseConexService, private autorizationService: AuthorizationService, private router: Router, private comunicationService :ComunicationServiceService, private manageComponent:ManageComponent) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.route.params.subscribe(params =>{
      this.userName = params['username'];
      this.manageUser.getProfileDataFromDataBase(this.userName).then((profile:UserInterface)=>{
        this.isSessionUser = (profile.email) ? true :false;
        (profile.email) ? this.setGlobalUser(profile) : this.ProfileData = profile;;
        this.setCandy();
      })
    })

  }

  setGlobalUser(profile:UserInterface){
    sesionValues.activeUser = User.setUser(profile.name,profile.email,profile.admin,profile.themeLists,profile.likes);
    this.ProfileData = sesionValues.activeUser;
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
  
  privatizeThemeList(){

    if(this.autorizationService.checkForToken() && this.themeList){
      this.DatabaseConexService.updateThemeListPrivacity(this.themeList.name,this.privatizeThemeListValue,sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.themeList && this.ProfileData){
            this.themeList.privateState = sucess.state;
            sesionValues.activeUser.setThemeListPrivacity(this.themeList.name, sucess.state);
            this.ProfileData = sesionValues.activeUser;
            this.privatizeThemeListValue = this.themeList.privateState;
          }
        },
        err=>{console.log(err)
          let serverError = err.error as ServerErrorToken;
            if(serverError.destroyToken){
                this.autorizationService.destroySession();
                this.router.navigate(['/Sign-In']);
            }
        }
      );
    }
    else{
      this.router.navigate(['/Sign-In']);
    }
  }

  changeList(){
    this.themeList = this.ProfileData?.themeLists.find(themeList=>{
      return (themeList.name == this.selectedThemeList)
    });
    this.privatizeThemeListValue = this.themeList?.privateState;
  }

}
