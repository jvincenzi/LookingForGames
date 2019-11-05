import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { UserAccount } from '../UserAccount';

@Component({
  selector: 'app-modify-user-info',
  templateUrl: './modify-user-info.component.html',
  styleUrls: ['./modify-user-info.component.css']
})
export class ModifyUserInfoComponent implements OnInit {

  newUser: UserAccount = new UserAccount();

  firstName = new FormControl('');
  lastName = new FormControl('');
  eMailAddress = new FormControl('');
  userName = new FormControl('');
  userPassword1 = new FormControl('');
  userPassword2 = new FormControl('');
  userTelephone = new FormControl('');
  userDOB = new FormControl('');
  userStreetAddress = new FormControl('');
  userCity = new FormControl('');
  userState = new FormControl('');
  userZipCode = new FormControl('');
  userFreeAcc = new FormControl('');
  

  addRecord(): void {
    
    // The DateTime stamp should be server side
    //let nowDate: Date = new Date();
    //let expDate: Date = new Date(
      //nowDate.getFullYear()+1, 
      //nowDate.getMonth(), // BUG: this dosn't enter/display the month or hour properly
      //nowDate.getDate(), 
      //nowDate.getHours(), // BUG: this dosn't enter/display the month or hour properly
      //nowDate.getMinutes(), 
      //nowDate.getSeconds(),
      //0
    //);

    //this.newUser._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newUser.FirstName = this.firstName.value;
    this.newUser.LastName = this.lastName.value;
    this.newUser.Email = this.eMailAddress.value;
    this.newUser.UserName = this.userName.value;
    this.newUser.Password = this.userPassword1.value;
    this.newUser.Telephone = this.userTelephone.value;
    this.newUser.DateOfBirth = this.userDOB.value;
    this.newUser.Address = this.userStreetAddress.value;
    this.newUser.City = this.userCity.value;
    this.newUser.State = this.userState.value;
    this.newUser.Zipcode = this.userZipCode.value;
    this.newUser.FreeAccount = false;
    //this.newUser.SubscriptionExp = expDate; // BUG: this dosn't enter/display the month or hour properly
    //this.newUser.SubscriptionLv = 1;
    //this.newUser.CurrentStatus = "online";
    //this.newUser.Location = "unknown";
    //this.newUser.createdOn = nowDate.toString(); 

    //this.callNodeService.insertUser(this.newUser).subscribe();
    this.callNodeService.updateUser(this.newUser).subscribe();
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
