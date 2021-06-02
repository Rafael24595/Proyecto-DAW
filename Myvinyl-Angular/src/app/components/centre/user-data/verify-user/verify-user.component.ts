import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { DatabaseConexService } from 'src/app/services/database-conex-service/database-conex.service';
import { sesionValues } from 'src/utils/variables/sessionVariables';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  constructor(private  DatabaseConexService: DatabaseConexService, private router: Router, private route:ActivatedRoute) { }

  statusMessage:string = 'Accediendo a la base de datos, espere un momento.';
  status: boolean = false;
  count: number = 3;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      let code = params['code'];console.log(code);
      if(code && code != ''){
        this.DatabaseConexService.checkActivationCode(code).subscribe(
          sucess=>{
            let user = sucess.user;
            this.statusMessage = 'La cuenta se ha verifcado correctamente.';
            this.status = true;
            User.setUser(user.name, user.admin, user.date, user.description, user.themeLists, user.email, user.activeAccount);
            //setTimeout();
          },
          err=>{
            console.error(err)
          }
        );
      }
      else{
        this.router.navigate(['/Home']);
      }

    });
  }

}
