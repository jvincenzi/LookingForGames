import { Component } from '@angular/core';

//import { AuthenticationService } from './_services';
import { UserAccount } from './UserAccount';
import { Router } from '@angular/router';

import { Token } from './Token';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   currentUser: UserAccount;
   title = 'Looking For Games';
  atHome = true;
  sessionTokenData: Token;

  constructor() {
    console.log("/////////////////////////\r\nInitializing sessionToken\r\n/////////////////////////");
    this.sessionTokenData = new Token();
  }
   ngOnInit() {
    //newUser: UserAccount = new UserAccount();
    //this.newUser.setValue(userData.FirstName.toString());
    
  }

  newPage (){
         this.atHome = false;
  }

  renderHome (){
    this.atHome = true;
    console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
    
    this.sessionTokenData._id = history.state.sessionToken._id;
    this.sessionTokenData.UserName = history.state.sessionToken.UserName;
    //this.sessionTokenData.Password = history.state.sessionToken..Password; // SECURITY RISK
    this.sessionTokenData.FirstName = history.state.sessionToken.FirstName;
    this.sessionTokenData.LastName = history.state.sessionToken.LastName;
    this.sessionTokenData.Email = history.state.sessionToken.Email;
    this.sessionTokenData.Telephone = history.state.sessionToken.Telephone;
    this.sessionTokenData.DateOfBirth = history.state.sessionToken.DateOfBirth;
    this.sessionTokenData.Country = history.state.sessionToken.Country;
    this.sessionTokenData.Address = history.state.sessionToken.Address;
    this.sessionTokenData.Address2 = history.state.sessionToken.Address2;
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
    this.sessionTokenData.userLatitude = history.state.sessionToken.userLatitude;
    this.sessionTokenData.userLongitude = history.state.sessionToken.userLongitude;
    console.log('////////////////////////////////////////////////\r\nthis.sessionTokenData _id:       ' + this.sessionTokenData._id + "\r\nthis.sessionTokenData FirstName: " + this.sessionTokenData.FirstName + "\r\nthis.sessionTokenData Address:   " + this.sessionTokenData.Address+'\r\n////////////////////////////////////////////////');
      
  }
}
//   title = 'my-app';
//   atHome = true;

//   newPage (){
//     this.atHome = false;
//   }

//   renderHome (){
//     this.atHome = true;
//   }
// }
