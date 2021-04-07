
import { DatabaseConexService } from '../../app/services/database-conex.service'
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/User';
import { sesionValues } from '../variables/sessionVariables';
import { ServerErrorToken } from 'src/app/interfaces/AuthorizationInterfaces';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ProfileData } from 'src/app/interfaces/ProfileDataInterface';

@Injectable({
  providedIn: 'root'
})

export class ManageUser{

    constructor(private DatabaseConexService: DatabaseConexService, private autorizationService: AuthorizationService){};

    getUserDataFromDataBase(): Promise<boolean> {

        return new Promise(resolve=>{

            this.DatabaseConexService.getUserData().subscribe(user =>{
 
                User.setUser(user.name, user.email, user.admin, user.themeLists, user.likes);
                
                resolve(true);
              
            },
            err=>{
                
                let serverError = err.error as ServerErrorToken;

                if(serverError.destroyToken){
                    this.autorizationService.destroySession();
                }
            
            }
            );

        })

    }

    getProfileDataFromDataBase(profile:string): Promise<ProfileData> {

        return new Promise(resolve=>{

            this.DatabaseConexService.getProfileData(profile).subscribe(user =>{
                
                resolve(user);
              
            },
            err=>{
                
                let serverError = err.error as ServerErrorToken;

                if(serverError.destroyToken){
                    this.autorizationService.destroySession();
                }
            
            }
            );

        })

    }

}