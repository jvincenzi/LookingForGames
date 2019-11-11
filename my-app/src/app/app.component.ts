import { Component } from '@angular/core';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Looking For Games'; // was: my-app
  atHome = true;
  //sessionToken: SessionTokenService;
  

  newPage (){
    this.atHome = false;
  }

  ngOnInit() {
    
    //newUser: UserAccount = new UserAccount();
    //this.newUser.setValue(userData.FirstName.toString()); 
  }

  renderHome (){
    this.atHome = true;
  }
}
