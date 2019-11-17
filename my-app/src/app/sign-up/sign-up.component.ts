import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { UserAccount } from '../UserAccount';
import { Token } from '../Token';
import { Router } from '@angular/router';
import { UserSignInData } from '../UserSignInData';
//import { CloseScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  providedSigninData: UserSignInData = {UserName: '', Password: ''};
  newUser: UserAccount;
  sessionTokenData: Token;
  curlatitude = 40;
  curlongitude = 100;
  passwordMinLenth = 7;
  passwordMaxLenth = 24;

  userName = new FormControl('', [
    Validators.required, 
    Validators.min(2), 
    Validators.max(24)
  ]);
  userPassword1 = new FormControl('', [
    Validators.required,  
    Validators.maxLength(this.passwordMaxLenth), 
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{' + this.passwordMinLenth + ',}')
  ]);
  userPassword2 = new FormControl('', [
    Validators.required, 
    Validators.maxLength(this.passwordMaxLenth), 
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{' + this.passwordMinLenth + ',}'),
  ]);
  eMailAddress = new FormControl('', [
    Validators.required, 
    Validators.email
  ]);
  firstName = new FormControl('', [
    Validators.required, 
    Validators.minLength(2), 
    Validators.maxLength(32),
    Validators.pattern('[a-zA-Z ]*')
  ]);
  lastName = new FormControl('', [
    Validators.required, 
    Validators.minLength(1), 
    Validators.maxLength(32),
    Validators.pattern('[a-zA-Z\* ]*')
  ]);
  userTelephone = new FormControl('', [
    Validators.required, 
    Validators.minLength(10), 
    Validators.maxLength(24),
    Validators.pattern('^[+]*[ (]{0,1}[0-9]{1,4}[) ]{0,1}[-\s\./0-9 ]*$')
  ]);
  userDOB = new FormControl('', [
    Validators.required
  ]);
  userCountry = new FormControl('', [
    Validators.required
  ]);
  userStreetAddress = new FormControl('', [
    Validators.required
  ]);
  userStreetAddress2 = new FormControl('');
  userCity = new FormControl('', [
    Validators.required
  ]);
  userState = new FormControl('', [
    Validators.required
  ]);
  userZipCode = new FormControl('', [
    Validators.required, 
    Validators.minLength(5), 
    Validators.maxLength(5)
  ]);
  userFreeAcc = new FormControl('');


  passwordsMatch(userPassword1: FormControl, userPassword2: FormControl) {
    if(userPassword1.value.toString() == userPassword2.value.toString()) {
      return true;
    }
    else {
      console.log("////////////////////////////\r\n<< Passwords don't match >>\r\n////////////////////////////"); ////////////////////////
      document.getElementById('userPassword1Err').innerHTML = "Passwords Don't match";
      document.getElementById('userPassword2Err').innerHTML = "Passwords Don't match";
      return false;
    }    
  }

  inAgeRange(userAge: FormControl) {
    let todaysDate: Date = new Date();
    if(userAge.value.toString().substring(0, 4) > (todaysDate.getFullYear() - 15) || 
       userAge.value.toString().substring(0, 4) < (todaysDate.getFullYear() - 125)){
      document.getElementById('userDOBErr').innerHTML = "Age out of range";
      document.getElementById('userDOBLbl').style.color = "red";
      return false;
    }else if (userAge.value.toString().substring(0, 4) > (todaysDate.getFullYear() - 125) && userAge.value.toString().substring(0, 4) < (todaysDate.getFullYear() - 15)) {
      if(userAge.value.toString().substring(5, 7) == (todaysDate.getMonth()+1) && userAge.value.toString().substring(8, 10) == todaysDate.getDate()){
        document.getElementById('userDOBErr').innerHTML = "Happy Birthday!";
        return true;
      }else {
        return true;
      }
    }else if (userAge.value.toString().substring(0, 4) == (todaysDate.getFullYear() - 125)) {
      if(userAge.value.toString().substring(5, 7) > (todaysDate.getMonth()+1)) {
        return true;
      }else if (userAge.value.toString().substring(5, 7) == (todaysDate.getMonth()+1)) {
        if (userAge.value.toString().substring(8, 10) > todaysDate.getDate()) {
          return true;
        }else if (userAge.value.toString().substring(8, 10) == todaysDate.getDate()){
          if(userAge.value.toString().substring(5, 7) == (todaysDate.getMonth()+1) && userAge.value.toString().substring(8, 10) == todaysDate.getDate()){
            document.getElementById('userDOBErr').innerHTML = "Happy Birthday!";
            return true;
          }else {
            return true;
          }
        }else {
          document.getElementById('userDOBErr').innerHTML = "Age out of range";
          document.getElementById('userDOBLbl').style.color = "red";
          return false;
        }
      }
    }else if (userAge.value.toString().substring(0, 4) < (todaysDate.getFullYear() - 15)) {
      if(userAge.value.toString().substring(5, 7) == (todaysDate.getMonth()+1) && userAge.value.toString().substring(8, 10) == todaysDate.getDate()){
        document.getElementById('userDOBErr').innerHTML = "Happy Birthday!";
        return true;
      }else {
        return true;
      }
    }else if (userAge.value.toString().substring(0, 4) == (todaysDate.getFullYear() - 15)) {
      if (userAge.value.toString().substring(5, 7) < (todaysDate.getMonth()+1))  {
        return true;
      }else if (userAge.value.toString().substring(5, 7) == (todaysDate.getMonth()+1)) {
        if (userAge.value.toString().substring(8, 10) < todaysDate.getDate()) {
          return true;
        }else if (userAge.value.toString().substring(8, 10) == todaysDate.getDate()) {
          document.getElementById('userDOBErr').innerHTML = "Happy Birthday!";
          return true;
        }else {
          document.getElementById('userDOBErr').innerHTML = "You must be at least 15\r\nyears old to use LFG";
          document.getElementById('userDOBLbl').style.color = "red";
          return false;
        }
      }
    }
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
    console.log('Latitude:  ' + this.curlatitude + '\r\nLongitude: ' + this.curlongitude);
  }


  addRecord(): void {
    // The DateTime stamp should be server side ///////////////////////////////////
    let nowDate: Date = new Date();
    let expDate: Date = new Date(
      nowDate.getFullYear()+1, 
      nowDate.getMonth(),
      nowDate.getDate()
    );

    this.newUser._id = (new Date().valueOf()).toString();  // if there is a duplicate, Mongo will just reject, user can try again
    this.newUser.UserName = this.userName.value;
    this.newUser.Password = this.userPassword1.value;
    this.newUser.Email = this.eMailAddress.value;
    this.newUser.FirstName = this.firstName.value;
    this.newUser.LastName = this.lastName.value;
    this.newUser.Telephone = this.userTelephone.value;
    this.newUser.DateOfBirth = this.userDOB.value;
    this.newUser.Country = this.userCountry.value;
    this.newUser.Address = this.userStreetAddress.value;
    this.newUser.Address2 = this.userStreetAddress2.value;
    this.newUser.City = this.userCity.value;
    this.newUser.State = this.userState.value;
    this.newUser.Zipcode = this.userZipCode.value;
    this.newUser.FreeAccount = this.userFreeAcc.value;
    this.newUser.SubscriptionExp = expDate;
    if(this.userFreeAcc.value){
      this.newUser.SubscriptionLv = 0;
    }else{
      this.newUser.SubscriptionLv = 1;
    }
    //this.newUser.AdminAccess = "0"; // handeled my MongoDB
    this.newUser.CurrentStatus = "online";
    this.newUser.Location = "unknown";
    //this.newUser.createdOn = nowDate.toString(); // handeled my MongoDB
    //this.newUser.UID = ""; // handeled my MongoDB
    this.newUser.userLatitude = this.curlatitude;
    this.newUser.userLongitude = this.curlongitude;
    
    console.log('////////////////////////////////////////////////////\r\nUser info submitted, id: ' + this.newUser._id + '\r\n////////////////////////////////////////////////////'); ////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////
    //                                                          //
    //    Uncomment this to send new user records to mongoDB    //
    //                                                          //
    this.callNodeService.insertUser(this.newUser).subscribe();//
    //                                                          //
    //////////////////////////////////////////////////////////////
  }
  
  submitSignin() {
    
    console.log(' <<<<< submitSignin() called >>>>> '); // for testing //////////////////////////////////////////////////////
    this.providedSigninData.UserName = this.newUser.UserName;
    this.providedSigninData.Password = this.newUser.Password;
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
      history.state.sessionToken.UID = userData.UID;
      history.state.sessionToken.userLatitude = this.curlatitude; // might not need to get this data from mongoDB 
      history.state.sessionToken.userLongitude = this.curlongitude; // might not need to get this data from mongoDB 
      console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude: '+history.state.sessionToken.userLatitude+'\r\nhistory.state.sessionToken.userLongatude: '+history.state.sessionToken.userLongatude+'\r\n////////////////////////////////////////////////');
      
      
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
      this.sessionTokenData.userLatitude = this.curlatitude;
      this.sessionTokenData.userLongitude = this.curlongitude;
      console.log('////////////////////////////////////////////////\r\nthis.sessionTokenData _id:        ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:  ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:    ' + this.sessionTokenData.Address+'\r\nsessionTokenData.userLatitude:    ' + this.sessionTokenData.userLatitude + '\r\nsessionTokenData.userLongitude:   ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');
    
    })
    
  }

  submitSignupForm() {
    this.getLocation();
    this.clearErrMsgs();
    if(this.formValidation()){
      this.addRecord();
      this.submitSignin();
      // route the user to the sign-in.component ///////////////////////////////////////////////
      //this.router.navigate(['/']); // this works but dosent pass the data throught the 
      //                                router and it goes to a blank homepage without 
      //                                the search component
    }else{
      document.getElementById('errorMsgLabel').innerHTML = "An error occurred see above";
    }
  }

  formValidation(){
    if( 
      this.userName.errors == null &&
      this.userPassword1.errors == null &&
      this.userPassword2.errors == null &&
      this.passwordsMatch(this.userPassword1, this.userPassword2) &&
      this.eMailAddress.errors == null &&
      this.firstName.errors == null &&
      this.lastName.errors == null &&
      this.userTelephone.errors == null &&
      this.userDOB.errors == null &&
      this.inAgeRange(this.userDOB) &&
      this.userCountry.errors == null &&
      this.userStreetAddress.errors == null &&
      this.userStreetAddress2.errors == null &&
      this.userCity.errors == null &&
      this.userState.errors == null &&
      this.userZipCode.errors == null &&
      this.userFreeAcc.errors == null
    ) {
      return true;
    }else {
      if(false) { // Show error output for fields
        console.log('///////////////////////////////////////////////');
        console.log('All should return null if their were no errors.');
        console.log('userName.errors:      -    ' + this.userName.errors);
        console.log('userPassword1.errors:      ' + this.userPassword1.errors);
        console.log('userPassword2.errors:      ' + this.userPassword2.errors);
        console.log('eMailAddress.errors:  -    ' + this.eMailAddress.errors);
        console.log('firstName.errors:     -    ' + this.firstName.errors);
        console.log('lastName.errors:      -    ' + this.lastName.errors);
        console.log('userTelephone.errors:      ' + this.userTelephone.errors);
        console.log('userDOB.errors:       -    ' + this.userDOB.errors);
        console.log('userCountry.errors:   -    ' + this.userCountry.errors);
        console.log('userStreetAddress.errors:  ' + this.userStreetAddress.errors);
        console.log('userStreetAddress.errors2: ' + this.userStreetAddress2.errors);
        console.log('userCity.errors:      -    ' + this.userCity.errors);
        console.log('userState.errors:     -    ' + this.userState.errors);
        console.log('userZipCode.errors:   -    ' + this.userZipCode.errors);
        console.log('userFreeAcc.errors:   -    ' + this.userFreeAcc.errors);
        console.log('///////////////////////////////////////////////');
      }
      if (this.userName.errors != null ) {
        document.getElementById('userNameErr').innerHTML = 'Must be between 2 to 24 chareters long';
        document.getElementById('userNameLbl').style.color = "red";
      }
      if (this.userPassword1.errors != null) {
        document.getElementById('userPassword1Err').innerHTML = 'Must be between 8 to 24 chareters long<br />and have Lowercase and Uppercase<br />letters Numbers and Special characters';
        document.getElementById('userPassword1Lbl').style.color = "red";
      }     
      if (this.userPassword2.errors != null) {
        document.getElementById('userPassword2Err').innerHTML = 'Must be between 8 to 24 chareters long<br />and have Lowercase and Uppercase<br />letters Numbers and Special characters';
        document.getElementById('userPassword2Lbl').style.color = "red";
      }
      if (!this.passwordsMatch(this.userPassword1, this.userPassword2) ) {
        document.getElementById('userPassword2Err').innerHTML = "Passwords Don't match";
        document.getElementById('userPassword2Lbl').style.color = "red";
      }
      if (this.eMailAddress.errors != null) {
        document.getElementById('eMailAddressErr').innerHTML = 'The email address entered isn\'t valid';
        document.getElementById('eMailAddressLbl').style.color = "red";
      }
      if (this.firstName.errors != null) {
        document.getElementById('firstNameErr').innerHTML = 'Must be between 2 to 32 chareters long<br />and only contain Letters';
        document.getElementById('firstNameLbl').style.color = "red";
      }
      if (this.lastName.errors != null) {
        document.getElementById('lastNameErr').innerHTML = 'Must be between 2 to 32 chareters long<br />and only contain Letters.<br />Use * if you have no last name';
        document.getElementById('lastNameLbl').style.color = "red";
      }
      if (this.userTelephone.errors != null) {
        document.getElementById('userTelephoneErr').innerHTML = 'Must be 10 digits. eg. 2065551212';
        document.getElementById('userTelephoneLbl').style.color = "red";
      }
      this.inAgeRange(this.userDOB);
      if (this.userCountry.errors != null) {
        document.getElementById('userCountryErr').innerHTML = 'Please select a country from the list';
        document.getElementById('userCountryLbl').style.color = "red";
      }
      if (this.userStreetAddress.errors != null) {
        document.getElementById('userStreetAddressErr').innerHTML = 'Required Field';
        document.getElementById('userStreetAddressLbl').style.color = "red";
      }
      if (this.userStreetAddress2.errors != null) {
        document.getElementById('userStreetAddress2Err').innerHTML = '';
        document.getElementById('userStreetAddress2Lbl').style.color = "red";
      }
      if (this.userCity.errors != null) {
        document.getElementById('userCityErr').innerHTML = 'Required Field';
        document.getElementById('userCityLbl').style.color = "red";
      }
      if (this.userState.errors != null) {
        document.getElementById('userStateErr').innerHTML = 'Required Field';
        document.getElementById('userStateLbl').style.color = "red";
      }
      if (this.userZipCode.errors != null) {
        document.getElementById('userZipCodeErr').innerHTML = 'Must be 5 digits';
        document.getElementById('userZipCodeLbl').style.color = "red";
      }
      return false;
    }
  }

  clearErrMsgs() {
    document.getElementById('errorMsgLabel').innerHTML = '* Required field';
    document.getElementById('userNameErr').innerHTML = '';
    document.getElementById('userPassword1Err').innerHTML = '';
    document.getElementById('userPassword2Err').innerHTML = '';
    document.getElementById('eMailAddressErr').innerHTML = '';
    document.getElementById('firstNameErr').innerHTML = '';
    document.getElementById('lastNameErr').innerHTML = '';
    document.getElementById('userTelephoneErr').innerHTML = '';
    document.getElementById('userDOBErr').innerHTML = '';
    document.getElementById('userCountryErr').innerHTML = '';
    document.getElementById('userStreetAddressErr').innerHTML = '';
    document.getElementById('userStreetAddress2Err').innerHTML = '';
    document.getElementById('userCityErr').innerHTML = '';
    document.getElementById('userStateErr').innerHTML = '';
    document.getElementById('userZipCodeErr').innerHTML = '';
    document.getElementById('userName').style.color = "black";
    document.getElementById('userPassword1Lbl').style.color = "black";
    document.getElementById('userPassword2Lbl').style.color = "black";
    document.getElementById('eMailAddressLbl').style.color = "black";
    document.getElementById('firstNameLbl').style.color = "black";
    document.getElementById('lastNameLbl').style.color = "black";
    document.getElementById('userTelephoneLbl').style.color = "black";
    document.getElementById('userDOBLbl').style.color = "black";
    document.getElementById('userCountryLbl').style.color = "black";
    document.getElementById('userStreetAddressLbl').style.color = "black";
    document.getElementById('userStreetAddress2Lbl').style.color = "black";
    document.getElementById('userCityLbl').style.color = "black";
    document.getElementById('userStateLbl').style.color = "black";
    document.getElementById('userZipCodeLbl').style.color = "black";
  }

  constructor(private callNodeService: CallNodeService, private router:Router) { 
    this.newUser = new UserAccount();
    this.sessionTokenData = new Token();
  }

  ngOnInit() { 
    console.log('////////////////////////////////////////////////\r\nthis.sessionTokenData _id:           ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:     ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:       ' + this.sessionTokenData.Address+'\r\nthis.sessionTokenData.userLatitude:  ' + this.sessionTokenData.userLatitude + '\r\nthis.sessionTokenData.userLongitude: ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');
    
  }

}
