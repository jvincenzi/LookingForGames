import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {

  //sessionTokenData: Token;

  constructor() { 
    console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Search Selection:   " + history.state.sessionToken.Location+'\r\n////////////////////////////////////////////////');
    //console.log(' //// searchSelection: ' + history.state.searchSelection.selectionData); // searchSelection: selectionData
    
  }

  ngOnInit() {
    console.log('////////////////////////////////////////////////\r\nsessionToken _id:       ' + history.state.sessionToken._id+"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nsessionToken Search Selection:   " + history.state.sessionToken.Location+'\r\n////////////////////////////////////////////////');

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

 