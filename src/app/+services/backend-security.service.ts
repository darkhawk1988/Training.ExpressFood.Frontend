import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityService {

  constructor(private backend:BackendService) { }
  signin(username:string,password:string){
    return this.backend.http.post
      (this.backend.securityAPI+'signin',{username:username,password:password});
  }
  signup(type:number,username:string,password:string,firstname:string,lastname:string,
    gender:string,nationalCode:string,cellphone:string,emailAddress:string){
    return this.backend.http.post
      (this.backend.securityAPI+'signup',{type:type,username:username,password:password,
        firstname:firstname,lastname:lastname,gender:gender,nationalCode:nationalCode,
        cellphone:cellphone,emailAddress:emailAddress});
  }
}
