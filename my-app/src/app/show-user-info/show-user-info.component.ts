import { Component, OnInit } from '@angular/core';
import { CallNodeService } from '../call-node.service';
import { UserAccount } from '../UserAccount';

@Component({
  selector: 'app-show-user-info',
  templateUrl: './show-user-info.component.html',
  styleUrls: ['./show-user-info.component.css']
})
export class ShowUserInfoComponent implements OnInit {
  myAccount: UserAccount[];
  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() {
    //this.getUser();
    this.getUsers();
  }
  
  

 1572742189150
  
  getUsers(): void {
    this.callNodeService.getAllUsers().subscribe((userData: UserAccount[]) => {
      this.myAccount = userData;
    })
  }
  /*
  getUser(): void {
    this.callNodeService.getUser("1572742189150").subscribe((userData: UserAccount[]) => {
      this.myAccount = userData;
    })
  }
  */
  /*
  deleteUser(): void {
    this.callNodeService.deleteUser( this.selectedTask).subscribe();
    this.callNodeService.deleteUser( this.selectedUser).subscribe();
  }

  addRecord(): void {
    this.myAccount._id = (new Date().valueOf()).toString();  // fairly safe random number
    // if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.callNodeService.insertUser( this.myAccount).subscribe();
  }

  updateRecord(): void {
    this.callNodeService.updateUser( this.selectedTask).subscribe();
    this.callNodeService.updateUser( this.selectedUser).subscribe();
    console.log("time to refresh");
   
    //#### this.router.navigate(['/update-book', id]);   passing a value
    // need to clear slected task so that page doesn't draw that HTML segment
    this.selectedTask = null;
    this.router.navigate(['/tasks']); 
  }
*/

  /*
  getTasks(): void {
    //this code is to replace the code below when we get the Node server working
    this.callNodeService.getAllTasks().subscribe((userData: UserAcount[]) => {
      this.myAccount = userData;
    })
  }
  */
  /*
  getUsers(): void { // Code for MOCK Node server
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



  
  
  
  

  
  



