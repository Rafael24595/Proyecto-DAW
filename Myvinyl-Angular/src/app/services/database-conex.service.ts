import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Artist } from '../classes/Artist';
import { Variables } from 'src/utils/variables/variables';
import { User } from '../classes/User';
import { ProfileData } from '../interfaces/ProfileDataInterface';

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

 getProfileData(profile:string): Observable<ProfileData>{
  return this.http.get<ProfileData>(`http://${Variables.host}:${Variables.port}/api/getProfileData?profile=${profile}`)
 }


 getUserData(): Observable<User>{
   return this.http.get<User>(`http://${Variables.host}:${Variables.port}/api/getUserData`)
 }

 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
  };
}
 
}

