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
import { DataManage } from 'src/utils/tools/DataManage';
import { FormValidations } from 'src/utils/tools/FormValidations';
import { Variables } from 'src/utils/variables/variables';
import { DragEvent } from 'src/app/classes/DragEvent';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  candy: CandyInterface = {id: 'Profile', name:'Profile', family:'candy-profile',route:'Profile', query:{}, routeQuery:''};
  mediaPath: string = '../../../../../..//assets/media';
  ProfileData: UserInterface | User | undefined ;
  userName:string = (sesionValues.activeUser) ? sesionValues.activeUser.name : '';
  selectedThemeList:string = '';
  themeList:ThemeList | undefined;
  cursorTheme: string = 'grab';
  isSessionUser:boolean = false;
  privateValue = false;
  range = Variables.range;

  defaultSelect: string = '-- Selecciona lista --';
  formTask = '';

  modifyValuesData = {
    themeListName:{id:'themeName', status:false, value:''},
    modifyUserName:{id:'userName', status:false, value:''},
    modifyEmail:{id:'userEmail', status:false, value:''},
    modifyPassword:{id:'userPassword', status:false, value:''},
    modifyDescription:{id:'userDescription', status:false, value:''}
  };

  modifyPasswordData = {
    passwordCounter : 0,
    passwordRoundI : '',
    passwordMessage : '' 
  }
  
  

  constructor(private route:ActivatedRoute, private manageUser: ManageUser, private DatabaseConexService: DatabaseConexService, private autorizationService: AuthorizationService, private router: Router, private comunicationService :ComunicationServiceService, private manageComponent:ManageComponent) { }

  ngOnInit(): void {
    this.selectedThemeList = this.defaultSelect;
    this.manageComponent.setLastURL();
    this.route.params.subscribe(params =>{
      this.userName = params['username'];
      this.manageUser.getProfileDataFromDataBase(this.userName).then((profile:UserInterface)=>{
        this.isSessionUser = (profile.email) ? true :false;
        if(profile.email){
          this.setGlobalUser(profile);
          this.setLastSessionList();
          this.modifyValuesData.modifyUserName.value = profile.name;
          this.modifyValuesData.modifyEmail.value = profile.email;
          this.modifyValuesData.modifyDescription.value = profile.description;
        }
        else{
          this.ProfileData = this.setProfileUser(profile)
        }
        this.setCandy();
      })
    });
    this.comunicationService.sendReproductorViewDataObservable.subscribe(data =>{this.reproductorSubscribe(data)});
  }

  reproductorSubscribe(data:{type:string, value: any}){

    if(data && data.type){

      let type = data.type;
      let value  = data.value;

      switch (type){

        case 'ready':
        this.setAudioBarThemeList();
        break;

        case 'ended':
          this.addSelectedContainer(value as string);
          let elementEnd = document.getElementById(`vinyl-${value}`);
          this.hideAllVinyls(value);
          this.cursorTheme = (this.themeList && this.themeList.userManage) ? 'grab' : 'pointer';
          if(elementEnd){
            elementEnd.classList.add('show');
          }
        break;

        case 'play':
          let elementPlay = document.getElementById(`vinyl-${value}`);
          this.hideAllVinyls(value);
          this.cursorTheme = 'pointer';
          if(elementPlay){
            elementPlay.classList.add('show');
          }
        break;

        case 'stop':
          let elementStop = document.getElementById(`vinyl-${value}`);
          this.cursorTheme = (this.themeList && this.themeList.userManage) ? 'grab' : 'pointer';
          if(elementStop){
            elementStop.classList.remove('show');
          }
        break;

      }
    }

  }
  
  eventDrag(event: Event){
    event.preventDefault()
    let clickElement = event.target as HTMLElement;
    let container = this.getTopContainer({element: clickElement});

    if(this.themeList && this.themeList.userManage && container != null && container.parentElement){
      let list = container.parentElement.childNodes;
      let cleanList = this.containerListFilter(list)
      console.log(cleanList)
      console.log(container)
      DragEvent.dragEventListener(container, cleanList);
    }

  }

  containerListFilter(list:NodeListOf<ChildNode>){
    let cleanList:HTMLElement[] = [];
    for (let index = 0; index < list.length; index++) {
      let element = list[index] as HTMLElement;
      if(element.classList && element.classList.contains('theme-container')){
        cleanList.push(element);
      }
    }
    return cleanList;
  }

  getTopContainer(data:{element:HTMLElement, count?:number}): HTMLElement | null{
    let element = data.element;
    let count = (data.count) ? data.count : 0;
    if(count < 5){
      if(element && element.classList.contains('theme-container')){
        return element;
      }
      else if(element && element.parentElement){
        return this.getTopContainer({element: element.parentElement, count: count + 1});
      }
      else{
        return null;
      }
    }
    else{
      return null;
    }
  }

  setLastSessionList(){
    let lastList = localStorage.getItem('last-user-theme-list');
    if(lastList && lastList != '' && this.ProfileData){
      let listExist= this.ProfileData.themeLists.map(themeList=>{return themeList.name}).indexOf(lastList);
      if(listExist != -1){
        this.selectedThemeList = lastList;
        this.changeList();
      }
    }
  }

  hideAllVinyls(exception?:string){
    let elements = document.getElementsByClassName('vinyl-xs');
    for (let index = 0; index < elements.length; index++) {
      if(elements[index].id != `vinyl-${exception}`){
        elements[index].classList.remove('show');
      }
    }
  }

  sentToReproductor(type:string, value?:any){
    value = (value != undefined) ? value : '';
    this.comunicationService.sendReproductorData({type, value});
  }

  addSelectedContainer(value:string){

    let themeListName = this.selectedThemeList;
    let element = document.getElementById(`theme-container-${themeListName}-${value}`);

    this.removeSelectedContainer();

    if(element){
      element.classList.add('selected');
      return true
    }
    return false;
  }

  removeSelectedContainer(){
    let elements = document.getElementsByClassName('selected');
    for (let index = 0; index < elements.length; index++) {
      elements[index].classList.remove('selected');
    }

  }

  setAudioBarThemeList(){
    let themeList = sesionValues.activeUser.getThemeList(this.selectedThemeList);
    let themeId = (themeList) ? themeList.list.map(theme=>{return theme})[0].id : '';
    if(themeList){
      this.sentToReproductor('themes', {isThemeList:true, themes:themeList.list});
      setTimeout(()=>{this.addSelectedContainer(themeId);},100);
    }
  }

  setAudioBarListPosition(themeId:string){
    let list = sesionValues.activeUser.getThemeList(this.selectedThemeList);
    if(list){
      let position = list.list.map(theme=>{return theme.id}).indexOf(themeId);
      if(position != -1){console.log(position)
        this.sentToReproductor('position', position);
        this.hideAllVinyls();
        this.sentToReproductor('play', '');
      }
    }
  }

  dataObservable(dataToString:string){
    let data = JSON.parse(dataToString);

    if(data['task'] == 'new'){
      let newThemeList = data.themeList;
      this.newThemeList(newThemeList);
      this.formTask = '';
      this.selectedThemeList = this.defaultSelect;
    }

    if(data['task'] == 'close'){
      this.formTask = '';
    }

  }

  setGlobalUser(profile:UserInterface){
    sesionValues.activeUser = User.setUser(profile.name,profile.email,profile.admin, profile.description, profile.themeLists);
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
      this.DatabaseConexService.updateThemeListPrivacity(this.themeList.name, JSON.stringify(this.privateValue), sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.themeList && this.ProfileData){
            let status = (typeof sucess.status == 'string') ? JSON.parse(sucess.status) : sucess.status;
            this.themeList.privateState = status;
            sesionValues.activeUser.setThemeListPrivacity(this.themeList.name, status);
            this.ProfileData = sesionValues.activeUser;
            this.privateValue = status;
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
          console.log(this.ProfileData)
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
            this.selectedThemeList = this.defaultSelect;
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

  modifyPassword(event:Event, exit?:number){

    let keyCode:KeyboardEvent | string = event as KeyboardEvent;
    keyCode = keyCode.code;

    if(((keyCode == 'Enter' || keyCode == 'Escape') && this.modifyValuesData.modifyPassword.status) || exit){

      this.modifyPasswordData.passwordCounter = (keyCode == 'Escape' || exit) ? -1 : this.modifyPasswordData.passwordCounter;

      switch (this.modifyPasswordData.passwordCounter){

        case -1:
          this.resetPasswordInput();
        break;

        case 0:

          let password =  FormValidations.hashPassword(this.modifyValuesData.modifyPassword.value);

          this.DatabaseConexService.checkPassword(sesionValues.activeUser.name, password).subscribe(
            sucess=>{
              if(sucess.status){
                this.modifyPasswordData.passwordCounter++;
                this.modifyValuesData.modifyPassword.value = '';
                this.modifyPasswordData.passwordMessage="Introduce tu nueva contraseña:";
              }
            },
            err=>{
              this.modifyPasswordData.passwordMessage="Contraseña incorrecta.";
              console.log(`Error: ${err}`);
            }
          );

        break;

        case 1:
            this.modifyPasswordData.passwordRoundI = this.modifyValuesData.modifyPassword.value;
            this.modifyValuesData.modifyPassword.value = '';
            this.modifyPasswordData.passwordCounter++;
            this.modifyPasswordData.passwordMessage="Introduce nuevamente la nueva contraseña:";
        break;

        case 2:
          if(this.modifyPasswordData.passwordRoundI == this.modifyValuesData.modifyPassword.value){
            let password =  FormValidations.hashPassword(this.modifyValuesData.modifyPassword.value);
            let sucess = this.modifyUserData(this.modifyValuesData.modifyPassword, 'password', '', password, sesionValues.activeUser.name);
            if(sucess){
              this.resetPasswordInput();
            }
          }
          else{
            this.modifyPasswordData.passwordMessage="Las contraseñas no coinciden.";
          }
        break;

      }

    }

  }

  modifyData(data:{event:KeyboardEvent | FocusEvent, attribute:string}){
    let attribute = data.attribute;
    let keyCode:KeyboardEvent | string | undefined = data.event as KeyboardEvent;
    keyCode = (keyCode.code) ? keyCode.code : undefined;

    if(keyCode == 'Enter' || keyCode == 'Escape' || keyCode == undefined){

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
            if(activeInput && keyCode != 'Escape'){
              userAttribute = 'name'; 
              oldAttribute = this.ProfileData.name; 
              newAttribute = this.modifyValuesData.modifyUserName.value; 
              input = this.modifyValuesData.modifyUserName;
              let sucess = this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
              if(sucess){
                this.router.navigate([`/Profile/${newAttribute}`]);
              }
            }
            else if(keyCode == 'Escape'){
              this.modifyValuesData.modifyUserName.status = false
            }
          break;
          case "userEmail":
            activeInput = this.modifyValuesData.modifyEmail.status;
            if(activeInput && keyCode != 'Escape') {
              userAttribute = 'email'; 
              oldAttribute = this.ProfileData.email; 
              newAttribute = this.modifyValuesData.modifyEmail.value; 
              input = this.modifyValuesData.modifyEmail;
              this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
            }
            else if(keyCode == 'Escape'){
              this.modifyValuesData.modifyEmail.status = false
            }
          break;
          case "userDescription":
            activeInput = this.modifyValuesData.modifyDescription.status;
            if(activeInput && keyCode != 'Escape') {
              userAttribute = 'description'; 
              oldAttribute = this.ProfileData.description; 
              newAttribute = this.modifyValuesData.modifyDescription.value; 
              input = this.modifyValuesData.modifyDescription;
              this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
            }
            else if(keyCode == 'Escape'){
              this.modifyValuesData.modifyDescription.status = false
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
    return new Promise(resolve=>{
      if(oldAttribute != newAttribute){
        this.DatabaseConexService.modifyUserData(attributte, oldAttribute, newAttribute, userName).subscribe(
          sucess=>{
            sesionValues.activeUser.setAttribute(attributte, newAttribute);
            this.ProfileData = sesionValues.activeUser;
            input.status = false;
            this.manageComponent.refreshComponent(this.router.url);
            resolve(true);
          },
          err=>{console.log(err)
            FormValidations.setErrorClass(input.id);
            this.autorizationService.updateToken(err);
            resolve(false);
          }
        );
      }
      else{
        input.status = false;
      }
    })
  }

  modifyThemeList(){
    if(this.themeList && this.themeList.name != this.modifyValuesData.themeListName.value){
      let newThemeList = DataManage.copyObject(this.themeList);
      newThemeList.name = this.modifyValuesData.themeListName.value;
      this.DatabaseConexService.modifyThemeList(newThemeList, this.themeList.name, sesionValues.activeUser.name).subscribe(
        sucess=>{
          if(this.themeList && this.ProfileData && sucess.status){
            this.themeList.name = this.modifyValuesData.themeListName.value;
            this.modifyValuesData.themeListName.status = false;
          }
        },
        err=>{console.log(err)
          this.modifyValuesData.themeListName.value = this.themeList?.name as string;
          this.autorizationService.updateToken(err);
        }
      );
    }
    else{
      this.modifyValuesData.themeListName.status = false;
    }
  }

  removeThemeFromList(id:string){
    this.DatabaseConexService.removeFromThemeList(id, this.selectedThemeList, sesionValues.activeUser.name).subscribe(
      sucess=>{
        if(sucess.status){
          sesionValues.activeUser.removeFromThemeList(this.selectedThemeList, id);
          this.ProfileData = sesionValues.activeUser;
        }
      },
      err=>{console.log(err)

      }
    );
  }

  setFocus(id:string){
    DataManage.setFocus(id);
  }

  resetPasswordInput(){
    this.modifyPasswordData.passwordCounter = 0;
    this.modifyValuesData.modifyPassword.value = '';
    this.modifyPasswordData.passwordMessage = '';
    this.modifyValuesData.modifyPassword.status = false;
  }

  changeList(){
    if(this.ProfileData && this.selectedThemeList != this.defaultSelect){
      if(this.selectedThemeList == '-- Nueva lista --'){
        this.formTask = (this.formTask != "new") ?  "new" : "";
      }
      else{
        this.formTask = "";
        this.DatabaseConexService.getThemesFromList(this.ProfileData.name, this.selectedThemeList).subscribe(
          sucess=>{
            console.log(sucess)
            this.themeList = this.ProfileData?.themeLists.find(themeList=>{
              if(themeList.name == this.selectedThemeList){
                localStorage.setItem('last-user-theme-list', this.selectedThemeList);
                sesionValues.activeUser.replaceThemeList(this.selectedThemeList, sucess.list);
                return true;
              }
              return false;
            });
            if(this.themeList){
              this.themeList.list = sucess.list as any;
              this.privateValue = this.themeList.privateState;
              this.cursorTheme = (this.themeList.userManage) ? 'grab' : 'pointer';
            }
            this.modifyValuesData.themeListName.value = this.themeList?.name as string;
            this.formTask = '';
            this.setAudioBarThemeList();
          },
          err=>{
            console.log(`Error: ${err}`)
          }
        );
      }
    }
    else{
      this.themeList = undefined;
    }
  }

}
