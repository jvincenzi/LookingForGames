import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Token } from '../Token';
import { CallNodeService } from '../call-node.service';
import { UserSignInData } from '../UserSignInData';
import { UserAccount } from '../UserAccount';


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
  
  submitSignin() {
    console.log(' <<<<< submitSignin() called >>>>> '); // for testing //////////////////////////////////////////////////////
    this.providedSigninData.UserName = this.userName.value;
    this.providedSigninData.Password = this.userPassword1.value;
    //console.log( "In submitSignin(" + this.providedSigninData.UserName + ' ' + this.providedSigninData.Password + ")" );
    this.callNodeService.userLogin(this.providedSigninData).subscribe((userData: UserAccount) => {
      
      //document.getElementById('errorMsgLabel').innerHTML = userData.message.toString();
      //console.log( userData );

      history.state.sessionToken._id = userData._id;
      history.state.sessionToken.FirstName = userData.FirstName;
      history.state.sessionToken.LastName = userData.LastName;
      history.state.sessionToken.Email = userData.Email;
      history.state.sessionToken.UserName = userData.UserName;
      //history.state.sessionToken.Password = userData.;
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
    //  history.state.sessionToken.UID = userData.UID;
   //   history.state.sessionToken.userLatitude = userData.userLatitude; // might not need to get this data from mongoDB 
   //   history.state.sessionToken.userLongitude = userData.userLongitude; // might not need to get this data from mongoDB 
      console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
      
      /*
      this.sessionTokenData._id = userData._id;
      this.sessionTokenData.FirstName = userData.FirstName;
      this.sessionTokenData.LastName = userData.LastName;
      this.sessionTokenData.Email = userData.Email;
      this.sessionTokenData.UserName = userData.UserName;
      //this.sessionTokenData.Password = userData.Telephone;
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
      this.sessionTokenData.userLatitude = history.state.sessionToken.userLatitude;
      this.sessionTokenData.userLongitude = history.state.sessionToken.userLongitude;
      console.log('////////////////////////////////////////////////\r\nthis.sessionTokenData _id: ' + this.sessionTokenData._id + "\r\nthis.sessionTokenData FirstName: " + this.sessionTokenData.FirstName + "\r\nthis.sessionTokenData Address:   " + this.sessionTokenData.Address+'\r\n////////////////////////////////////////////////');
      */
      console.log('////////////////////////////////////////////////\r\nthis.sessionTokenData _id: ' + this.sessionTokenData._id + "\r\nthis.sessionTokenData FirstName: " + this.sessionTokenData.FirstName + "\r\nthis.sessionTokenData Address:   " + this.sessionTokenData.Address+'\r\n////////////////////////////////////////////////');
      
    })
    
  }

  constructor(private callNodeService: CallNodeService) {
    this.sessionTokenData = new Token();
    //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
  }

  ngOnInit() {
    //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
  }


}