import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Token } from '../Token';
import { CallNodeService } from '../call-node.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '../UserAccount';


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
  currentUser: UserAccount;
  atHome: boolean = true;
  //@Output() sessionTokenDataOutput = new EventEmitter<Token>(); // emits Token 
  @Output() searchSelectionEmitter = new EventEmitter<string>(); // emits string
  selectionData: string;
  hideButton: boolean = true;
  selectedGame: string;





  hideUserList: Boolean = false;



  gameNames: Gamez[] = [
    { value: 'Dungeons and Dragons', viewValue: "Dungeons & Dragons"},
    { value: 'Pathfinder', viewValue: "Pathfinder"},
    { value: 'Monopoly', viewValue: "Monopoly"},
    { value: 'go-fish', viewValue: "Go Fish"},
    { value: 'rifts', viewValue: "Rifts"}
  ];
  



  constructor() {
  }

  ngOnInit() {
  }

  findThisGame() {
    console.log(" <<<<<< In search-bar >>>>>> ");
    //console.log("Selected game, this.selectedGame.value: " + this.selectedGame);
    this.localData.Location = this.selectedGame.toString(); // change /Location to another prop once you get this working ///////////////
    console.log("Selected game, this.localData.Location: " + this.localData.Location);
    this.searchSelectionEmitter.emit(this.localData.Location);
  }

  onClick() {
    this.hideButton = false;
  }

  renderHome (){
    this.atHome = true;
    //console.log('////////////////////////////////////////////////\r\nApp.component:\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
    
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
    console.log('////////////////////////////////////////////////\r\nApp.component:\r\nthis.sessionTokenData _id:           ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:     ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:       ' + this.sessionTokenData.Address+'\r\nthis.sessionTokenData.userLatitude:  ' + this.sessionTokenData.userLatitude + '\r\nthis.sessionTokenData.userLongitude: ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');
  }
  
}
