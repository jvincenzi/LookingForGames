import { Component } from '@angular/core';
import { Token } from './Token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Looking For Games'; // was: my-app
  atHome = true;

  newPage (){
    this.atHome = false;
  }

  ngOnInit() {
    userToken: Token; // NEW ??????????????????????????????????????????
    //newUser: UserAccount = new UserAccount();
    //this.newUser.setValue(userData.FirstName.toString()); 
  }

  renderHome (){
    this.atHome = true;
  }
}
