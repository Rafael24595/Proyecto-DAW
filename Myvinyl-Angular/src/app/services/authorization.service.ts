import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Variables } from 'src/utils/variables/variables';
import { Token } from '../interfaces/AuthorizationInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

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

   }

}
