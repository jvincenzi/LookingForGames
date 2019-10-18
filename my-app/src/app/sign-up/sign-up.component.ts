import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';  // new

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstName = new FormControl('');    // new
  lastName = new FormControl('');    // new
  eMailAddress = new FormControl('');    // new
  userName = new FormControl('');    // new
  userPassword1 = new FormControl('');    // new
  userTelephone = new FormControl('');    // new
  userDOB = new FormControl('');    // new
  userStreetAddress = new FormControl('');    // new
  userCity = new FormControl('');    // new
  userState = new FormControl('');    // new
  userZipCode = new FormControl('');    // new
  userFreeAcc = new FormControl('');    // new
  

  submitSignupForm() {    // new
    this.eMailAddress.setValue('sonoojaiswal@javatpoint.com');    // new
  }    // new

  //constructor(private formBuilder: FormBuilder) { }
  constructor() { }

  ngOnInit() { }

}
