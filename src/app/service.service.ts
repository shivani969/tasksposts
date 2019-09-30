import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  // registerUser(body){
  //   return this.http.post('https://reqres.in/api/register',body).pipe(map(data => 
  //   console.log('1',data)))
  // }
  
  // loginUser(body){
  //   return this.http.post('https://reqres.in/api/users',body).pipe(map(data=>
  //   console.log('1',data)))
  // }
}

