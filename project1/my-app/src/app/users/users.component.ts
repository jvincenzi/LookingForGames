import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { USERLIST } from '../User-list';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    
  TheUsers = USERLIST

  selectedUsers: Users;

  onSelect(PassedInUsers: Users): void {
    this.selectedUsers = PassedInUsers;
  }

  constructor() { }

  ngOnInit() {
  }

}
