
import { DatabaseConexService } from '../../app/services/database-conex-service/database-conex.service'
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/User';
import { sesionValues } from '../variables/sessionVariables';
import { ServerErrorToken } from 'src/app/interfaces/AuthorizationInterfaces';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { NotificationManage } from './NotificationManage';

@Injectable({
  providedIn: 'root'
})

export class ManageUser{

    checkTokenInterval:NodeJS.Timeout | undefined  = undefined;
    countAnswer = 0;
    alerted:boolean = false;

    constructor(private DatabaseConexService: DatabaseConexService, private autorizationService: AuthorizationService){};

    checkToken(){

        if(!this.checkTokenInterval){
            this.checkTokenInterval = setInterval(()=>{
                console.log(this.autorizationService.checkForToken())
                if(this.autorizationService.checkForToken()){
                    this.DatabaseConexService.checkToken(sesionValues.activeUser.name).subscribe(
                        sucess=>{
                            let status = sucess.status;
                            let code = sucess.message.code;
                            let time = sucess.message.time;
                            console.log(sucess)
                            if(!status){
                                switch (code){
    
                                    case 'correct':
                                        console.log('correct')
                                    break;
    
                                    case 'warn':
                                        let expireDate = new Date(Date.now() + time);
                                        var minutes: number | string = Math.floor(time / 60000);
                                        if(!this.alerted){
                                            this.alerted = true;
                                            minutes = (minutes == 0) ? `menos de ${minutes + 1} minuto` : (minutes == 1) ? `${minutes} minuto` : `${minutes} minutos` ;
                                            NotificationManage.showMessage(`La sesión va a caducar en ${minutes}. ¿Quieres extender la sesión?`, 'answer', this.refreshToken.bind(this));
                                        }
                                    break;
    
                                    case 'expired':
                                        this.alerted = false;
                                        NotificationManage.showMessage(`La sesión ha caducado`, 'manual');
                                        this.autorizationService.destroySession();
                                    break;
    
                                }
                            }
                        },
                        err=>{
                            console.error(`Error: ${err.message}`);
                        }
                    );
                }
            },30000);
        }

    }

    refreshToken(){
        if(this.autorizationService.checkForToken()){
            this.DatabaseConexService.extendSession(sesionValues.activeUser.name).subscribe(
                sucess=>{console.log(sucess);
                    let token = sucess.message.token;
                    this.autorizationService.setToken(token);
                    this.alerted = false;
                },
                err=>{
                    console.error(`Error: ${err}`);
                }
            );
        }
    }

    getUserDataFromDataBase(): Promise<boolean> {
        return new Promise(resolve=>{
            this.DatabaseConexService.getUserData().subscribe(user =>{
                User.setUser(user.name, user.admin, user.description, user.themeLists, user.email);
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
                console.error(`Error: ${err}`);
                let serverError = err.error as ServerErrorToken;
                if(serverError.destroyToken){
                    this.autorizationService.destroySession();
                }
            }
            );

        })

    }

}