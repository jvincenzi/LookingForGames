import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { UserAccount } from '../UserAccount';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser: UserAccount = new UserAccount();

  firstName = new FormControl('');
  lastName = new FormControl('');
  eMailAddress = new FormControl('');
  userName = new FormControl('');
  userPassword1 = new FormControl('');
  userTelephone = new FormControl('');
  userDOB = new FormControl('');
  userStreetAddress = new FormControl('');
  userCity = new FormControl('');
  userState = new FormControl('');
  userZipCode = new FormControl('');
  userFreeAcc = new FormControl('');
  userPassword2 = new FormControl('');

  addRecord(): void {
    this.newUser._id = (new Date().valueOf()).toString();  // fairly safe random number
    // if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newUser.FirstName = this.firstName.value;
    this.newUser.LastName = this.lastName.value;

    this.callNodeService.insertUser( this.newUser).subscribe();
  }

  submitSignupForm() {
    //this.eMailAddress.setValue('sonoojaiswal@javatpoint.com');
    this.addRecord();
  }

  //constructor(private formBuilder: FormBuilder) { }
  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() { }

}
