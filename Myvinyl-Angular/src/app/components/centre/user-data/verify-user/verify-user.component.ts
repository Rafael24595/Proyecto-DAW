import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { AuthorizationService } from 'src/app/services/autorization-service/authorization.service';
import { DatabaseConexService } from 'src/app/services/database-conex-service/database-conex.service';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  constructor(private  DatabaseConexService: DatabaseConexService, private authorization:AuthorizationService, private router: Router, private route:ActivatedRoute) { }

  statusMessage:string = 'Accediendo a la base de datos, espere un momento...';
  status: boolean = false;
  count: number = 5;
  mediaPath = '../../../../../assets/media';
  sessionValues = sesionValues;
  checkArmL = '';
  checkArmR = '';

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      let code = params['code'];console.log(code);
      if(code && code != ''){
        this.DatabaseConexService.checkActivationCode(code).subscribe(
          sucess=>{
            this.authorization.destroySession();
            let user = sucess.user;
            this.statusMessage = 'La cuenta se ha verifcado correctamente.';
            this.status = true;
            User.setUser(user.name, user.admin, user.date, user.description, user.themeLists, user.email, user.activeAccount);
            this.startCheckAnimation();
            let interval;
            interval = setInterval(() => {
              if (this.count > 0) {
                this.count = this.count - 1
              } else {
                  clearInterval(interval);
                  this.router.navigate([`/Profile/${user.name}`]);
              }
            }, 1000);
          },
          err=>{
            console.error(err);
            this.router.navigate(['/Home']);
          }
        );
      }
      else{
        this.router.navigate(['/Home']);
      }

    });
  }

  startCheckAnimation(){
    setTimeout(()=>{
      this.checkArmL = 'show';
      setTimeout(()=>{
        this.checkArmR = 'show';
      }, 120);
    },120);
  }

}
