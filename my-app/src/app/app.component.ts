import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { AuthenticationService } from './_services';
import { UserAccount } from './UserAccount';
import { Router } from '@angular/router';
import { Token } from './Token';
import { Observable, interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //@Output() sessionTokenDataOutput = new EventEmitter<Token>();
  @Input() sessionTokenData: Token; // might not need to habe the sessionTokenDate be an @Input() 
  currentUser: UserAccount;
  title = 'LFG'; // Karma didn't like that this wasn't set to" title = 'my-app' so i fixed the test for our app;
  atHome: boolean = true;
  @Output() atHomeEmitter = new EventEmitter<boolean>(); // emits boolean
  
  private updateSubscription: Subscription;

  constructor(private router: Router) {
    console.log("/////////////////////////\r\nInitializing sessionToken\r\n/////////////////////////");
    this.sessionTokenData = new Token();
    this.router.navigate(['/searchBar'], {state: {sessionToken: this.sessionTokenData}});
  }

  ngOnInit() {
    this.renderHome();
    
    console.log('////////////////////////////////////////////////\r\nApp.component:\r\nthis.sessionTokenData _id:        ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:  ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:    ' + this.sessionTokenData.Address+'\r\nsessionTokenData.userLatitude:    ' + this.sessionTokenData.userLatitude + '\r\nsessionTokenData.userLongitude:   ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');  
    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.updateStats()
    });
    this.atHomeEmitter.emit(this.atHome);
    this.router.navigate(['/searchBar'], {state: {sessionToken: this.sessionTokenData}});
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  private updateStats() {
    console.log('I am doing something every second');
  }

  newPage (){
    this.atHome = false;
  }

  getSearchSelection(searchSelection: string) {
    console.log(' <<<<<< in getSearchSelection() >>>>>>');
    this.sessionTokenData.Location = searchSelection;
    console.log('Location/searchSelection: ' + this.sessionTokenData.Location.toString());
  }

  renderHome (){
    //this.atHome = true;
    if(history.state.sessionToken != undefined && history.state != null) {
      console.log('////////////////////////////////////////////////\r\nApp.component:\r\nhistory.state.sessionToken._id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
      this.sessionTokenData._id = history.state.sessionToken._id;
      this.sessionTokenData.UserName = history.state.sessionToken.UserName;
      //this.sessionTokenData.Password = history.state.sessionToken..Password; // SECURITY RISK
      this.sessionTokenData.Email = history.state.sessionToken.Email;
      this.sessionTokenData.FirstName = history.state.sessionToken.FirstName;
      this.sessionTokenData.LastName = history.state.sessionToken.LastName;
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
      //console.log('////////////////////////////////////////////////\r\nApp.component:\r\nthis.sessionTokenData _id:           ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:     ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:       ' + this.sessionTokenData.Address+'\r\nthis.sessionTokenData.userLatitude:  ' + this.sessionTokenData.userLatitude + '\r\nthis.sessionTokenData.userLongitude: ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');
    }
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
