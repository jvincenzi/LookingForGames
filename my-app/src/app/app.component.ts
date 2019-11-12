import { Component } from '@angular/core';
import { Token } from './Token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Looking For Games';
  atHome = true;
  sessionTokenData: Token;

  constructor() {
    this.sessionTokenData = new Token();
    
    this.sessionTokenData._id = ''
    this.sessionTokenData.FirstName = '';
    this.sessionTokenData.LastName = '';
    this.sessionTokenData.Email = '';
    this.sessionTokenData.UserName = '';
    this.sessionTokenData.Password = '';
    this.sessionTokenData.Telephone = '';
    this.sessionTokenData.DateOfBirth = null;
    this.sessionTokenData.Address = '';
    this.sessionTokenData.City = '';
    this.sessionTokenData.State = '';
    this.sessionTokenData.Zipcode = 0;
    this.sessionTokenData.FreeAccount = true;
    this.sessionTokenData.SubscriptionExp = null;
    this.sessionTokenData.SubscriptionLv = 0;
    this.sessionTokenData.AdminAccess = '';
    this.sessionTokenData.CurrentStatus = '';
    this.sessionTokenData.Location = '';
    this.sessionTokenData.createdOn = '';
    this.sessionTokenData.UID = '';


  }//private sessionToken: Token

  newPage (){
    this.atHome = false;
  }

  ngOnInit() {
    
    

    //newUser: UserAccount = new UserAccount();
    //this.newUser.setValue(userData.FirstName.toString()); 

    

  }

  renderHome (){
    this.atHome = true;

    console.log('history.state.sessionToken.FirstName: '+history.state.sessionToken.FirstName);
    

  }
}
