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
  //sessionToken: Token;
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
      
      ///document.getElementById('errorMsgLabel').innerHTML = userData.message.toString();
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
      console.log("sessionToken FirstName: " + history.state.sessionToken.FirstName);

      //this.sessionToken = userData;
      //console.log("sessionToken LastName: " + this.sessionToken.LastName);



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

  

  constructor(private callNodeService: CallNodeService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('in sign-in.component');
    console.log('////////////////////////////////////////////////');
    
    console.log('history.state.sessionToken.FirstName: '+history.state.sessionToken.FirstName);
    console.log('Modifyinf FirstName  = Bye Bye ...');
    history.state.sessionToken.FirstName = "Bye Bye ...";
    
    console.log('history.state.sessionToken.FirstName: ' + history.state.sessionToken.FirstName);

    console.log('////////////////////////////////////////////////');
  }


}
