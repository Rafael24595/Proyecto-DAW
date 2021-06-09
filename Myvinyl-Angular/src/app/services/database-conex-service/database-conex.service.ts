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
    return this.http.get<Artist[]>(`http://${Variables.host}/api/getData?count=${limit}`)
             .pipe( 
               tap(_ => console.log('Searching..')),
               catchError(this.handleError<Artist[]>())
          );
 }

 getThemeData(themeId:string): Observable<Themes>{
  return this.http.get<Themes>(`http://${Variables.host}/api/theme/${themeId}`);
 }

 getArtistData(artistId:string): Observable<{status:boolean, artist: Artist | null}>{
  return this.http.get<{status:boolean, artist: Artist | null}>(`http://${Variables.host}/api/artist/${artistId}`);
 }

 getArtistDataByQuery(queryData:string[], limitQuery?:number, pageQuery?:number, fieldsQuery?:string[]):Observable<{status:boolean, message: Artist[] | undefined}>{
  limitQuery = (limitQuery) ? limitQuery : 0 ;
  pageQuery = (pageQuery) ? pageQuery : 0 ;
  fieldsQuery = (fieldsQuery) ? fieldsQuery : ['all'];
  return this.http.get<{status:boolean, message: Artist[] | undefined}>(`http://${Variables.host}/api/artist/${pageQuery}/${limitQuery}?query=${JSON.stringify(queryData)}&fields=${JSON.stringify(fieldsQuery)}`);
}

 getProfileData(profile:string): Observable<{validToken:boolean,data:UserInterface}>{
  return this.http.get<{validToken:boolean,data:UserInterface}>(`http://${Variables.host}/api/user/${profile}`);
 }

 checkToken(userName:string): Observable<{status:boolean,message:{code:string, time:number}}>{
  return this.http.get<{status:boolean,message:{code:string, time:number}}>(`http://${Variables.host}/api/user/self/profile/token/date?userName=${userName}`);
 }

 extendSession(userName:string): Observable<{status:boolean,message:{token:string}}>{
  return this.http.get<{status:boolean,message:{token:string}}>(`http://${Variables.host}/api/user/self/profile/token/refresh?userName=${userName}`);
 }

 getUserData(): Observable<User>{
   return this.http.get<User>(`http://${Variables.host}/api/user/self/profile/token`)
 }

 getUsersData(nameQuery: string[], limitQuery?:number, pageQuery?:number): Observable<{sucess:boolean, message: User[]}>{
   limitQuery = (limitQuery) ? limitQuery : 0;
   pageQuery = (pageQuery) ? pageQuery : 1;
  return this.http.get<{sucess:boolean, message: User[]}>(`http://${Variables.host}/api/user/${pageQuery}/${limitQuery}?nameQuery=${JSON.stringify(nameQuery)}`);
}

 setNewTheme(artistId: string, name: string, flag: string, tags: string[], lyrics: {native:string, esp:string}, userName: string):Observable<{status:boolean, message:Themes}>{
  return this.http.post<{status:boolean, message:Themes}>(`http://${Variables.host}/api/theme`, {artistId, name, flag, tags, lyrics, userName});
 }

 removeArtist(artistId:string,userName:string):Observable<{}>{
  return this.http.delete(`http://${Variables.host}/api/artist/${artistId}?user=${userName}`);
 }

 removeTheme(artistId:string, themeId:string, userName:string):Observable<{}>{
  return this.http.delete(`http://${Variables.host}/api/theme/${themeId}?user=${userName}`);
 }

 setArtistAttribute(artistId:string, attribute:string, value:string | string[], userName:string):Observable<{status:boolean,message:Artist}>{
  return this.http.patch<{status:boolean,message:Artist}>(`http://${Variables.host}/api/artist/${artistId}/${attribute}?value=${JSON.stringify(value)}`, {userName});
 }

 setThemeAttribute(themeId: string, attribute: string, value: string | string[] | number | ThemeComment[] |Lyrics, userName: string):Observable<{status:boolean,message:Themes}>{
  return this.http.patch<{status:boolean,message:Themes}>(`http://${Variables.host}/api/theme/${themeId}/${attribute}?value=${JSON.stringify(value)}`, {userName});
 }

 reassignArtistTheme(mainArtistId: string, targetArtistId:string, themeId:string, userName:string):Observable<{status:boolean,message:Artist}>{
  return this.http.patch<{status:boolean,message:Artist}>(`http://${Variables.host}/api/theme/reassign/${mainArtistId}/${targetArtistId}/${themeId}`, {userName});
 }

 reassignArtistThemes(mainArtistId: string, targetArtistId:string, userName:string):Observable<{status:boolean}>{
  return this.http.patch<{status:boolean}>(`http://${Variables.host}/api/theme/reassign/${mainArtistId}/${targetArtistId}/all`, {userName});
 }

 setThemeComment(themeId:string,userName:string,comment:string):Observable<{status: boolean, commentData:ThemeComment}>{
   return this.http.post<{status: boolean, commentData:ThemeComment}>(`http://${Variables.host}/api/theme/${themeId}/comment`, {userName, comment});
 }

 thumbValueTheme(themeId:string, thumbValue:number, userName:string):Observable<{status:string, userThemeLists:ThemeList[], likes:number, dislikes:number}>{
   return this.http.patch<{status:string, userThemeLists:ThemeList[], likes:number, dislikes:number}>(`http://${Variables.host}/api/theme/${themeId}/thumb/${thumbValue}`, {userName});
 }

 removeThemeComment(themeId:string,userName:string,commentId:string):Observable<{}>{
  return this.http.delete(`http://${Variables.host}/api/theme/${themeId}/comment/${commentId}?user=${userName}`);
}

 updateThemeListPrivacity(themeListName:string, state:string, userName:string):Observable<{status:boolean}>{
  return this.http.patch<{status:boolean}>(`http://${Variables.host}/api/user/${userName}/themelist/${themeListName}/attribute/privacy`, {state});
 }

 newThemeList(themeListName:string, privacy:string, userName:string, list?: Themes[]):Observable<{list:ThemeList}>{
  list = (list) ? list : [];
  return this.http.post<{list:ThemeList}>(`http://${Variables.host}/api/user/${userName}/themelist/${themeListName}`, {privacy, list});
 }

 removeThemeList(themeListName:string, userName:string):Observable<{status:boolean}>{
  return this.http.delete<{status:boolean}>(`http://${Variables.host}/api/user/${userName}/themelist/${themeListName}`);
 }

 addToThemeList(artistId:string, themeId:string, themeListName:string, userName:string):Observable<{status:boolean, message: Themes[]}>{
  return this.http.post<{status:boolean, message: Themes[]}>(`http://${Variables.host}/api/user/${userName}/themelist/${themeListName}/${themeId}`, {artistId});
 }

 removeFromThemeList(themeId:string, themeListName:string, userName:string):Observable<{status:boolean, message: Themes[]}>{
  return this.http.delete<{status:boolean, message: Themes[]}>(`http://${Variables.host}/api/user/${userName}/themelist/${themeListName}/${themeId}`);
 }

 modifyThemeList(themeList:ThemeList, themeListName:string, userName:string):Observable<{status:boolean}>{
  return this.http.patch<{status:boolean}>(`http://${Variables.host}/api/user/${userName}/themelist/${themeListName}`, {themeList});
 }

 modifyUserData(attribute:string, oldAttribute:string, newAttribute:string, userName:string):Observable<{status:boolean}>{
  return this.http.patch<{status:boolean}>(`http://${Variables.host}/api/user/${userName}/${attribute}`, {oldAttribute, newAttribute});
 }

 checkPassword(userName:string, password:string):Observable<{status:boolean}>{
  return this.http.get<{status:boolean}>(`http://${Variables.host}/api/user/${userName}/password/${password}`);
 }

 getThemesFromList(profile:string, themeListName:string):Observable<{status:boolean, list:Themes[]}>{
  return this.http.get<{status:boolean, list:Themes[]}>(`http://${Variables.host}/api/user/${profile}/themelist/${themeListName}/all`);
 }

 getArtistsIds(attribute:string):Observable<{status:boolean, message:string[]}>{
  return this.http.get<{status:boolean, message:string[]}>(`http://${Variables.host}/api/artist/attributte/${attribute}/all`);
 }

 getFlagsNames():Observable<{status:boolean, message:string[]}>{
  return this.http.get<{status:boolean, message:string[]}>(`http://${Variables.host}/api/theme/attributte/flags/all`);
 }

 sendFilesToServer(FormData: FormData):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}/api/file`, FormData);
 }

 setNewArtist(artistId:string, name: string, surname:string, description: string, tags: string[], userName: string):Observable<{status:boolean}>{
  return this.http.post<{status:boolean}>(`http://${Variables.host}/api/artist`, {artistId, name, surname, description, tags, userName});
 }

 checkActivationCode(code:string):Observable<{status:boolean, user:UserInterface}>{
  return this.http.get<{status:boolean, user:UserInterface}>(`http://${Variables.host}/api/user/verify/${code}`);
 }

 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
  };
}
 
}

