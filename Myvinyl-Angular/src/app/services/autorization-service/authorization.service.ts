import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { sesionValues } from 'src/utils/variables/sessionVariables';
import { Variables } from 'src/utils/variables/variables';
import { User } from '../../classes/User';
import { Token } from '../../interfaces/AuthorizationInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient, private route:ActivatedRoute) { }

  signIn(email, password): Observable<Token> {
    return this.http.post<Token>(`http://${Variables.host}:${Variables.port}/api/signIn`, {email, password});
   }

   signUp(name, email, password): Observable<Token> {
    return this.http.post<Token>(`http://${Variables.host}:${Variables.port}/api/signUp`, {name, email, password});
   }

   checkForToken(){
    return (localStorage.getItem('sessionToken'));
   }

   destroySession(){
    localStorage.removeItem('sessionToken');
    sesionValues.activeUser = User.destroyUser();
   }

}
