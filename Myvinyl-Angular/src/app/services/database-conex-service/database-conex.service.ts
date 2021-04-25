import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Artist } from '../../classes/Artist';
import { Variables } from 'src/utils/variables/variables';
import { User } from '../../classes/User';
import { ProfileData } from '../../interfaces/ProfileDataInterface';
import { UserInterface } from '../../interfaces/UserInterface';
import { Themes } from '../../classes/Themes';
import { ThemeList } from 'src/app/classes/ThemeList';

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

 getArtistData(artistId:string): Observable<{status:boolean, artist: Artist | null}>{
  return this.http.get<{status:boolean, artist: Artist | null}>(`http://${Variables.host}:${Variables.port}/api/getArtistData?artist=${artistId}`);
 }

 getProfileData(profile:string): Observable<{validToken:boolean,data:UserInterface}>{
  return this.http.get<{validToken:boolean,data:UserInterface}>(`http://${Variables.host}:${Variables.port}/api/getProfileData?profile=${profile}`);
 }

 getUserData(): Observable<User>{
   return this.http.get<User>(`http://${Variables.host}:${Variables.port}/api/getUserData`)
 }

 setThemeComment(themeId:string,userName:string,comment:string):Observable<{commentId:string,userName:string,comment:string}>{
   return this.http.post<{commentId:string,userName:string,comment:string}>(`http://${Variables.host}:${Variables.port}/api/publishComment`, {themeId, userName, comment});
 }

 thumbValueTheme(themeId:string, thumbValue:number, userName:string):Observable<{status:string, userThemeLists:ThemeList[], likes:number, dislikes:number}>{
   return this.http.post<{status:string, userThemeLists:ThemeList[], likes:number, dislikes:number}>(`http://${Variables.host}:${Variables.port}/api/thumbValueTheme`, {themeId, thumbValue, userName});
 }

 removeThemeComment(themeId:string,userName:string,commentId:string):Observable<{status:string}>{
  return this.http.post<{status:string}>(`http://${Variables.host}:${Variables.port}/api/deleteComment`, {themeId, userName, commentId});
}

 updateThemeListPrivacity(themeListName:string, state:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/PrivatizeThemeList`, {themeListName, state, userName});
 }

 newThemeList(themeListName:string, privacy:string, userName:string):Observable<{list:{themeList:ThemeList}}>{
  return this.http.post<{list:{themeList:ThemeList}}>(`http://${Variables.host}:${Variables.port}/api/CreateNewThemeList`, {themeListName, privacy, userName});
 }

 removeThemeList(themeListName:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/DeleteThemeList`, {themeListName, userName});
 }

 removeFromThemeList(themeId:string, themeListName:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/RemoveUserThemeList`, {themeId, themeListName, userName});
 }

 modifyThemeList(themeList:ThemeList, themeListName:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/UpdateUserThemeList`, {themeList, themeListName, userName});
 }

 modifyUserData(attribute:string, oldAttribute:string, newAttribute:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/UpdateUserData`, {attribute, oldAttribute, newAttribute, userName});
 }

 checkPassword(userName:string, password:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/checkPassword`, {userName, password});
 }

 getThemesFromList(profile:string, themeListName:string):Observable<{status:boolean, list:Themes[]}>{
  return this.http.post<{status:boolean, list:Themes[]}>(`http://${Variables.host}:${Variables.port}/api/getThemesFromList`, {profile, themeListName});
 }

 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
  };
}
 
}

