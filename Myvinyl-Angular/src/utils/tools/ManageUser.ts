
import { DatabaseConexService } from '../../app/services/database-conex-service/database-conex.service'
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/User';
import { sesionValues } from '../variables/sessionVariables';
import { ServerErrorToken } from 'src/app/interfaces/AuthorizationInterfaces';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { UserInterface } from 'src/app/interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})

export class ManageUser{

    constructor(private DatabaseConexService: DatabaseConexService, private autorizationService: AuthorizationService){};

    getUserDataFromDataBase(): Promise<boolean> {
        return new Promise(resolve=>{
            this.DatabaseConexService.getUserData().subscribe(user =>{
                User.setUser(user.name, user.email, user.admin, user.themeLists);
                sesionValues.activeUser = User.getUser();                
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

    getProfileDataFromDataBase(profile:string): Promise<UserInterface> {

        return new Promise(resolve=>{
            this.DatabaseConexService.getProfileData(profile).subscribe(user =>{
                resolve(user.data);
                if(!user.validToken){
                    this.autorizationService.destroySession();
                }
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