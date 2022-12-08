import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  constructor(public userService: UserService) {

  }
  //state
  user = {
    username: "Pariwesh2",
    email: "pariweshg@gmail.com",
    password: "Testing123",
    gender: "F"
  }
  public signin() {
    const observable = this.userService.signin(this.user);
    observable.subscribe((response: any) => {
      sessionStorage.setItem('token', response.accessToken);
    })
  }
  public signup() {
    const observable = this.userService.signup(this.user);
    observable.subscribe((response: any) => {
    })
  }
}
