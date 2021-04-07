import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ComunicationServiceService } from 'src/app/services/comunication-service.service';
import { FormValidations } from 'src/utils/tools/FormValidations';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
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
        res =>{localStorage.setItem('sessionToken', res.token);},
        err=>{console.log(err)}
      );

    }

  }
  
}
