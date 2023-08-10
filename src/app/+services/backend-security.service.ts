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
}
