import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/+services/backend.service';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private backend:BackendSecurityService,
     private router:Router,
     private _snackBar: MatSnackBar){}
  isBusy:boolean=false;
  message:string='';
  keepMe:boolean=false;
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
    this.isBusy=true;
    let username:string|undefined=this.username.value?.toString();
    let password:string|undefined=this.password.value?.toString();
    this.backend.signin(username??'',password??'').subscribe(r=>
      {
        let result=r as any;
        if(result.isSucceed==false){
          this.message=result.message;
          this._snackBar.open(this.message,'',{duration:4000});
          this.password.setValue('');
        }
        else{
          sessionStorage.setItem('token',result.token);
          if(this.keepMe==true){
            localStorage.setItem('token',result.token);
          }
          switch(result.type){
            case 'SystemAdmin':
              this.router.navigate(['/admins']);
              break;
            case 'RestauranOwner':
              this.router.navigate(['/restaurants']);
              break;
            case 'Customer':
              this.router.navigate(['/customers']);
              break;
          }
        }
        this.isBusy=false;
      });
  }

  // registerPage(){
  //   this.router.navigateByUrl('/register');
  // }

  changeMode(){
    if(this.mode.invalid==true){
      return true;
    }
      return false;
  }
}
