import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  constructor(public userService:UserService){

  }
  //state
  user={
    firstname : "Pariwesh",
    gender: "F"
  }
  public save(){
    console.log("test");
    this.userService.save(this.user);
    console.error('error has happed'+this.user)
  }
}
