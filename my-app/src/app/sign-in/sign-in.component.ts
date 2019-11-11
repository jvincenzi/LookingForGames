import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Token } from '../Token';
import { CallNodeService } from '../call-node.service';
import { UserSignInData } from '../UserSignInData';
import { UserAccount } from '../UserAccount';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  providedSigninData: UserSignInData = {UserName: '', Password: ''};

  userName = new FormControl('');
  userPassword1 = new FormControl('');
  
  submitSignin() {
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
    this.providedSigninData.UserName = this.userName.value;
    this.providedSigninData.Password = this.userPassword1.value;
    //console.log( "In submitSignin(" + this.providedSigninData.UserName + ' ' + this.providedSigninData.Password + ")" );
    this.callNodeService.userLogin(this.providedSigninData).subscribe((userData: UserAccount) => {
      
      ///document.getElementById('errorMsgLabel').innerHTML = userData.message.toString();
      //console.log( userData );
      let userToken: Token = new Token();
      userToken = userData;
      console.log("myToken: " + userToken.FirstName);
      //@Input() sessionToken: userData;




      /*
      this.newUser = userData;
      //this.myAccount.push(userData);
      this.firstName.setValue(userData.FirstName.toString());      
      this.lastName.setValue(userData.LastName.toString());
      this.eMailAddress.setValue(userData.Email.toString());
      this.userName.setValue(userData.UserName.toString());
      this.userPassword1.setValue(userData.Password.toString());
      this.userTelephone.setValue(userData.Telephone.toString());

      //console.log("date: " + userData.DateOfBirth);
      //this.userDOB.setValue(this.gogo); // Broken: not sure how to set the default date

      this.userStreetAddress.setValue(userData.Address.toString());
      this.userCity.setValue(userData.City.toString());
      this.userState.setValue(userData.State.toString());
      this.userZipCode.setValue(userData.Zipcode.toString());
      */
    })
    //this.one = this.providedSigninData.UserName.toString();
    //this.two = this.providedSigninData.Password.toString();
  } 

  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() {
  }


}
