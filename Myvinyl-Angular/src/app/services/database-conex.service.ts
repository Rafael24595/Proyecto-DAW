import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Artist } from '../classes/Artist';
import { Variables } from 'src/utils/variables/variables';
import { User } from '../classes/User';
import { ProfileData } from '../interfaces/ProfileDataInterface';
import { UserInterface } from '../interfaces/UserInterface';
import { Themes } from '../classes/Themes';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConexService {

  constructor(private http: HttpClient) { }

  getArtists(limit?: string): Observable<Artist[]> {
    limit = (limit) ? limit : '-1';
    return this.http.get<Artist[]>(`http://${Variables.host}:${Variables.port}/api/getData?count=${limit}`)
             .pipe( 
               tap(_ => console.log('Searching..')),
               catchError(this.handleError<Artist[]>())
          );
 }

 getThemeData(themeId:string): Observable<Themes>{
  return this.http.get<Themes>(`http://${Variables.host}:${Variables.port}/api/getThemeData?theme=${themeId}`);
 }

 getProfileData(profile:string): Observable<{validToken:boolean,data:UserInterface}>{
  return this.http.get<{validToken:boolean,data:UserInterface}>(`http://${Variables.host}:${Variables.port}/api/getProfileData?profile=${profile}`)
 }

 getUserData(): Observable<User>{
   return this.http.get<User>(`http://${Variables.host}:${Variables.port}/api/getUserData`)
 }

 setThemeComment(themeId:string,userName:string,comment:string):Observable<{commentId:string,userName:string,comment:string}>{
   return this.http.post<{commentId:string,userName:string,comment:string}>(`http://${Variables.host}:${Variables.port}/api/publishComment`, {themeId, userName, comment});
 }

 removeThemeComment(themeId:string,userName:string,commentId:string):Observable<{status:string}>{
   return this.http.post<{status:string}>(`http://${Variables.host}:${Variables.port}/api/deleteComment`, {themeId, userName, commentId});
 }

 updateThemeListPrivacity(themeListName:string, state:string, userName:string):Observable<{state:boolean}>{
  return this.http.post<{state:boolean}>(`http://${Variables.host}:${Variables.port}/api/PrivatizeThemeList`, {themeListName, state, userName});
 }

 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
  };
}
 
}

