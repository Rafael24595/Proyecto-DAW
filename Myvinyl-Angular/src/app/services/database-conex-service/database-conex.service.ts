import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Artist } from '../../classes/Artist';
import { Variables } from 'src/utils/variables/variables';
import { User } from '../../classes/User';
import { UserInterface } from '../../interfaces/UserInterface';
import { Themes } from '../../classes/Themes';
import { ThemeList } from 'src/app/classes/ThemeList';
import { ThemeComment } from 'src/app/interfaces/ThemesInterface';
import { Lyrics } from 'src/app/interfaces/LyricsInterface';

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

 getArtistDataByQuery(queryData:string[], limitQuery?:number, pageQuery?:number, fieldsQuery?:string[]):Observable<{status:boolean, message: Artist[] | undefined}>{
  limitQuery = (limitQuery) ? limitQuery : 0 ;
  pageQuery = (pageQuery) ? pageQuery : 0 ;
  fieldsQuery = (fieldsQuery) ? fieldsQuery : ['all'];
  return this.http.post<{status:boolean, message: Artist[] | undefined}>(`http://${Variables.host}:${Variables.port}/api/getArtistDataQuery`, {queryData, limitQuery, pageQuery, fieldsQuery});
}

 getProfileData(profile:string): Observable<{validToken:boolean,data:UserInterface}>{
  return this.http.get<{validToken:boolean,data:UserInterface}>(`http://${Variables.host}:${Variables.port}/api/getProfileData?profile=${profile}`);
 }

 getUserData(): Observable<User>{
   return this.http.get<User>(`http://${Variables.host}:${Variables.port}/api/getUserData`)
 }

 getUsersData(nameQuery: string[], limitQuery?:number, pageQuery?:number): Observable<{sucess:boolean, message: User[]}>{
   limitQuery = (limitQuery) ? limitQuery : 0;
   pageQuery = (pageQuery) ? pageQuery : 1;
  return this.http.post<{sucess:boolean, message: User[]}>(`http://${Variables.host}:${Variables.port}/api/searchUsersDataByName?nameQuery=${nameQuery}&limitQuery=${limitQuery}`, {nameQuery, limitQuery, pageQuery});
}

 setNewTheme(artistId: string, name: string, flag: string, tags: string[], lyrics: {native:string, esp:string}, userName: string):Observable<{status:boolean, message:Themes[]}>{
  return this.http.post<{status:boolean, message:Themes[]}>(`http://${Variables.host}:${Variables.port}/api/setTheme`, {artistId, name, flag, tags, lyrics, userName});
 }

 removeArtist(artistId:string,userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/removeArtist`, {artistId, userName});
 }

 removeTheme(artistId:string, themeId:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/removeTheme`, {artistId, themeId, userName});
 }

 setArtistAttribute(artistId:string, attribute:string, value:string | string[], userName:string):Observable<{status:boolean,message:Artist}>{
  return this.http.post<{status:boolean,message:Artist}>(`http://${Variables.host}:${Variables.port}/api/setArtistAttribute`, {artistId, attribute, value, userName});
 }

 setThemeAttribute(themeId: string, attribute: string, value: string | string[] | number | ThemeComment[] |Lyrics, userName: string):Observable<{status:boolean,message:Themes}>{
  return this.http.post<{status:boolean,message:Themes}>(`http://${Variables.host}:${Variables.port}/api/setThemesAttribute`, {themeId, attribute, value, userName});
 }

 reassignArtistTheme(mainArtistId: string, targetArtistId:string, themeId:string, userName:string):Observable<{status:boolean,message:Artist}>{
  return this.http.post<{status:boolean,message:Artist}>(`http://${Variables.host}:${Variables.port}/api/reassignArtistTheme`, {mainArtistId, targetArtistId, themeId, userName});
 }

 reassignArtistThemes(mainArtistId: string, targetArtistId:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/reassignArtistThemes`, {mainArtistId, targetArtistId, userName});
 }

 setThemeComment(themeId:string,userName:string,comment:string):Observable<{status: boolean, commentData:ThemeComment}>{
   return this.http.post<{status: boolean, commentData:ThemeComment}>(`http://${Variables.host}:${Variables.port}/api/publishComment`, {themeId, userName, comment});
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

 newThemeList(themeListName:string, privacy:string, userName:string, list?: Themes[]):Observable<{list:ThemeList}>{
  list = (list) ? list : [];
  return this.http.post<{list:ThemeList}>(`http://${Variables.host}:${Variables.port}/api/CreateNewThemeList`, {themeListName, privacy, list, userName});
 }

 removeThemeList(themeListName:string, userName:string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/DeleteThemeList`, {themeListName, userName});
 }

 addToThemeList(artistId:string, themeId:string, themeListName:string, userName:string):Observable<{status:boolean, message: Themes[]}>{
  return this.http.post<{status:boolean, message: Themes[]}>(`http://${Variables.host}:${Variables.port}/api/AddToUserThemeList`, {artistId, themeId, themeListName, userName});
 }

 removeFromThemeList(themeId:string, themeListName:string, userName:string):Observable<{status:boolean, message: Themes[]}>{
  return this.http.post<{status:boolean, message: Themes[]}>(`http://${Variables.host}:${Variables.port}/api/RemoveUserThemeList`, {themeId, themeListName, userName});
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

 getArtistsIds(attribute:string):Observable<{status:boolean, message:string[]}>{
  return this.http.get<{status:boolean, message:string[]}>(`http://${Variables.host}:${Variables.port}/api/getArtistsId?attribute=${attribute}`);
 }

 getFlagsNames():Observable<{status:boolean, message:string[]}>{
  return this.http.get<{status:boolean, message:string[]}>(`http://${Variables.host}:${Variables.port}/api/getFlagsList`);
 }

 sendFilesToServer(FormData: FormData):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/uploadFile`, FormData);
 }

 setNewArtist(artistId:string, name: string, surname:string, description: string, tags: string[], userName: string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}:${Variables.port}/api/setArtist`, {artistId, name, surname, description, tags, userName});
 }

 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
  };
}
 
}

