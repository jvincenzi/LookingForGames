import { Component, OnInit } from '@angular/core';
import { CallNodeService } from '../call-node.service';
import { UserAcount } from '../UserAcount';
//import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-show-user-info',
  templateUrl: './show-user-info.component.html',
  styleUrls: ['./show-user-info.component.css']
})
export class ShowUserInfoComponent implements OnInit {
  myAccount: UserAcount[];
  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() {
    //this.getTasks();
    this.getUsers();
  }
  /*getTasks(): void {this.myAccount = this.callNodeService.getAllTasks();}*/
  /*
  getTasks(): void {
    //this code is to replace the code below when we get the Node server working
    this.callNodeService.getAllTasks().subscribe((userData: UserAcount[]) => {
      this.myAccount = userData;
    })
  }
  */
  
  getUsers(): void {
    //this code is to replace the code below when we get the Node server working
    this.callNodeService.getAllUsers().subscribe((userData: UserAcount[]) => {
      this.myAccount = userData;
    })
  }
  
  
/*
  getTasks(): void { // Code for local Node server
    let aDate: Date = new Date(2018, 11, 24, 10, 33, 30, 0);

    var localTaskArray: UserAcount[] = [
      {
      _id: "0001",
      FirstName: "Joseph",
      LastName: "Vincenzi",
      Email: "joe@aol.com",
      UserName: "wraith",
      Password: "****************",
      Telephone: "4256888861",
      DateOfBirth: aDate,
      Address: "3205 109th Ave SE",
      City: "Bellevue",
      State: "Washington",
      Zipcode:  98004,
      FreeAccount: false,
      SubscriptionExp: aDate,
      SubscriptionLv: 1, //level (none=0, yearly=1, monthly=12)
      CurrentStatus: "online",
      Location: "Home",
      createdOn: aDate,
      },
      {
      _id: "0002",
      FirstName: "Joseph",
      LastName: "Vincenzi",
      Email: "joe@aol.com",
      UserName: "wraith",
      Password: "****************",
      Telephone: "4256888861",
      DateOfBirth: aDate,
      Address: "3205 109th Ave SE",
      City: "Bellevue",
      State: "Washington",
      Zipcode:  98004,
      FreeAccount: true,
      SubscriptionExp: aDate,
      SubscriptionLv: 0, //level (freeAcc=0, yearly=1, monthly=12)
      CurrentStatus: "online",
      Location: "Work",
      createdOn: aDate,
      }
    ];
    this.myAccount = localTaskArray;
  }
  */

}
