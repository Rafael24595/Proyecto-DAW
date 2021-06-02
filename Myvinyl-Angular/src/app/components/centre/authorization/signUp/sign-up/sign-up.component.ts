import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { FormValidations } from 'src/utils/tools/FormValidations';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { SingUpForm } from '../../../../../interfaces/AuthorizationInterfaces';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  candy: CandyInterface = {id: 'signup', name:'Sign-Up', family:'candy-auth',route:'Sign-Up', query:{}, routeQuery:''};

  formError: SingUpForm = {
    name:'',
    email:'', 
    password:'',
    repassword:''
  };

  user = {
    name:'',
    email:'',
    password:'',
    repassword:''
  }

  constructor(private comunicationService :ComunicationServiceService, private authorization: AuthorizationService, private router: Router, private manageComponent:ManageComponent) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    if(this.authorization.checkForToken()) this.router.navigate(['/Home']);
    this.comunicationService.sendCandy(this.candy);
  }

  signUp(){

    let name = this.user.name;
    let email = this.user.email;
    let password =  FormValidations.hashPassword(this.user.password);
    
    this.formError = FormValidations.checkForErrors(this.user, this.formError) as SingUpForm;

    if(FormValidations.checkErrors(this.formError)){

      this.authorization.signUp(name, email, password).subscribe(
        res =>{
          localStorage.setItem('sessionToken', res.token);
          sesionValues.activeUser = User.setUser(res.user.name, res.user.admin, res.user.date, res.user.description, res.user.themeLists, res.user.email, res.user.activeAccount);
          this.manageComponent.refreshComponent(this.manageComponent.getLastURL());
        },
        err=>{console.error(`Error: ${err}`);}
      );

    }

  }
  
}
