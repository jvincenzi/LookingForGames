import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Token } from '../Token';

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
    /*
    1. Create routes for sign-in (sign-in/:userName, password)
    2. Add import { Token } from '../Token'; to 
    3. Pass username & password to new route
    4. Mongo validates the passes username & password
    5. Wait for mongo return 
        if - Mongo returns a token all is well, go to home page as signed-in user and update Token.ts with token data
        else - output a message to a label:
          - username not found
          - password incorrect
    

       
    */
 
   
  } 

  constructor() { }

  ngOnInit() {
  }

}
