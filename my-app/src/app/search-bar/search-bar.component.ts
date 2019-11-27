import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Token } from '../Token';
import { Router } from '@angular/router';

export interface Gamez {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  sessionTokenData: Token;
  @Input() localData: Token = new Token();
  @Input() atHome: boolean; 
  //@Output() sessionTokenDataOutput = new EventEmitter<Token>(); // emits Token 
  @Output() searchSelectionEmitter = new EventEmitter<string>(); // emits string
  @Output() atHomeEmitter = new EventEmitter<boolean>(); // emits boolean
  selectionData: string;
  hideButton: boolean = true;
  selectedGame: string;
  
  gameNames: Gamez[] = [
    { value: 'Dungeons and Dragons', viewValue: "Dungeons & Dragons"},
    { value: 'Pathfinder', viewValue: "Pathfinder"},
    { value: 'Monopoly', viewValue: "Monopoly"},
    { value: 'go-fish', viewValue: "Go Fish"},
    { value: 'rifts', viewValue: "Rifts"}
  ];
  
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nhistory.state.sessionToken _id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
      
  }

  findThisGame() {
    console.log(" <<<<<< In search-bar >>>>>> ");
    //console.log("Selected game, this.selectedGame.value: " + this.selectedGame);
    this.localData.Location = this.selectedGame.toString(); // change /Location to another prop once you get this working ///////////////
    //console.log("Selected game, this.localData.Location: " + this.localData.Location);
    this.searchSelectionEmitter.emit(this.localData.Location);
    if(history.state.sessionToken._id == undefined){
      console.log(">>> You must be logged in to view this page. Rerouting you to sign in page >>>");
      this.atHome = true;
      this.atHomeEmitter.emit(this.atHome);
      this.router.navigate(['/signIn'], {state: {sessionToken: this.localData}});
    }else{
      if(history.state.sessionToken._id != undefined && history.state.sessionToken.Location != undefined){
        
        console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nhistory.state.sessionToken._id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.searchSelection:   ' + history.state.sessionToken.Location+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
        this.localData._id = history.state.sessionToken._id;
        this.localData.UserName = history.state.sessionToken.UserName;
        //this.localData.Password = history.state.sessionToken..Password; // SECURITY RISK
        this.localData.Email = history.state.sessionToken.Email;
        this.localData.FirstName = history.state.sessionToken.FirstName;
        this.localData.LastName = history.state.sessionToken.LastName;
        this.localData.Telephone = history.state.sessionToken.Telephone;
        this.localData.DateOfBirth = history.state.sessionToken.DateOfBirth;
        this.localData.Country = history.state.sessionToken.Country;
        this.localData.Address = history.state.sessionToken.Address;
        this.localData.Address2 = history.state.sessionToken.Address2;
        this.localData.City = history.state.sessionToken.City; 
        this.localData.State = history.state.sessionToken.State;
        this.localData.Zipcode = history.state.sessionToken.Zipcode;
        this.localData.FreeAccount = history.state.sessionToken.FreeAccount;
        this.localData.SubscriptionExp = history.state.sessionToken.SubscriptionExp;
        this.localData.SubscriptionLv = history.state.sessionToken.SubscriptionLv;
        this.localData.AdminAccess = history.state.sessionToken.AdminAccess;
        this.localData.CurrentStatus = history.state.sessionToken.CurrentStatus;
        //this.localData.Location = history.state.sessionToken.Location;
        this.localData.createdOn = history.state.sessionToken.createdOn;
        this.localData.UID = history.state.sessionToken.UID;
        this.localData.userLatitude = history.state.sessionToken.userLatitude;
        this.localData.userLongitude = history.state.sessionToken.userLongitude;
        console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nthis.sessionTokenData._id:           ' + this.localData._id + '\r\nthis.sessionTokenData FirstName:     ' + this.localData.FirstName + '\r\nthis.sessionTokenData Address:       ' + this.localData.Address+'\r\nthis.sessionTokenData.userLatitude:  ' + this.localData.userLatitude + '\r\nthis.sessionTokenData.userLongitude: ' + this.localData.userLongitude + '\r\n////////////////////////////////////////////////');
        
        console.log(">>> Rerouting you to the gameboard page >>>");
        this.router.navigate(['/gameBoard'], {state: {sessionToken: this.localData}});
      }
    }
  }

  onClick() {
    this.hideButton = false;
  }

}
