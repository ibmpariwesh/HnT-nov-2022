import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:8080/api/auth/signin';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient ){}
  save(user:any) {
    //logic
    console.log(user );
    return this.http.post(URL,user);
  }
}
