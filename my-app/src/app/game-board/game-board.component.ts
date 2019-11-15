<<<<<<< HEAD
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { UserAccount } from '../UserAccount';
import { UserService, AuthenticationService } from '../_services';
=======
import { Component, OnInit } from '@angular/core';
import { Token } from '../Token';
>>>>>>> d018ccb6d4419545cb84f52a2b0e218853b56480


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {

<<<<<<< HEAD
  currentUser: UserAccount;
    currentUserSubscription: Subscription;
    users: UserAccount[] = [];


    constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit() {
      this.loadAllUsers();
=======
  //sessionTokenData: Token;

  constructor() { 
    /*
    this.sessionTokenData = new Token();
    this.sessionTokenData._id = ''
    this.sessionTokenData.FirstName = 'Joe Was Here!';
    this.sessionTokenData.LastName = '';
    this.sessionTokenData.Email = '';
    this.sessionTokenData.UserName = '';
    this.sessionTokenData.Password = '';
    this.sessionTokenData.Telephone = '';
    this.sessionTokenData.DateOfBirth = null;
    this.sessionTokenData.Address = '';
    this.sessionTokenData.City = '';
    this.sessionTokenData.State = '';
    this.sessionTokenData.Zipcode = 0;
    this.sessionTokenData.FreeAccount = true;
    this.sessionTokenData.SubscriptionExp = null;
    this.sessionTokenData.SubscriptionLv = 0;
    this.sessionTokenData.AdminAccess = '';
    this.sessionTokenData.CurrentStatus = '';
    this.sessionTokenData.Location = '';
    this.sessionTokenData.createdOn = '';
    this.sessionTokenData.UID = '';
    */
    console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
    
  }

  ngOnInit() {
    //console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Address:   " + history.state.sessionToken.Address+'\r\n////////////////////////////////////////////////');
>>>>>>> d018ccb6d4419545cb84f52a2b0e218853b56480
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }

  // deleteUser(id: number) {
  //     this.userService.delete(id).pipe(first()).subscribe(() => {
  //         this.loadAllUsers()
  //     });
  // }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }
}



// import { GAMEBOARDS } from '../List-Game';
// import { GameItem } from '../GameBoard';

// //import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



// @Component({
//   selector: 'app-game-board',
//   templateUrl: './game-board.component.html',
//   styleUrls: ['./game-board.component.css']
// })



// export class GameBoardComponent implements OnInit {


//   TheGames = GAMEBOARDS;


//   gameNames= ["Dungeons and Dragons", "Pathfinder", "Monopoly"];
 
//   selectedGameItem: GameItem;
 
//   onSelect(PassedInGameItem: GameItem): void {
//     this.selectedGameItem = PassedInGameItem;
//   }

//     constructor() { }

//   ngOnInit() {
//   }

 
// }