import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginService){}
  username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  check(){
    if(this.username.invalid==true || this.password.invalid==true){
      return false;
    }
    return true;
  }
  login(){
    this.loginService.login(this.username.value??'',this.password.value??'')
  }
}
