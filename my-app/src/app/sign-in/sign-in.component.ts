import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Token } from '../Token';
import { CallNodeService } from '../call-node.service';
import { UserSignInData } from '../UserSignInData';
import { UserAccount } from '../UserAccount';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  providedSigninData: UserSignInData = {UserName: '', Password: ''};
  sessionTokenData: Token;
  userName = new FormControl('');
  userPassword1 = new FormControl('');;
  
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
      
      //document.getElementById('errorMsgLabel').innerHTML = userData.message.toString();
      //console.log( userData );

      history.state.sessionToken._id = userData._id;
      history.state.sessionToken.FirstName = userData.FirstName;
      history.state.sessionToken.LastName = userData.LastName;
      history.state.sessionToken.Email = userData.Email;
      history.state.sessionToken.UserName = userData.UserName;
      //history.state.sessionToken.Password = userData.;
      history.state.sessionToken.Telephone = userData.Telephone;
      history.state.sessionToken.DateOfBirth = userData.DateOfBirth;
      history.state.sessionToken.Address = userData.Address;
      history.state.sessionToken.City = userData.City;
      history.state.sessionToken.State = userData.State;
      history.state.sessionToken.Zipcode = userData.Zipcode;
      history.state.sessionToken.FreeAccount = userData.FreeAccount;
      history.state.sessionToken.SubscriptionExp = userData.SubscriptionExp;
      history.state.sessionToken.SubscriptionLv = userData.SubscriptionLv;
      history.state.sessionToken.AdminAccess = userData.AdminAccess;
      history.state.sessionToken.CurrentStatus = userData.CurrentStatus;
      history.state.sessionToken.Location = userData.Location;
      history.state.sessionToken.createdOn = userData.createdOn;
      history.state.sessionToken.UID = userData.UID;
      //console.log("sessionToken _id:       " + history.state.sessionToken._id);
      //console.log("sessionToken FirstName: " + history.state.sessionToken.FirstName);
      //console.log("sessionToken Address:   " + history.state.sessionToken.Address);
    })
    
  } 

  

  constructor(private callNodeService: CallNodeService, private route: ActivatedRoute) {
    
    this.sessionTokenData = new Token();
    this.sessionTokenData._id = ''
    this.sessionTokenData.FirstName = '';
    this.sessionTokenData.LastName = '';
    this.sessionTokenData.Email = '';
    this.sessionTokenData.UserName = '';
    this.sessionTokenData.Password = '';
    this.sessionTokenData.Telephone = '';
    this.sessionTokenData.DateOfBirth = null;
    this.sessionTokenData.Address = '';
    this.sessionTokenData.City = '';
    this.sessionTokenData.State = '';
    this.sessionTokenData.Zipcode = 0;
    this.sessionTokenData.FreeAccount = true;
    this.sessionTokenData.SubscriptionExp = null;
    this.sessionTokenData.SubscriptionLv = 0;
    this.sessionTokenData.AdminAccess = '';
    this.sessionTokenData.CurrentStatus = '';
    this.sessionTokenData.Location = '';
    this.sessionTokenData.createdOn = '';
    this.sessionTokenData.UID = '';
  
  }

  ngOnInit() {
    /*
    console.log('////////////////////////////////////////////////\r\nin sign-in.component\r\nhistory.state.sessionToken.FirstName: '+history.state.sessionToken.FirstName);
    history.state.sessionToken.FirstName = "Bye Bye ...";
    console.log('Modifyinf FirstName  = Bye Bye ...'+'\r\nhistory.state.sessionToken.FirstName: ' + history.state.sessionToken.FirstName+'\r\n////////////////////////////////////////////////');
    */


  }


}
