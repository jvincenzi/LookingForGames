import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CallNodeService } from '../../call-node.service'
import { Router } from '@angular/router';
import { User } from './User';

@Component({
  selector: 'event-log',
  templateUrl: './event-log.html',
  styleUrls: ['./event-log.css']
})



export class eventLog implements OnInit{

  User: User[];

  selectedUser: User;

  getUser(): void {
    this.myUsers.getAllUsers().subscribe((userData: User[]) => {
      this.User = userData;
    })
  }

  onSelect(PassedInUser: User): void {
    this.selectedUser = PassedInUser;
  }
 


  constructor(private myUsers: CallNodeService, private router: Router) { }
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