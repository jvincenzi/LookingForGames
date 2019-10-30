import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {eventLog } from './eventlog/event-log';



const myRoutes: Routes = [
  {path: 'eventlog', component: eventLog},

 ];
 

 @NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
 })
 
 export class RoutingAppModule { }




// import { Component, OnInit } from '@angular/core';
// import { GAMEBOARDS } from '../List-Game';
// import { GameItem } from '../GameBoard';
// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import {eventLog} from './eventlog/event-log';

// //import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

// @Component({
//   selector: 'app-game-board',
//   templateUrl: './game-board.component.html',
//   styleUrls: ['./game-board.component.css']
// })



// export class GameBoardComponent {


//  const tiles: Tile[] = [
//     {text: 'One', cols: 1, rows: 1, color: 'lightblue', path: 'eventlog', component:eventLog},
//     {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
//     {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
//     {text: 'Four', cols: 3, rows: 1, color: '#DDBDF1'},
//   ];

// }

// @NgModule({
//   imports: [ RouterModule.forRoot(tiles) ],
//   exports: [ RouterModule ]
//  })


// export class GameBoardComponent
