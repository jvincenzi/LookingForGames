import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { UserAccount } from '../UserAccount';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser: UserAccount = new UserAccount();


  x = document.getElementById("demo");

  getLocation() {
    console.log('/// in getLocation() ///:  ');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('/// Geolocation is not supported by this browser. ///:  ');
      //this.x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  showPosition(position) {
    
    //this.x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    console.log('latitude:  ' + position.coords.latitude);
    console.log('longitude: ' + position.coords.longitude);
  }

/*
  form = new FormGroup({
    'userName': new FormControl(),
    'userPassword1': new FormControl(),
    'userPassword2': new FormControl(),
    'firstName': new FormControl(''),
    'lastName': new FormControl(''),
    'eMailAddress' : new FormControl(''),
    'userTelephone' : new FormControl(''),
    'userDOB' : new FormControl(''),
    'userStreetAddress' : new FormControl(''),
    'userStreetAddress2' : new FormControl(''),
    'userCity' : new FormControl(''),
    'userState' : new FormControl(''),
    'userZipCode' : new FormControl(''),
    'userCountry' : new FormControl(''),
    'userFreeAcc' : new FormControl('')
  })
  */

  userName = new FormControl('');
  userPassword1 = new FormControl('');
  userPassword2 = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  eMailAddress = new FormControl('');
  userTelephone = new FormControl('');
  userDOB = new FormControl('');
  userStreetAddress = new FormControl('');
  userStreetAddress2 = new FormControl('');
  userCity = new FormControl('');
  userState = new FormControl('');
  userZipCode = new FormControl('');
  userCountry = new FormControl('');
  userFreeAcc = new FormControl('');


  addRecord(): void {
    
    // The DateTime stamp should be server side
    let nowDate: Date = new Date();
    let expDate: Date = new Date(
      nowDate.getFullYear()+1, 
      nowDate.getMonth(), // BUG: this dosn't enter/display the month or hour properly
      nowDate.getDate(), 
      nowDate.getHours(), // BUG: this dosn't enter/display the month or hour properly
      nowDate.getMinutes(), 
      nowDate.getSeconds(),
      0
    );

    this.newUser._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    
    this.newUser.UserName = this.userName.value;
    //this.newUser.UserName = this.form.value.userName;
    this.newUser.Password = this.userPassword1.value;
    this.newUser.FirstName = this.firstName.value;
    this.newUser.LastName = this.lastName.value;
    this.newUser.Email = this.eMailAddress.value;
    this.newUser.Telephone = this.userTelephone.value;
    this.newUser.DateOfBirth = this.userDOB.value;
    this.newUser.Address = this.userStreetAddress.value;
    this.newUser.City = this.userCity.value;
    this.newUser.State = this.userState.value;
    this.newUser.Zipcode = this.userZipCode.value;
    this.newUser.FreeAccount = false;
    this.newUser.SubscriptionExp = expDate; // BUG: this dosn't enter/display the month or hour properly
    this.newUser.SubscriptionLv = 1;
    this.newUser.CurrentStatus = "online";
    this.newUser.Location = "unknown";
    this.newUser.createdOn = nowDate.toString(); 

    console.log('User info submitted, id: ' + this.newUser._id); ////////////////////////////////////////////////////
    this.callNodeService.insertUser(this.newUser).subscribe();
  }

  formValidation(){
    //////////////////////////////////
    //  Put field Validation here.  //
    //////////////////////////////////
    let theDecider = true;
    if(theDecider){
      return true;
    }else{
      return false;
    }
  }

  submitSignupForm() {
    
    if(this.formValidation()){
      this.addRecord();
    }else{

    }
  }

  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() { }

}
