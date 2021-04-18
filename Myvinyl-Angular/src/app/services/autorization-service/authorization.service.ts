import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { Variables } from 'src/utils/variables/variables';
import { User } from '../../classes/User';
import { ServerErrorToken, Token } from '../../interfaces/AuthorizationInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient, private router: Router) { }

    signIn(email, password): Observable<Token> {
      return this.http.post<Token>(`http://${Variables.host}:${Variables.port}/api/signIn`, {email, password});
    }

    signUp(name, email, password): Observable<Token> {
      return this.http.post<Token>(`http://${Variables.host}:${Variables.port}/api/signUp`, {name, email, password});
    }

    setToken(token:string){
      localStorage.setItem('sessionToken', token);
    }

    checkForToken(){
      return (localStorage.getItem('sessionToken'));
    }

    destroySession(){
      localStorage.removeItem('sessionToken');
      sesionValues.activeUser = User.destroyUser();
    }

    updateToken(err){
      let serverError = err.error as ServerErrorToken;
      if(serverError.destroyToken){
        this.destroySession();
        this.router.navigate(['/Sign-In']);
      }
      if(serverError.updateToken){
        this.setToken(serverError.message);
      }
   }

}
