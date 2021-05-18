import { Component, OnInit } from '@angular/core';
import { CandyInterface } from 'src/app/interfaces/CandyInterface';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { FormValidations } from 'src/utils/tools/FormValidations';
import { SingInForm } from 'src/app/interfaces/AuthorizationInterfaces';
import { Router } from '@angular/router';
import { ManageComponent } from 'src/utils/tools/ManageComponent';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  candy: CandyInterface = {id: 'signin', name:'Sign-In', family:'candy-auth',route:'Sign-In', query:{}, routeQuery:''};

  formError: SingInForm = {
    email:'',
    password:''
  };

  user = {
    email:'',
    password:''
  }

  constructor(private comunicationService :ComunicationServiceService, private authorization: AuthorizationService, private router: Router, private manageComponent: ManageComponent) { }

  ngOnInit(): void {
    this.manageComponent.setLastURL();
    if(this.authorization.checkForToken()) this.router.navigate(['/Home']);
    this.comunicationService.sendCandy(this.candy);
  }

  signIn(){
    
    let email = this.user.email;
    let password =  FormValidations.hashPassword(this.user.password);
    
    this.formError = FormValidations.checkForErrors(this.user, this.formError) as SingInForm;

    if(FormValidations.checkErrors(this.formError)){
      this.authorization.signIn(email, password).subscribe(
        res =>{
          localStorage.setItem('sessionToken', res.token); 
          sesionValues.activeUser = User.setUser(res.user.name, res.user.email, res.user.description, res.user.admin, res.user.themeLists);
          this.manageComponent.refreshComponent(this.manageComponent.getLastURL());
        },
        err=>{console.log(err.error); FormValidations.checkServerErrors(err.error, this.formError)}
      );

    }

  }

}
