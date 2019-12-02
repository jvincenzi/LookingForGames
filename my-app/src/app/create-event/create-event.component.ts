import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { GameEvent } from '../GameEvent';
import { Router } from '@angular/router';
import { Token } from '../Token';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  sessionTokenData: Token;
  newGame: GameEvent = new GameEvent();

  title = new FormControl('', [
    Validators.required
  ]);
  gameName = new FormControl('', [
    Validators.required
  ]);
  locationName = new FormControl('', [
    Validators.required
  ]);
  location = new FormControl('', [
    Validators.required
  ]);
  date = new FormControl('', [
    Validators.required
  ]);
  time = new FormControl('', [
    Validators.required
  ]);
  restrictions = new FormControl('', [
    Validators.required
  ]);
  reqPlayers = new FormControl('', [
    Validators.required
  ]);
  maxPlayers = new FormControl('', [
    Validators.required
  ]);
  

  addRecord(): void {

    this.newGame._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newGame.Title = this.title.value;
    this.newGame.GameType = this.gameName.value.toString();
    this.newGame.LocationName = this.locationName.value;
    this.newGame.Location = this.location.value;
    this.newGame.Date = this.date.value;
    this.newGame.Time = this.time.value;
    this.newGame.Restrictions = this.restrictions.value;
    this.newGame.ReqPlayers = this.reqPlayers.value;
    this.newGame.MaxPlayers = this.maxPlayers.value;

    this.callNodeService.insertGame(this.newGame).subscribe();
  }

  submitNewGameEvent() {
    if(history.state.sessionToken._id == undefined){
      console.log(">>> You must be logged in to view this page. Rerouting you to sign in page >>>");
      this.router.navigate(['/signIn'], {state: {sessionToken: this.sessionTokenData}});
    }else{
      if(history.state.sessionToken._id != undefined && history.state.sessionToken.Location != undefined){
        this.addRecord();
        //console.log('////////////////////////////////////////////////\r\nCreate-event:\r\nhistory.state.sessionToken._id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.searchSelection:   ' + history.state.sessionToken.Location+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
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
        this.sessionTokenData.Location = this.newGame.GameType;
        this.sessionTokenData.createdOn = history.state.sessionToken.createdOn;
        this.sessionTokenData.UID = history.state.sessionToken.UID;
        this.sessionTokenData.userLatitude = history.state.sessionToken.userLatitude;
        this.sessionTokenData.userLongitude = history.state.sessionToken.userLongitude;
        console.log('////////////////////////////////////////////////\r\nCreate-event:\r\nthis.sessionTokenData._id:           ' 
        + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:     ' 
        + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:       ' 
        + this.sessionTokenData.Address + '\r\nthis.sessionTokenData Selection:       ' 
        + this.sessionTokenData.Location +'\r\nthis.sessionTokenData.userLatitude:  ' 
        + this.sessionTokenData.userLatitude + '\r\nthis.sessionTokenData.userLongitude: ' 
        + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');
        
        console.log(">>> Rerouting you to the gameBoard page >>>");
        this.router.navigate(['/gameBoard'], {state: {sessionToken: this.sessionTokenData}});
      }
    }
  }

  //constructor(private formBuilder: FormBuilder) { }
  constructor(private callNodeService: CallNodeService, private router: Router) { 
    this.sessionTokenData = new Token();
  }

  ngOnInit() { 
    console.log('////////////////////////////////////////////////\r\nCreate-event:\r\nhistory.state.sessionToken _id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
    
    if(history.state.sessionToken == undefined || history.state.sessionToken._id == undefined || history.state.sessionToken._id == "Default"){
      //console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nhistory.state.sessionToken _id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
    
      console.log(">>> You must be logged in to view this page. Rerouting you to sign in page >>>");
      this.router.navigate(['/signIn', {state: {sessionToken: this.sessionTokenData}}]);
    }else{
      console.log('////////////////////////////////////////////////\r\nGame-Board:\r\nhistory.state.sessionToken _id:       ' + history.state.sessionToken._id +"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName +"\r\nsessionToken Search Selection:   " + history.state.sessionToken.Location+'\r\n////////////////////////////////////////////////');
    }
  }

}