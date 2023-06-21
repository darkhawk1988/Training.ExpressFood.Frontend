import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// class Person{
//     fisrtname:string='';
//     lastname:string='';
//     username:string='';
//     password:string='';
//     gender:string='';
//     userType:string='';
//     nationalCode:string='';
//     birthDate:string='';
//     cellphone:number=0;
//     emailAddress:string='';
//     resturantName:string='';
//     address:string='';
// }
export default class RegisterComponent {
  // person:Person=new Person();
  // people:Person[]=[];
  constructor(private router:Router){}
  mode = new FormControl('', [Validators.requiredTrue]);
  userType = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);
  firstname = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[ا-ی]*')]);
  lastname = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[ا-ی]*')]);
  gender = new FormControl('', [Validators.required]);
  nationalCode = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]);
  birthDate = new FormControl('', [Validators.required]);
  cellphone = new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]*')]);
  emailAddress = new FormControl('', [Validators.email]);
  restaurantName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  address = new FormControl('', [Validators.required, Validators.minLength(20), Validators.pattern('[ا-ی0-9]*')]);
  resturantAddress = new FormControl('', [Validators.required, Validators.minLength(20), Validators.pattern('[ا-ی0-9]*')]);

  check(){
    if(this.userType.invalid==true){
      return false
    }
    if(this.username.invalid==true || this.password.invalid==true){
      return false;
    }
    if(this.password.value != this.confirmPassword.value){
      return false;
    }
    if(this.firstname.invalid==true || this.lastname.invalid==true){
      return false;
    }
    if(this.gender.invalid==true || this.nationalCode.invalid==true){
      return false;
    }
    if(this.birthDate.invalid==true || this.cellphone.invalid==true){
      return false;
    }
    if(this.restaurantName.value=='' && this.userType.value=='صاحب رستوران'){
      return false;
    }
    if(this.userType.value=="مشتری" && this.address.invalid==true){
      return false;
    }
    if(this.userType.value=="صاحب رستوران" && this.resturantAddress.invalid==true){
      return false;
    }
    return true;
  }

  loginPage(){
    this.router.navigateByUrl('/login');
  }

  register(){
  }

  onlyPersianAlphabet(e:KeyboardEvent){
    if(e.key>='ا' && e.key<='ی'){
    }
    else{
      e.preventDefault();
    }
  }

  onlyNumber(e:KeyboardEvent){
    if(e.key>='0' && e.key<='9'){
    }
    else{
      e.preventDefault();
    }
  }

  onlyPersianAlphabetAndNumber(e:KeyboardEvent){
    if(e.key>='ا' && e.key<='ی'){
    }
    else if(e.key>='0' && e.key<='9'){
    }
    else{
      e.preventDefault();
    }
  }

  changeMode(){
    if(this.mode.invalid==true){
      return true;
    }
      return false;
  }
}
