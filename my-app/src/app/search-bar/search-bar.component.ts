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
  sessionTokenData: Token = new Token();
  @Input() localData: Token = new Token();
  @Input() atHome: boolean; 
  @Output() sessionTokenDataOutput = new EventEmitter<Token>(); // emits Token 
  //@Output() searchSelectionEmitter = new EventEmitter<string>(); // emits string
  //@Output() atHomeEmitter = new EventEmitter<boolean>(); // emits boolean
  selectionData: string;
  hideButton: boolean = true;
  selectedGame: string;
  
  gameNames: Gamez[] = [
    { value: 'None', viewValue: "All Games"},
    { value: 'Dungeons and Dragons', viewValue: "Dungeons & Dragons"},
    { value: 'Pathfinder', viewValue: "Pathfinder"},
    { value: 'Monopoly', viewValue: "Monopoly"},
    { value: 'Go fish', viewValue: "Go fish"},
    { value: 'Arkham horror', viewValue: "Arkham horror"},
    { value: 'Elder sign', viewValue: "Elder sign"},
    { value: 'Dungeon!', viewValue: "Dungeon!"},
    { value: 'Magic: The Gathering', viewValue: "Magic: The Gathering"},
    { value: 'Warhammer 40000', viewValue: "Warhammer 40000"},
    { value: 'Middle-earth role playing', viewValue: "Middle-earth role playing"}
  ];
  
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nhistory.state.sessionToken._id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
    if(false) {
      if(history.state.sessionToken==undefined || history.state == null || history.state.sessionToken._id == "Default") {
        console.log('............................................');
        if(history.state.sessionToken==undefined) {
          console.log('history.state.sessionToken==undefined');
          this.sessionTokenDataOutput.emit(this.sessionTokenData);
        }else if(history.state == null) {
          console.log('history.state == null');
          this.sessionTokenDataOutput.emit(this.sessionTokenData);
        } else if(history.state.sessionToken._id == "Default") {
          console.log('history.state.sessionToken._id == "Default"');
          this.sessionTokenDataOutput.emit(this.sessionTokenData);
        }
        console.log('............................................');
      }else{
        console.log('............................................');
        console.log('>>>>');
        this.sessionTokenDataOutput.emit(this.sessionTokenData);
        console.log('............................................');
      }
    }
  }

  createNewEvent() {
    if(history.state.sessionToken._id == undefined){
      console.log(">>> search-bar: You must be logged in to view this page. Rerouting you to sign in page >>>");
      this.atHome = true;
      
      this.router.navigate(['/signIn'], {state: {sessionToken: this.sessionTokenData}});
    }else{
      if(history.state.sessionToken._id != undefined && history.state.sessionToken.Location != undefined){
        
        console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nhistory.state.sessionToken._id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.searchSelection:   ' + history.state.sessionToken.Location+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
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
        //this.sessionTokenData.Location = history.state.sessionToken.Location;
        this.sessionTokenData.createdOn = history.state.sessionToken.createdOn;
        this.sessionTokenData.UID = history.state.sessionToken.UID;
        this.sessionTokenData.userLatitude = history.state.sessionToken.userLatitude;
        this.sessionTokenData.userLongitude = history.state.sessionToken.userLongitude;
        console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nthis.sessionTokenData._id:           ' + this.localData._id + '\r\nthis.sessionTokenData FirstName:     ' + this.localData.FirstName + '\r\nthis.sessionTokenData Address:       ' + this.localData.Address+'\r\nthis.sessionTokenData.userLatitude:  ' + this.localData.userLatitude + '\r\nthis.sessionTokenData.userLongitude: ' + this.localData.userLongitude + '\r\n////////////////////////////////////////////////');
        
        console.log(">>> Rerouting you to the createGameEvent page >>>");
        
        this.router.navigate(['/createGameEvent'], {state: {sessionToken: this.sessionTokenData}});
      }
    }
  }

  findThisGame() {
    console.log(" <<<<<< In search-bar >>>>>> ");
    //console.log("Selected game, this.selectedGame.value: " + this.selectedGame);
    if(this.selectedGame == undefined) {
      this.selectedGame = "None";
    }
    //this.localData.Location = this.selectedGame.toString(); // change /Location to another prop once you get this working ///////////////
    this.sessionTokenData.Location = this.selectedGame.toString();
    //console.log("Selected game, this.localData.Location: " + this.localData.Location);
    //this.searchSelectionEmitter.emit(this.localData.Location);
    if(history.state.sessionToken._id == undefined){
      console.log(">>> You must be logged in to view this page. Rerouting you to sign in page >>>");
      this.atHome = true;
      
      this.router.navigate(['/signIn'], {state: {sessionToken: this.sessionTokenData}});
    }else{
      if(history.state.sessionToken._id != undefined && history.state.sessionToken.Location != undefined){
        
        console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nhistory.state.sessionToken._id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.searchSelection:   ' + history.state.sessionToken.Location+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
        this.sessionTokenData._id = history.state.sessionToken._id;
        this.sessionTokenData.UserName = history.state.sessionToken.UserName;
        //this.localData.Password = history.state.sessionToken..Password; // SECURITY RISK
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
        //this.sessionTokenData.Location = history.state.sessionToken.Location;
        this.sessionTokenData.createdOn = history.state.sessionToken.createdOn;
        this.sessionTokenData.UID = history.state.sessionToken.UID;
        this.sessionTokenData.userLatitude = history.state.sessionToken.userLatitude;
        this.sessionTokenData.userLongitude = history.state.sessionToken.userLongitude;
        console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nthis.sessionTokenData._id:           ' + this.localData._id + '\r\nthis.sessionTokenData FirstName:     ' + this.localData.FirstName + '\r\nthis.sessionTokenData Address:       ' + this.localData.Address+'\r\nthis.sessionTokenData.userLatitude:  ' + this.localData.userLatitude + '\r\nthis.sessionTokenData.userLongitude: ' + this.localData.userLongitude + '\r\n////////////////////////////////////////////////');
        
        console.log(">>> Rerouting you to the gameboard page >>>");
        
        this.router.navigate(['/gameBoard'], {state: {sessionToken: this.sessionTokenData}});
      }
    }
  }

  onClick() {
    this.hideButton = false;
  }

}
