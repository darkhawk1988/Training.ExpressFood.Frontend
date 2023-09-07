import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent {
  title = new FormControl('', [Validators.required,Validators.minLength(3)]);
  resturantAddress = new FormControl('', [Validators.required,Validators.minLength(20), Validators.pattern('[ا-ی0-9]*')]);

  onlyPersianAlphabetAndNumber(e:KeyboardEvent){
    if(e.key>='ا' && e.key<='ی'){
    }
    else if(e.key>='0' && e.key<='9'){
    }
    else{
      e.preventDefault();
    }
  }
  check(){
    if(this.title.invalid==true || this.resturantAddress.invalid==true){
      return false;
    }
    return true;
  }
}
