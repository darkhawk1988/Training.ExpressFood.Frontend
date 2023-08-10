import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI:string='https://localhost:7186/';
  constructor(public http:HttpClient) { }
}
