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
    username : "Pariwesh",
    email:"pariweshg@gmail.com",
    password:"",
    gender: "F"
  }
  public register(){
    console.log("test");
    const observable = this.userService.save(this.user);
    observable.subscribe((response:any)=>{
      console.log(response);
      
    })
    console.error('error has happed'+this.user)
  }
}
