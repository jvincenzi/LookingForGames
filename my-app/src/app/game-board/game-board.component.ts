import { Component, OnInit } from '@angular/core';
import { Token } from '../Token';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {

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