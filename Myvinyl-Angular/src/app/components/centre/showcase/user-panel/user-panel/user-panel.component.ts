import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
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
import { DataManage } from 'src/utils/tools/DataManage';
import { FormValidations } from 'src/utils/tools/FormValidations';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'Profile', name:'Profile', family:'candy-profile',route:'Profile', query:{}, routeQuery:''};
  ProfileData: UserInterface | User | undefined ;
  userName:string = (sesionValues.activeUser) ? sesionValues.activeUser.name : '';
  selectedThemeList:string = '';
  themeList:ThemeList | undefined;
  isSessionUser:boolean = false;
  privatizeThemeListValue:string = 'false';

  formTask = '';

  modifyValuesData = {
    themeListName:{id:'themeName', status:false,value:''},
    modifyUserName:{id:'userName', status:false,value:''},
    modifyEmail:{id:'userEmail', status:false,value:''}
  };

  constructor(private route:ActivatedRoute, private manageUser: ManageUser, private DatabaseConexService: DatabaseConexService, private autorizationService: AuthorizationService, private router: Router, private comunicationService :ComunicationServiceService, private manageComponent:ManageComponent) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    this.route.params.subscribe(params =>{
      this.userName = params['username'];
      this.manageUser.getProfileDataFromDataBase(this.userName).then((profile:UserInterface)=>{
        this.isSessionUser = (profile.email) ? true :false;
        if(profile.email){
          this.setGlobalUser(profile);
          this.modifyValuesData.modifyUserName.value = profile.name;
          this.modifyValuesData.modifyEmail.value = profile.email;
        }
        else{
          this.ProfileData = this.setProfileUser(profile)
        }
        this.setCandy();
      })
    })

  }

  dataObservable(dataToString:string){
    let data = JSON.parse(dataToString);

    if(data['task'] == 'new'){console.log('inx')
      let newThemeList = data.themeList;
      this.newThemeList(newThemeList);
      this.formTask = '';
    }

    if(data['task'] == 'close'){
      this.formTask = '';
    }

  }

  setGlobalUser(profile:UserInterface){
    sesionValues.activeUser = User.setUser(profile.name,profile.email,profile.admin,profile.themeLists,profile.likes);
    this.ProfileData = sesionValues.activeUser;
  }

  setProfileUser(profile){
    profile.themeLists.forEach(themeList=>{
      themeList.privateState = JSON.parse(themeList.privateState);
      themeList.userManage = JSON.parse(themeList.userManage);
      themeList.userView = JSON.parse(themeList.userView);
    });

    return profile;

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
          this.autorizationService.updateToken(err);
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
          this.autorizationService.updateToken(err);
        }
      );
    }
    else{
      this.router.navigate(['/Sign-In']);
    }

  }

  modifyData(data:{event:KeyboardEvent | FocusEvent, attribute:string}){
    let attribute = data.attribute;
    let keyCode:KeyboardEvent | string | undefined = data.event as KeyboardEvent;
    keyCode = (keyCode.code) ? keyCode.code : undefined;

    if(keyCode == 'Enter' || keyCode == undefined){

      if(this.ProfileData && this.autorizationService.checkForToken()){

        let userAttribute = ''; 
        let oldAttribute = ''; 
        let newAttribute = ''; 
        let userName = this.ProfileData.name;
        let input = this.modifyValuesData.themeListName;
        let activeInput = this.modifyValuesData.themeListName.status

        switch (attribute){
          case "themeName":
            this.modifyThemeList();
          break;
          case "userName":
            activeInput = this.modifyValuesData.modifyUserName.status
            if(activeInput){
              userAttribute = 'name'; 
              oldAttribute = this.ProfileData.name; 
              newAttribute = this.modifyValuesData.modifyUserName.value; 
              input = this.modifyValuesData.modifyUserName;console.log(userName)
              this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
            }
          break;
          case "userEmail":
            activeInput = this.modifyValuesData.modifyEmail.status;
            if(activeInput) {
              userAttribute = 'email'; 
              oldAttribute = this.ProfileData.email; 
              newAttribute = this.modifyValuesData.modifyEmail.value; 
              input = this.modifyValuesData.modifyEmail;
              this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
            }
          break;
        }
      }
      else{
        this.router.navigate(['/Sign-In']);
      }
    }
  }

  modifyUserData(input:{id:string, status:boolean,value:string}, attributte:string, oldAttribute:string, newAttribute:string, userName:string){
    if(oldAttribute != newAttribute){
      this.DatabaseConexService.modifyUserData(attributte, oldAttribute, newAttribute, userName).subscribe(
        sucess=>{console.log(sucess)
          sesionValues.activeUser.setAttribute(attributte, newAttribute);
          this.ProfileData = sesionValues.activeUser
          input.status = false;
          if(attributte == 'name'){
            this.router.navigate([`/Profile/${newAttribute}`]);
          }
        },
        err=>{console.log(err)
          FormValidations.setErrorClass(input.id);
          this.autorizationService.updateToken(err);
        }
      );
    }
    else{
      input.status = false;
    }
  }

  modifyThemeList(){
    if(this.themeList){
      let newThemeList = DataManage.copyObject(this.themeList);
      newThemeList.name = this.modifyValuesData.themeListName.value;
      this.DatabaseConexService.modifyThemeList(newThemeList, this.themeList.name, sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.themeList && this.ProfileData && sucess.status){
            this.themeList.name = this.modifyValuesData.themeListName.value;console.log(this.modifyValuesData.themeListName.status)
            this.modifyValuesData.themeListName.status = false;console.log(this.modifyValuesData.themeListName.status)
          }
        },
        err=>{console.log(err)
          this.modifyValuesData.themeListName.value = this.themeList?.name as string;
          this.autorizationService.updateToken(err);
        }
      );
    }
  }

  setFocus(id:string){
    DataManage.setFocus(id);
  }

  changeList(){
    this.themeList = this.ProfileData?.themeLists.find(themeList=>{
      return (themeList.name == this.selectedThemeList)
    });
    this.modifyValuesData.themeListName.value = this.themeList?.name as string;
    this.formTask = '';
    this.privatizeThemeListValue = JSON.stringify(this.themeList?.privateState);
  }

}
