import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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

  submitSignupForm() {
    this.eMailAddress.setValue('sonoojaiswal@javatpoint.com');
  }

  //constructor(private formBuilder: FormBuilder) { }
  constructor() { }

  ngOnInit() { }

}
