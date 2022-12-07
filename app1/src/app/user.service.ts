import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  save(firstname:any) {
    //logic
    console.log('firstname '+firstname );
  }

  constructor() { }
}
