import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CallNodeService } from '../../call-node.service';
import { CommentItems } from './Comment';
import {UserAccount } from '../../UserAccount'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { userCommentData } from './userCommentData';

import { Token } from '../../Token';


@Component({
  selector: 'event-dialog',
  templateUrl: './event-dialog.html',
  styleUrls: ['./event-dialog.css']
})


export class eventDialog implements OnInit{

//comment codes
providedCommentData: userCommentData ={_id: '',firstName:'', Comment: ''};
  newComment: CommentItems;


  //getting user inf
  User: UserAccount[];
  selectedUser: UserAccount;
  sessionTokenData: Token;
  hideUserList: Boolean = false;
  tempUser: UserAccount = new UserAccount();
  tempCom: CommentItems = new CommentItems();

  


  firstName = new FormControl('', [
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


  onSelect(PassedInUser: UserAccount): void {
    this.selectedUser = PassedInUser;
  }

  getComment(commentID: string): void {
    this.callNodeService.getComment(commentID).subscribe((userComment: CommentItems) => {
      this.tempCom = userComment;
      console.log('/// userComment._id: ' +userComment._id + ' ///');
      this.Comment.setValue(userComment.Comment.toString());
    })

  }

  getUser(id: string): void {
    this.callNodeService.getUser(id).subscribe((userData: UserAccount) => {
      this.tempUser = userData;
      console.log('/// userData._id: ' + userData._id + ' ///' );
      this.firstName.setValue(userData.FirstName.toString());      
      
    })
  }



 

  addRecord(): void {
    let nowDate: Date = new Date();
    let expDate: Date = new Date(
      nowDate.getFullYear()+1, 
      nowDate.getMonth(),
      nowDate.getDate()
    );

    this.newComment._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newComment.firstName = this.firstName.value;
    this.newComment.Comment = this.Comment.value;
    console.log('////////////////////////////////////////////////////\r\nUser info submitted, id: ' + 
    this.newComment._id + '\r\n////////////////////////////////////////////////////'); ////////////////////////////////////////////////////

  
    this.callNodeService.insertComment(this.newComment).subscribe();
  }

  submitComment(){
    console.log(' <<<<< submit Comment() called >>>>> '); // for testing //////////////////////////////////////////////////////
    this.providedCommentData.firstName = this.newComment.firstName;
    this.providedCommentData.Comment = this.newComment.Comment;
    this.callNodeService.insertComment(this.providedCommentData)
    .subscribe((userComment: CommentItems) => {
      
      history.state.sessionToken._id = userComment._id;
      history.state.sessionToken.firstName = userComment.firstName;
      history.state.sessionToken.Comment = userComment.Comment;


      this.sessionTokenData._id = userComment._id;
      this.sessionTokenData.FirstName = userComment.firstName;
      this.sessionTokenData.LastName = userComment.Comment;

  })
  }

  submitCommentForm() {
    //////////////////////////////////
    // Put field verification here. //
    //////////////////////////////////
  
    if(this.formValidation()){
      this.addRecord();
      this.submitComment();

    }else{
      document.getElementById('errorMsgLabel').innerHTML = "An error occurred see above";
    }
  }

  formValidation(){
    if( 
      this.firstName.errors == null &&
      this.Comment.errors == null 
     ) {
      return true;
    }else {
      if(false) { // Show error output for fields
        console.log('///////////////////////////////////////////////');
        console.log('All should return null if their were no errors.');
        console.log('firstName.errors:      -    ' + this.firstName.errors);
        console.log('Comment.errors:      ' + this.Comment.errors)
      }
      if (this.firstName.errors != null ) {
        document.getElementById('firstNameErr').innerHTML = 'Must be between 2 to 15 chareters long';
        document.getElementById('firstNameLbl').style.color = "red";
      }
      if (this.Comment.errors != null) {
        document.getElementById('CommentErr').innerHTML = 'Must be between 8 to 500 chareters long<br />and have Lowercase and Uppercase<br />letters Numbers and Special characters';
        document.getElementById('CommentLbl').style.color = "red";
      } 

      return false;
    }
  }
  
  clearErrMsgs() {
    document.getElementById('errorMsgLabel').innerHTML = '* Required field';
    document.getElementById('firstErr').innerHTML = '';
    document.getElementById('CommentErr').innerHTML = '';
  }
  constructor(
    private callNodeService: CallNodeService, 
    private router: Router, 
    private http: HttpClient) 
    {
      this.newComment = new CommentItems();
      this.sessionTokenData = new  Token();
     }

ngOnInit() { 

  console.log('/// ngOnInit - history.state.sessionToken._id: ' + 
  history.state.sessionToken._id  + ' ///');
  this.getUser(
    history.state.sessionToken._id);
  console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + 
  history.state.sessionToken._id +"\r\nsessionToken FirstName: " + 
  history.state.sessionToken.FirstName +"\r\nsessionToken Address:   " + 
  history.state.sessionToken.Address +'\r\n////////////////////////////////////////////////');
}
}