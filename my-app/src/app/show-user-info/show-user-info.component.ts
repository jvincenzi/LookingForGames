import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { UserAccount } from '../UserAccount';
import { Token } from '../Token';
import { PartialObserver } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-user-info',
  templateUrl: './show-user-info.component.html',
  styleUrls: ['./show-user-info.component.css']
})
export class ShowUserInfoComponent implements OnInit {
  sessionTokenData: Token;
  hideUserList: Boolean = false;
  selectedUser: UserAccount;
  tempUser: UserAccount = new UserAccount();
  deleteConfirmation: Boolean = false;
  tempId: string;
  DOB: string;
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
  userFreeAcc = new FormControl(false);

  constructor(private callNodeService: CallNodeService) {
    this.sessionTokenData = new Token();
    if(history.state.sessionToken == null || history.state == undefined)
    {
      history.state.sessionToken._id = "0123456789";
      history.state.sessionToken.UserName  = "Karma";
      history.state.sessionToken.Password  = "string";
      history.state.sessionToken.Email  = "string";
      history.state.sessionToken.FirstName  = "string";
      history.state.sessionToken.LastName  = "string";
      history.state.sessionToken.Telephone  = "string";
      //DateOfBirth: Date;
      history.state.sessionToken.Country = "string";
      history.state.sessionToken.Address = "string";
      history.state.sessionToken.Address2 = "string";
      history.state.sessionToken.City = "string";
      history.state.sessionToken.State = "string";
      history.state.sessionToken.Zipcode = 0;
      history.state.sessionToken.FreeAccount = false;
      //SubscriptionExp: Date;
      history.state.sessionToken.SubscriptionLv = 0;
      history.state.sessionToken.AdminAccess = "string";
      history.state.sessionToken.CurrentStatus = "string";
      history.state.sessionToken.Location = "string";
      history.state.sessionToken.createdOn = "string";
      history.state.sessionToken.UID = "string";
      history.state.sessionToken.userLatitude = 0;
      history.state.sessionToken.userLongitude = 0;
    }
  }

  ngOnInit() {
    console.log('/// ngOnInit - history.state.sessionToken._id: ' + history.state.sessionToken._id + ' ///');
    this.getUser(history.state.sessionToken._id);
    //this.getUsers(); // OLD
    console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
  }

  passwordsMatch(userPassword1: FormControl, userPassword2: FormControl) {
    if(userPassword1.value.toString() == userPassword2.value.toString()) {
      return true;
    }
    else {
      //console.log("////////////////////////////\r\n<< Passwords don't match >>\r\n////////////////////////////");
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
    //console.log('Latitude:  ' + this.lata + '\r\nLongitude: ' + this.long);
  }

  /*
  getUsers(): void { // OLD. used to get all user before signin code worked ///////////////////////////////
    this.callNodeService.getAllUsers().subscribe((userData: UserAccount[]) => {
      //this.myAccount = userData;
    })
  }
  */

  swapView(){
    this.hideUserList = !this.hideUserList;
  }
  
  editUserInfo(id: string) {
    //console.log('////// id: '+id+' //////'); ///////////////////////////////////////////////
    //if(this.tempUser == null){
      this.getUser(id);
    //}
    this.hideUserList = true;
  }
  getUser(id: string): void {
    //console.log("/// In getUser("+id+") ///");  /////////////////////////////////////////////////////////
    let y;
    this.callNodeService.getUser(id).subscribe((userData: UserAccount) => {
      this.tempUser = userData;
      console.log('/// userData._id: ' + userData._id + ' ///' );
      this.firstName.setValue(userData.FirstName.toString());      
      this.lastName.setValue(userData.LastName.toString());
      this.eMailAddress.setValue(userData.Email.toString());
      this.userName.setValue(userData.UserName.toString());
      this.userPassword1.setValue(userData.Password.toString());
      this.userTelephone.setValue(userData.Telephone.toString());

      //this.userDOB.setValue(userData.DateOfBirth.toString().substring(0, 10)); // Broken: not sure how to set the default date
      // userData.DateOfBirth.toString().substring(0, 10);
      
      //this.userCountry.setValue(userData.Country.toString()); // fix me: mongo records need to add the field
      this.userStreetAddress.setValue(userData.Address.toString());
      //this.userStreetAddress2.setValue(userData.Address2.toString()); // fix me: mongo records need to add the field
      this.userCity.setValue(userData.City.toString());
      this.userState.setValue(userData.State.toString());
      this.userZipCode.setValue(userData.Zipcode.toString());
      
    })
  }
  
  deleteUserAccount(PassedInUserAccount: UserAccount): void {
    this.selectedUser = PassedInUserAccount;
    this.deleteUser();
    this.deleteConfirmation = false;
  }
  deletePrompt(): void {
    this.deleteConfirmation = !this.deleteConfirmation;
  }
  deleteUser(): void {
    console.log("This is the user to be deleted, _id: " + this.selectedUser._id); /////////////////////////////////////////////////////
    this.callNodeService.deleteUser(this.selectedUser).subscribe();
  }
  
  updateRecord(): void {
    this.tempId = this.tempUser._id.toString();
    this.tempUser.UserName = this.userName.value;
    this.tempUser.UserName = this.userName.value;
    this.tempUser.Password = this.userPassword1.value;
    this.tempUser.Email = this.eMailAddress.value;
    this.tempUser.FirstName = this.firstName.value;
    this.tempUser.LastName = this.lastName.value;
    this.tempUser.Telephone = this.userTelephone.value;
    this.tempUser.DateOfBirth = this.userDOB.value;
    this.tempUser.Country = this.userCountry.value;
    this.tempUser.Address = this.userStreetAddress.value;
    this.tempUser.Address2 = this.userStreetAddress2.value;
    this.tempUser.City = this.userCity.value;
    this.tempUser.State = this.userState.value;
    this.tempUser.Zipcode = this.userZipCode.value;
    this.tempUser.FreeAccount = this.userFreeAcc.value;
    if(this.userFreeAcc.value){
      this.tempUser.SubscriptionLv = 0;
    }else{
      this.tempUser.SubscriptionLv = 1;
    }
    //this.tempUser.SubscriptionExp = expDate;
    //this.tempUser.SubscriptionLv = 1;
    //this.tempUser.CurrentStatus = "online";
    //this.tempUser.Location = "unknown";
    //this.tempUser.createdOn = nowDate.toString(); 
    this.callNodeService.updateUser(this.tempUser).subscribe();
  }

  formValidation(){
    console.log('/// IN formValidation() ///')
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
      console.log('/// Forms pass validation! ///')
      return true;
    }else {
      if(true) { // Show error output for fields
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

  submitModUserInfo() {
    this.getLocation();
    this.clearErrMsgs();
    if(this.formValidation()){
      this.updateRecord();
      
      
      //this.tempUser = null;
      //this.getUser(this.tempId);
      this.hideUserList = false;
    }else{
      document.getElementById('errorMsgLabel').innerHTML = "An error occurred see above";
      document.getElementById('errorMsgLabel').style.color = "red";
    }
  }

  clearErrMsgs() {
    // reset error text
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
    // reset color
    document.getElementById('errorMsgLabel').style.color = "black";
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


  
  


}



  
  
  
  

  
  



