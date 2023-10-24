import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ResponseDto } from 'src/app/shared/models/ResponseDto';
import { UserLogin } from 'src/app/shared/models/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService,
    private router: Router) {}
  alertMessage: any = ''
  exibirAlert: boolean = false;

  user: UserLogin = {
    login: '',
    password: ''
  }

  resp:ResponseDto = {
    token: '',
    message: ''
  }




  autenticar(form: NgForm){
    let userLogin:UserLogin = {
      login: form.value.login,
      password: form.value.password
    }

    this.authService.login(userLogin.login, userLogin.password)
      .subscribe(
        (response: HttpResponse<ResponseDto>) => {
          response!=null? this.exibirAlert = true : this.exibirAlert = false;

          const token = response.body?.token;
          this.alertMessage = response.body!.message;
          const status = response.status;
          const role:string = this.authService
    .decodeJwt(token!).roles;

          

          if (token !== undefined && status >= 200 && status < 300) {
  /*             this.authServic.setCookie('token', token!, 1);
              this.authService
        .setCookie('roles', role); */
              this.authService
        .isLogged$.subscribe((isLogged) => {isLogged = true});
          }else {
              console.error('Token não encontrado na resposta ou status diferente de 200');
          }
          
        },
        (error) => {
          console.log(error);
        }
      );
  }
    
}
