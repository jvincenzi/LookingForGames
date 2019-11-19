import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CallNodeService } from '../../call-node.service'
import { Router } from '@angular/router';
import { Users } from './User';
import {UserAccount } from '../../UserAccount'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'event-log',
  templateUrl: './event-log.html',
  styleUrls: ['./event-log.css']
})



export class eventLog implements OnInit{

  private api = 'Admin@LookForGame.com';

  public sendEmail(body: UserAccount) {
    return this.http.post(`${this.api}/sendEmail`, body);
  }

  User: Users[];

  selectedUser: Users;

  getUser(): void {
    this.myUsers.getAllUsers().subscribe((userData: Users[]) => {
      this.User = userData;
    })
  }

  onSelect(PassedInUser: Users): void {
    this.selectedUser = PassedInUser;
  }
 


  constructor(private myUsers: CallNodeService, private router: Router, private http: HttpClient) { }
  ngOnInit() {
    this.getUser();
  }



  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

 
}