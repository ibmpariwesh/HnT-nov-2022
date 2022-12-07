import { Component } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  //state
  firstname = "Pariwesh";
  public save(){
    console.log("test");
    console.error('error has happed'+this.firstname)
  }
}
