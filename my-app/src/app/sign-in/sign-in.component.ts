import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Token } from '../Token';
import { CallNodeService } from '../call-node.service';
import { UserSignInData } from '../UserSignInData';
import { UserAccount } from '../UserAccount';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services';
import { first } from 'rxjs/operators';

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
  curlatitude = 40;
  curlongitude = 100;
  loading = false;
  submitted = false;
  signUpForm: FormGroup;
  returnUrl: string;


  constructor(
    private callNodeService: CallNodeService, 
    private alertService: AlertService, 
    private formBuilder: FormBuilder, 
    private router: Router,) {// private router: Router) { //, private route: ActivatedRoute
    this.sessionTokenData = new Token();
    

    //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
  }

  ngOnInit() {
    //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
    this.getLocation();

    this.signUpForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userPassword1: ['', Validators.required]
  });


  }

  submitSignin() {
    console.log(' <<<<< submitSignin() called >>>>> '); // for testing //////////////////////////////////////////////////////
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        // if (this.signUpForm.invalid) {
        //     return;
        // }

    this.loading = true;
    // Put loading code icon here ////////////////////////////////////////////////////////
    document.getElementById('errorMsgLabel').innerHTML = '<b>Please Wait...</b>';
    document.getElementById('errorMsgLabel').style.color = "red";
  
    this.providedSigninData.UserName = this.userName.value;
    this.providedSigninData.Password = this.userPassword1.value;
    //console.log( "In submitSignin(" + this.providedSigninData.UserName + ' ' + this.providedSigninData.Password + ")" );
    this.callNodeService.userLogin(this.providedSigninData)
    
    .subscribe((userData: UserAccount) => {
      history.state.sessionToken._id = userData._id;
      history.state.sessionToken.FirstName = userData.FirstName;
      history.state.sessionToken.LastName = userData.LastName;
      history.state.sessionToken.Email = userData.Email;
      history.state.sessionToken.UserName = userData.UserName;
      //history.state.sessionToken.Password = userData.Password;
      history.state.sessionToken.Telephone = userData.Telephone;
      history.state.sessionToken.DateOfBirth = userData.DateOfBirth;
      history.state.sessionToken.Address = userData.Address;
      history.state.sessionToken.Address2 = userData.Address2;
      history.state.sessionToken.City = userData.City;
      history.state.sessionToken.State = userData.State;
      history.state.sessionToken.Zipcode = userData.Zipcode;
      history.state.sessionToken.Country = userData.Country;
      history.state.sessionToken.FreeAccount = userData.FreeAccount;
      history.state.sessionToken.SubscriptionExp = userData.SubscriptionExp;
      history.state.sessionToken.SubscriptionLv = userData.SubscriptionLv;
      history.state.sessionToken.AdminAccess = userData.AdminAccess;  // might not need to get this data from mongoDB
      history.state.sessionToken.CurrentStatus = userData.CurrentStatus;
      history.state.sessionToken.Location = userData.Location;
      history.state.sessionToken.createdOn = userData.createdOn;
      history.state.sessionToken.UID = userData.UID;
      history.state.sessionToken.userLatitude = this.curlatitude; // might not need to get this data from mongoDB 
      history.state.sessionToken.userLongitude = this.curlongitude; // might not need to get this data from mongoDB 
      console.log('////////////////////////////////////////////////\r\nSign-In:\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
      
      
      this.sessionTokenData._id = userData._id;
      this.sessionTokenData.FirstName = userData.FirstName;
      this.sessionTokenData.LastName = userData.LastName;
      this.sessionTokenData.Email = userData.Email;
      this.sessionTokenData.UserName = userData.UserName;
      //this.sessionTokenData.Password = userData.Password;
      this.sessionTokenData.Telephone = userData.Telephone;
      this.sessionTokenData.DateOfBirth = userData.DateOfBirth;
      this.sessionTokenData.Address = userData.Address;
      this.sessionTokenData.Address2 = userData.Address2;
      this.sessionTokenData.City = userData.City;
      this.sessionTokenData.State = userData.State;
      this.sessionTokenData.Zipcode = userData.Zipcode;
      this.sessionTokenData.FreeAccount = userData.FreeAccount;
      this.sessionTokenData.SubscriptionExp = userData.SubscriptionExp;
      this.sessionTokenData.SubscriptionLv = userData.SubscriptionLv;
      this.sessionTokenData.AdminAccess = userData.AdminAccess;
      this.sessionTokenData.CurrentStatus = userData.CurrentStatus;
      this.sessionTokenData.Location = userData.Location;
      this.sessionTokenData.createdOn = userData.createdOn;
      this.sessionTokenData.UID = userData.UID;
      this.sessionTokenData.userLatitude = this.curlatitude;
      this.sessionTokenData.userLongitude = this.curlongitude;

      console.log('////////////////////////////////////////////////\r\nSign-In:\r\nthis.sessionTokenData _id:        ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:  ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:    ' + this.sessionTokenData.Address+'\r\nsessionTokenData.userLatitude:    ' + this.sessionTokenData.userLatitude + '\r\nsessionTokenData.userLongitude:   ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');  
      //console.log('this.curlatitude:  ' + this.curlatitude + '\r\nthis.curlongitude: ' + this.curlongitude);
      document.getElementById('errorMsgLabel').innerHTML = '';
      document.getElementById('errorMsgLabel').style.color = "black";
      console.log('/// Done logging in ... ///');
      // this.router.navigate(['/']);
      // put loading icon here ////////////////////////////////////////////////////////
      // Now move user to home page ///////////////////////////////////////////////////
      
  
      
  },
    error => {
      this.alertService.error(error);
      this.loading = false;
  });
    
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }else {
      console.log('/// Geolocation is not supported by this browser. ///:  ');
      document.getElementById('errorMsgLabel').innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  setPosition(position) {
    this.curlatitude = position.coords.latitude;
    this.curlongitude = position.coords.longitude;
    //console.log('Latitude:  ' + this.lata + '\r\nLongitude: ' + this.long);
  }

  


}


// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Token } from '../Token';
// import { CallNodeService } from '../call-node.service';
// import { UserSignInData } from '../UserSignInData';
// import { UserAccount } from '../UserAccount';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AlertService } from '../_services';
// import { first } from 'rxjs/operators';

// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.css']
// })
// export class SignInComponent implements OnInit {
  
//   providedSigninData: UserSignInData = {UserName: '', Password: ''};
//   sessionTokenData: Token;
//   userName = new FormControl('');
//   userPassword1 = new FormControl('');;
//   curlatitude = 40;
//   curlongitude = 100;
//   loginForm: FormGroup;
//   loading = false;
//     submitted = false;
//     returnUrl: string;


//   constructor(
//     private callNodeService: CallNodeService,
//     private router: Router,
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private alertService: AlertService
//     ) {// private router: Router) { //, private route: ActivatedRoute
//     this.sessionTokenData = new Token();

//     if (this.callNodeService.userLogin) {
//       this.router.navigate(['/']);

//     //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
//   }
// }

//   ngOnInit() {
//     //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
//     this.getLocation();

//     this.loginForm = this.formBuilder.group({
//       UserName: ['', Validators.required],
//       Password: ['', Validators.required]
//   });

//   // get return url from route parameters or default to '/'
//   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

//   }
//   get f() { return this.loginForm.controls; }

//   submitSignin() {
//     console.log(' <<<<< submitSignin() called >>>>> '); // for testing //////////////////////////////////////////////////////
    
//     // Put loading code icon here ////////////////////////////////////////////////////////
//     // document.getElementById('errorMsgLabel').innerHTML = '<b>Please Wait...</b>';
//     // document.getElementById('errorMsgLabel').style.color = "red";
  
//     // this.providedSigninData.UserName = this.userName.value;
//    // this.providedSigninData.Password = this.userPassword1.value;
//     //console.log( "In submitSignin(" + this.providedSigninData.UserName + ' ' + this.providedSigninData.Password + ")" );

//     this.submitted = true;

//         // reset alerts on submit
//         this.alertService.clear();

//         // stop here if form is invalid
//         if (this.loginForm.invalid) {
//             return;
//         }

//     this.callNodeService.userLogin(this.providedSigninData)
//     .pipe(first())
//     .subscribe((userData: UserAccount) => {
//       history.state.sessionToken._id = userData._id;
//       history.state.sessionToken.FirstName = userData.FirstName;
//       history.state.sessionToken.LastName = userData.LastName;
//       history.state.sessionToken.Email = userData.Email;
//       history.state.sessionToken.UserName = userData.UserName;
//       //history.state.sessionToken.Password = userData.Password;
//       history.state.sessionToken.Telephone = userData.Telephone;
//       history.state.sessionToken.DateOfBirth = userData.DateOfBirth;
//       history.state.sessionToken.Address = userData.Address;
//       history.state.sessionToken.Address2 = userData.Address2;
//       history.state.sessionToken.City = userData.City;
//       history.state.sessionToken.State = userData.State;
//       history.state.sessionToken.Zipcode = userData.Zipcode;
//       history.state.sessionToken.Country = userData.Country;
//       history.state.sessionToken.FreeAccount = userData.FreeAccount;
//       history.state.sessionToken.SubscriptionExp = userData.SubscriptionExp;
//       history.state.sessionToken.SubscriptionLv = userData.SubscriptionLv;
//       history.state.sessionToken.AdminAccess = userData.AdminAccess;  // might not need to get this data from mongoDB
//       history.state.sessionToken.CurrentStatus = userData.CurrentStatus;
//       history.state.sessionToken.Location = userData.Location;
//       history.state.sessionToken.createdOn = userData.createdOn;
//       history.state.sessionToken.UID = userData.UID;
//       history.state.sessionToken.userLatitude = this.curlatitude; // might not need to get this data from mongoDB 
//       history.state.sessionToken.userLongitude = this.curlongitude; // might not need to get this data from mongoDB 
//       console.log('////////////////////////////////////////////////\r\nSign-In:\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
      
      
//       this.sessionTokenData._id = userData._id;
//       this.sessionTokenData.FirstName = userData.FirstName;
//       this.sessionTokenData.LastName = userData.LastName;
//       this.sessionTokenData.Email = userData.Email;
//       this.sessionTokenData.UserName = userData.UserName;
//       //this.sessionTokenData.Password = userData.Password;
//       this.sessionTokenData.Telephone = userData.Telephone;
//       this.sessionTokenData.DateOfBirth = userData.DateOfBirth;
//       this.sessionTokenData.Address = userData.Address;
//       this.sessionTokenData.Address2 = userData.Address2;
//       this.sessionTokenData.City = userData.City;
//       this.sessionTokenData.State = userData.State;
//       this.sessionTokenData.Zipcode = userData.Zipcode;
//       this.sessionTokenData.FreeAccount = userData.FreeAccount;
//       this.sessionTokenData.SubscriptionExp = userData.SubscriptionExp;
//       this.sessionTokenData.SubscriptionLv = userData.SubscriptionLv;
//       this.sessionTokenData.AdminAccess = userData.AdminAccess;
//       this.sessionTokenData.CurrentStatus = userData.CurrentStatus;
//       this.sessionTokenData.Location = userData.Location;
//       this.sessionTokenData.createdOn = userData.createdOn;
//       this.sessionTokenData.UID = userData.UID;
//       this.sessionTokenData.userLatitude = this.curlatitude;
//       this.sessionTokenData.userLongitude = this.curlongitude;


//       console.log('////////////////////////////////////////////////\r\nSign-In:\r\nthis.sessionTokenData _id:        ' + this.sessionTokenData._id + '\r\nthis.sessionTokenData FirstName:  ' + this.sessionTokenData.FirstName + '\r\nthis.sessionTokenData Address:    ' + this.sessionTokenData.Address+'\r\nsessionTokenData.userLatitude:    ' + this.sessionTokenData.userLatitude + '\r\nsessionTokenData.userLongitude:   ' + this.sessionTokenData.userLongitude + '\r\n////////////////////////////////////////////////');  
//       //console.log('this.curlatitude:  ' + this.curlatitude + '\r\nthis.curlongitude: ' + this.curlongitude);
//       document.getElementById('errorMsgLabel').innerHTML = '';
//       document.getElementById('errorMsgLabel').style.color = "black";
//       console.log('/// Done logging in ... ///');
//       // this.router.navigate(['/']);
//       // put loading icon here ////////////////////////////////////////////////////////
//       // Now move user to home page ///////////////////////////////////////////////////
//       this.router.navigate([this.returnUrl]);
//     },
//     error => {
//         this.alertService.error(error);
//         this.loading = false;
//     })
   
    
//   }

//   getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
//     }else {
//       console.log('/// Geolocation is not supported by this browser. ///:  ');
//       document.getElementById('errorMsgLabel').innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
//   setPosition(position) {
//     this.curlatitude = position.coords.latitude;
//     this.curlongitude = position.coords.longitude;
//     //console.log('Latitude:  ' + this.lata + '\r\nLongitude: ' + this.long);
//   }

  


// }