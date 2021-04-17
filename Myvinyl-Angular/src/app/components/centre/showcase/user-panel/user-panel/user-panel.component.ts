import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeList } from 'src/app/classes/ThemeList';
import { User } from 'src/app/classes/User';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { DatabaseConexService } from '../../../../../services/database-conex-service/database-conex.service'
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { ManageUser } from 'src/utils/tools/ManageUser';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
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
  privatizeThemeListValue:string = 'false';

  displayThemelistForm = false;

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

  dataObservable(dataToString:string){
    let data = JSON.parse(dataToString);

    if(data['themeList']){
      let newThemeList = data.themeList;
      this.newThemeList(newThemeList);
      this.displayThemelistForm = false;
    }

    if(data['close']){
      this.displayThemelistForm = false;
    }

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
      this.DatabaseConexService.updateThemeListPrivacity(this.themeList.name, JSON.parse(this.privatizeThemeListValue), sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.themeList && this.ProfileData){
            this.themeList.privateState = sucess.status;
            sesionValues.activeUser.setThemeListPrivacity(this.themeList.name, sucess.status);
            this.ProfileData = sesionValues.activeUser;
            this.privatizeThemeListValue = JSON.stringify(this.themeList.privateState);
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

  newThemeList(themeListData:{themeListName:string, privacy:boolean}){

    if(this.autorizationService.checkForToken() && this.ProfileData){
      this.DatabaseConexService.newThemeList(themeListData.themeListName, JSON.stringify(themeListData.privacy), this.ProfileData.name).subscribe(
        sucess=>{
          console.log(sucess)
          sesionValues.activeUser.setNewThemeList(sucess.list);
          this.ProfileData = sesionValues.activeUser;
        },
        err=>{
          console.log(err)
        }
      )
    }
    else{
      this.router.navigate(['/Sign-In']);
    }
  }

  removeThemeList(){
    if(this.autorizationService.checkForToken() && this.themeList){
      this.DatabaseConexService.removeThemeList(this.themeList.name, sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.themeList && this.ProfileData && sucess.status){
            sesionValues.activeUser.removeThemeList(this.themeList.name);
            this.ProfileData = sesionValues.activeUser;
            this.themeList = undefined;
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
    this.privatizeThemeListValue = JSON.stringify(this.themeList?.privateState);
  }

}
