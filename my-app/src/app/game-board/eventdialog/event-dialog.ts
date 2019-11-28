import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CallNodeService } from '../../call-node.service';
import { CommentItem } from '../../Comment';
import {UserAccount } from '../../UserAccount'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Token } from '../../Token';


@Component({
  selector: 'event-dialog',
  templateUrl: './event-dialog.html',
  styleUrls: ['./event-dialog.css']
})


export class eventDialog implements OnInit{

//comment codes
  newComment: CommentItem = new CommentItem();
  _id = new FormControl('');
  Name = new FormControl('');
  Comment = new FormControl('');
  date = new FormControl('');

  //getting user inf
  User: UserAccount[];
  selectedUser: UserAccount;
  sessionTokenData: Token;
  hideUserList: Boolean = false;
  tempUser: UserAccount = new UserAccount();

  


  firstName = new FormControl('', [
    Validators.required, 
    Validators.minLength(2), 
    Validators.maxLength(32),
    Validators.pattern('[a-zA-Z ]*')
  ])
  onSelect(PassedInUser: UserAccount): void {
    this.selectedUser = PassedInUser;
  }

  getUser(id: string): void {
    this.callNodeService.getUser(id).subscribe((userData: UserAccount) => {
      this.tempUser = userData;
      console.log('/// userData._id: ' + userData._id + ' ///' );
      this.firstName.setValue(userData.FirstName.toString());      
      
    })
  }

 

  addRecord(): void {

    this.newComment._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newComment.Name = this.Name.value;
    this.newComment.Comment = this.Name.value;
    this.newComment.Date = this.date.value;
    
  

    this.callNodeService.insertComment(this.newComment).subscribe();
  }

  submitCommentForm() {
    //////////////////////////////////
    // Put field verification here. //
    //////////////////////////////////
    
    this.addRecord();
  }

  //constructor(private formBuilder: FormBuilder) { }
  constructor(private callNodeService: CallNodeService, private router: Router, private http: HttpClient) { }

  ngOnInit() { 

    console.log('/// ngOnInit - history.state.sessionToken._id: ' + history.state.sessionToken._id  + ' ///');
    this.getUser(history.state.sessionToken._id);
    //this.getUsers(); // OLD
    console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id +"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName +"\r\nsessionToken Address:   " + history.state.sessionToken.Address +'\r\n////////////////////////////////////////////////');

}

}