import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Token } from '../Token';
import { CallNodeService } from '../call-node.service';
import { UserSignInData } from '../UserSignInData';
import { UserAccount } from '../UserAccount';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  providedSigninData: UserSignInData = {UserName: '', Password: ''};
  sessionTokenData: Token;
  userName = new FormControl('');
  userPassword1 = new FormControl('');;
  curlatitude = 40;
  curlongitude = 100;
  
  constructor(private callNodeService: CallNodeService, private router: Router) { //, private route: ActivatedRoute
    this.sessionTokenData = new Token();
    //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
  }

  ngOnInit() {
    //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
    this.getLocation();
  }

  submitSignin() {
    console.log(' <<<<< submitSignin() called >>>>> '); // for testing //////////////////////////////////////////////////////
    
    // Put loading code icon here ////////////////////////////////////////////////////////
    document.getElementById('errorMsgLabel').innerHTML = '<b>Please Wait...</b>';
    document.getElementById('errorMsgLabel').style.color = "red";
  
    this.providedSigninData.UserName = this.userName.value;
    this.providedSigninData.Password = this.userPassword1.value;
    //console.log( "In submitSignin(" + this.providedSigninData.UserName + ' ' + this.providedSigninData.Password + ")" );
    this.callNodeService.userLogin(this.providedSigninData).subscribe((userData: UserAccount) => {
      /*
      history.state.sessionToken._id = userData._id;
      history.state.sessionToken.FirstName = userData.FirstName;
      history.state.sessionToken.LastName = userData.LastName;
      history.state.sessionToken.Email = userData.Email;
      history.state.sessionToken.UserName = userData.UserName;
      //history.state.sessionToken.Password = userData.Password;
      history.state.sessionToken.Telephone = userData.Telephone;
      history.state.sessionToken.DateOfBirth = userData.DateOfBirth;
      history.state.sessionToken.Address = userData.Address;
      history.state.sessionToken.Address2 = userData.Address2;
      history.state.sessionToken.City = userData.City;
      history.state.sessionToken.State = userData.State;
      history.state.sessionToken.Zipcode = userData.Zipcode;
      history.state.sessionToken.Country = userData.Country;
      history.state.sessionToken.FreeAccount = userData.FreeAccount;
      history.state.sessionToken.SubscriptionExp = userData.SubscriptionExp;
      history.state.sessionToken.SubscriptionLv = userData.SubscriptionLv;
      history.state.sessionToken.AdminAccess = userData.AdminAccess;  // might not need to get this data from mongoDB
      history.state.sessionToken.CurrentStatus = userData.CurrentStatus;
      history.state.sessionToken.Location = userData.Location;
      history.state.sessionToken.createdOn = userData.createdOn;
      history.state.sessionToken.UID = userData.UID;
      history.state.sessionToken.userLatitude = this.curlatitude; // might not need to get this data from mongoDB 
      history.state.sessionToken.userLongitude = this.curlongitude; // might not need to get this data from mongoDB 
      //console.log('////////////////////////////////////////////////\r\nSign-In:\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
      */
      
      this.sessionTokenData._id = userData._id;
      this.sessionTokenData.FirstName = userData.FirstName;
      this.sessionTokenData.LastName = userData.LastName;
      this.sessionTokenData.Email = userData.Email;
      this.sessionTokenData.UserName = userData.UserName;
      //this.sessionTokenData.Password = userData.Password;
      this.sessionTokenData.Telephone = userData.Telephone;
      this.sessionTokenData.DateOfBirth = userData.DateOfBirth;
      this.sessionTokenData.Address = userData.Address;
      this.sessionTokenData.Address2 = userData.Address2;
      this.sessionTokenData.City = userData.City;
      this.sessionTokenData.State = userData.State;
      this.sessionTokenData.Zipcode = userData.Zipcode;
      this.sessionTokenData.FreeAccount = userData.FreeAccount;
      this.sessionTokenData.SubscriptionExp = userData.SubscriptionExp;
      this.sessionTokenData.SubscriptionLv = userData.SubscriptionLv;
      this.sessionTokenData.AdminAccess = userData.AdminAccess;
      this.sessionTokenData.CurrentStatus = userData.CurrentStatus;
      this.sessionTokenData.Location = userData.Location;
      this.sessionTokenData.createdOn = userData.createdOn;
      this.sessionTokenData.UID = userData.UID;
      this.sessionTokenData.userLatitude = this.curlatitude;
      this.sessionTokenData.userLongitude = this.curlongitude;

      console.log('////////////////////////////////////////////////\r\nSign-In:\r\nthis.sessionTokenData _id:        ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:  ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:    ' + this.sessionTokenData.Address+'\r\nsessionTokenData.userLatitude:    ' + this.sessionTokenData.userLatitude + '\r\nsessionTokenData.userLongitude:   ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');  
      //console.log('this.curlatitude:  ' + this.curlatitude + '\r\nthis.curlongitude: ' + this.curlongitude);
      document.getElementById('errorMsgLabel').innerHTML = '';
      document.getElementById('errorMsgLabel').style.color = "black";
      
      // this.router.navigate(['/']);
      // put loading icon here ////////////////////////////////////////////////////////
      
      if(this.sessionTokenData._id != undefined){
        // set 
        //this.router.navigate(['/searchBar']);
        console.log('/// Done logging in ... ///');
        this.router.navigate(['/searchBar'], {state: {sessionToken: this.sessionTokenData}});
      }
    })
    
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }else {
      console.log('/// Geolocation is not supported by this browser. ///:  ');
      document.getElementById('errorMsgLabel').innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  setPosition(position) {
    this.curlatitude = position.coords.latitude;
    this.curlongitude = position.coords.longitude;
    //console.log('Latitude:  ' + this.lata + '\r\nLongitude: ' + this.long);
  }

  


}