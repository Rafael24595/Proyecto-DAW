import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeList } from 'src/app/classes/ThemeList';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { Variables } from 'src/utils/variables/variables';
import { User } from '../../classes/User';
import { ServerErrorToken } from '../../interfaces/AuthorizationInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient, private router: Router) { }

    signIn(email, password): Observable<{status:boolean, token: string, user:User}> {
      return this.http.post<{status:boolean, token: string, user:User}>(`https://${Variables.host}/api/user/access/signin`, {email, password});
    }

    signUp(name, email, password): Observable<{status:boolean, token: string, user:User}> {
      return this.http.post<{status:boolean, token: string, user:User}>(`https://${Variables.host}/api/user/access/signup`, {name, email, password});
    }

    setToken(token:string){
      localStorage.setItem('sessionToken', token);
    }

    checkForToken(){
      return (localStorage.getItem('sessionToken'));
    }

    destroySession(){
      localStorage.removeItem('sessionToken');
      this.destroyUser();
    }

    destroyUser(){
      User.setUser('@Usuario', '0', 0, '', [ThemeList.emptyThemeList()]);
      sesionValues.activeUser = User.activeUser;

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
