import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //userForm;

  //constructor(private formBuilder: FormBuilder) { }
  constructor() { }

  ngOnInit() {
    /*
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      eMailAddress: [''],
      userName: [''],
      userPassword1: [''],
      userTelephone: [''],
      userDOB: [''],
      userStreetAddress: [''],
      userCity: [''],
      userState: [''],
      userZipCode: ['']
    });
    */
  }

}
