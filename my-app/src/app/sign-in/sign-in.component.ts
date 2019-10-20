import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  userName = new FormControl('');
  userPassword1 = new FormControl('');
  
  
  submitSignin() {
    this.userName.setValue('It\'s working');
  } 

  constructor() { }

  ngOnInit() {
  }

}
