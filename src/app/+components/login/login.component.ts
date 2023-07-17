import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/+services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public backend:BackendService, private router:Router){}
  mode = new FormControl('', [Validators.requiredTrue]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  check(){
    if(this.username.invalid==true || this.password.invalid==true){
      return false;
    }
    return true;
  }

  login(){
    this.backend.http
    .post(
      this.backend.securityAPI+'signin',
      {username:this.username.value,password:this.password.value})
      .subscribe(result => {console.log(result)});
  }

  registerPage(){
    this.router.navigateByUrl('/register');
  }

  changeMode(){
    if(this.mode.invalid==true){
      return true;
    }
      return false;
  }
}
