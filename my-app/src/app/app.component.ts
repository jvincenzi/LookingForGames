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
    console.log("///////////////////////////\r\nSetting up the sessionToken\r\n///////////////////////////");
    if(history.state == undefined) {
      this.sessionTokenData = new Token();
      console.log('/// BORK sessionTokenData was null setting it up now  ///');
    }
  }

  newPage (){
    this.atHome = false;
  }

  ngOnInit() {
    //newUser: UserAccount = new UserAccount();
    //this.newUser.setValue(userData.FirstName.toString());
  }

  renderHome (){
    this.atHome = true;
    console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
    
    this.sessionTokenData._id = history.state.sessionToken._id;
    this.sessionTokenData.FirstName = history.state.sessionToken.FirstName;
    this.sessionTokenData.LastName = history.state.sessionToken.LastName;
    this.sessionTokenData.Email = history.state.sessionToken.Email;
    this.sessionTokenData.UserName = history.state.sessionToken.UserName;
    //this.sessionTokenData.Password = userData.Telephone;
    this.sessionTokenData.Telephone = history.state.sessionToken.Telephone;
    this.sessionTokenData.DateOfBirth = history.state.sessionToken.DateOfBirth;
    this.sessionTokenData.Address = history.state.sessionToken.Address;
    this.sessionTokenData.City = history.state.sessionToken.City; 
    this.sessionTokenData.State = history.state.sessionToken.State;
    this.sessionTokenData.Zipcode = history.state.sessionToken.Zipcode;
    this.sessionTokenData.FreeAccount = history.state.sessionToken.FreeAccount;
    this.sessionTokenData.SubscriptionExp = history.state.sessionToken.SubscriptionExp;
    this.sessionTokenData.SubscriptionLv = history.state.sessionToken.SubscriptionLv;
    this.sessionTokenData.AdminAccess = history.state.sessionToken.AdminAccess;
    this.sessionTokenData.CurrentStatus = history.state.sessionToken.CurrentStatus;
    this.sessionTokenData.Location = history.state.sessionToken.Location;
    this.sessionTokenData.createdOn = history.state.sessionToken.createdOn;
    this.sessionTokenData.UID = history.state.sessionToken.UID;
  }
}
