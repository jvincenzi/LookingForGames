import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CallNodeService } from '../../call-node.service'
import { Router } from '@angular/router';
import { Users } from './User';
import {UserAccount } from '../../UserAccount'
import { HttpClient } from '@angular/common/http';
import { userFeedBackData } from './userFeedBackData';
import { Token } from '../../Token';
import { FeedBackItem } from './FeedBack';
import { userCommentData } from '../eventdialog/userCommentData';

@Component({
  selector: 'event-log',
  templateUrl: './event-log.html',
  styleUrls: ['./event-log.css']
})



export class eventLog implements OnInit{

  //providedCommentData: userCommentData ={_id: '',firstName:'', Comment: ''};
  providedCommentData2: userCommentData ={_id: '',Users_id: '',UserName:'', Comment: ''};
  newFeedBack: FeedBackItem;
  private api = 'Admin@LookForGame.com';
  callNodeService: any;

  public sendEmail(body: UserAccount) {
    return this.http.post(`${this.api}/sendEmail`, body);
  }

  User: Users[];

  selectedUser: Users;
  tempUser: UserAccount = new UserAccount();
  tempCom: FeedBackItem = new FeedBackItem();
  sessionTokenData: Token;


  getUser(): void {
    this.myUsers.getAllUsers().subscribe((userData: Users[]) => {
      this.User = userData;
      
    })
  }
  Email = new FormControl('', [
    Validators.required, 
    Validators.minLength(2), 
    Validators.maxLength(32),
    Validators.pattern('[a-zA-Z ]*')
  ]);

  Comment = new FormControl('', [
    Validators.required, 
    Validators.minLength(2), 
    Validators.maxLength(500),
    Validators.pattern('[a-zA-Z-1-99 ]*')
  ]);
  
  /*
  addRecord(): void {
    let nowDate: Date = new Date();
    let expDate: Date = new Date(
      nowDate.getFullYear()+1, 
      nowDate.getMonth(),
      nowDate.getDate()
    );

    this.newFeedBack._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newFeedBack.Email = this.Email.value;
    this.newFeedBack.Comment = this.Comment.value;
    console.log('////////////////////////////////////////////////////\r\nUser info submitted, id: ' + 
    this.newFeedBack._id + '\r\n////////////////////////////////////////////////////'); ////////////////////////////////////////////////////

  
    this.myUsers.insertComment(this.newFeedBack).subscribe(); // <------------------<<<<<<  this is broken 
  }
  */

  submitComment(){
    ////////////////////////////////////////////////////////////
    //   This code works to wright a new comment to MongoDB   //
    ////////////////////////////////////////////////////////////
    this.providedCommentData2._id = (new Date().valueOf()).toString();
    this.providedCommentData2.Users_id = history.state.sessionToken._id;
    this.providedCommentData2.UserName = history.state.sessionToken.UserName;
    this.providedCommentData2.Comment = this.Comment.value;
    console.log(' <<<<< submit Comment() called >>>>> ');
    this.callNodeService.insertComment(this.providedCommentData2).subscribe((userComment: userCommentData) => {
      document.getElementById('CommentMsg').innerHTML = 'Your message has been submitted';
    });
  }

  submitFeedBack() {
  
    if(this.formValidation()){
      //this.addRecord();
      this.submitComment();

    }else{
      document.getElementById('errorMsgLabel').innerHTML = "An error occurred see above";
    }
  }

  formValidation(){
    if( 
      this.Email.errors == null &&
      this.Comment.errors == null 
     ) {
      return true;
    }else {
      if(false) { // Show error output for fields
        console.log('///////////////////////////////////////////////');
        console.log('All should return null if their were no errors.');
        console.log('Email.errors:      -    ' + this.Email.errors);
        console.log('Comment.errors:      ' + this.Comment.errors)
      }
      if (this.Email.errors != null ) {
        document.getElementById('EmailErr').innerHTML = 'Must be between 2 to 15 chareters long';
        document.getElementById('EmailLbl').style.color = "red";
      }
      if (this.Comment.errors != null) {
        document.getElementById('CommentErr').innerHTML = 'Must be between 8 to 500 chareters long<br />and have Lowercase and Uppercase<br />letters Numbers and Special characters';
        document.getElementById('CommentLbl').style.color = "red";
      } 

      return false;
    }
  }

  onSelect(PassedInUser: Users): void {
    this.selectedUser = PassedInUser;
  }
 


  constructor(private myUsers: CallNodeService, private router: Router, private http: HttpClient) {
    this.newFeedBack = new FeedBackItem();
    this.sessionTokenData = new  Token();
   }
  ngOnInit() {
    this.getUser();
  }



 
}