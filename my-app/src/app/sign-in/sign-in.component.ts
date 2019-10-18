import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';  // new

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  userName = new FormControl('');    // new
  userPassword1 = new FormControl('');    // new
  
  
  submitSignin() {    // new
    this.userName.setValue('It\'s working');    // new
  } 

  constructor() { }

  ngOnInit() {
  }

}
