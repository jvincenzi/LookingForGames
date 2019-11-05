import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { CallNodeService } from '../../call-node.service'
import { Router } from '@angular/router';
import { GameEvent } from './GameEvent';
// export interface GameEventRender {

  
//   Games: string;
//   position: number;
//   Location: string;
//   Users: string;
// }

 //const ELEMENT_DATA: GameEventRender[];
  // {position: 1, Games: 'Dungeon of Dragon', Location: 'Bellevue', Users: 'H'},
  // {position: 2, Games: 'PathFinder', Location: 'Bellevue, Seattle', Users: 'He'},
  // {position: 3, Games: 'Monopoly', Location: 'Seattle', Users: 'Li'},
  @Component({
    selector: 'event-render',
    styleUrls: ['event-render.css'],
    templateUrl: 'event-render.html',
  })


  export class eventRender implements OnInit {

    

   ourGame: GameEvent[];

  selectedGame: GameEvent;

  getGames(): void {
    this.myGameEvent.getAllGames().subscribe((gameData: GameEvent[]) => {
      this.ourGame = gameData;
      return gameData;
    })
  }

  onSelect(PassedInGameItem: GameEvent): void {
    this.selectedGame = PassedInGameItem;
  }
 


  constructor(private myGameEvent: CallNodeService, private router: Router) { }
  ngOnInit() {
    this.getGames();
  }

}

// /**
//  * @title Basic CDK data-table
//  */

// export class eventRender {
//   displayedColumns: string[] = ['Title'];
//   dataSource = new ExampleDataSource();
// }

// export class ExampleDataSource extends DataSource<GameEventRender> {
//     /** Stream of data that is provided to the table. */
//     data = new BehaviorSubject<GameEventRender[]>(Game);
  
//     /** Connect function called by the table to retrieve one stream containing the data to render. */
//     connect(): Observable<GameEventRender[]> {
//       return this.data;
//     }
  
//     disconnect() {}
//   }

// import {DataSource} from '@angular/cdk/collections';
// import {Component} from '@angular/core';
// import {BehaviorSubject, Observable} from 'rxjs';

// export interface GameEventRender {

  
//   Games: string;
//   position: number;
//   Location: string;
//   Users: string;
// }

//  const ELEMENT_DATA: GameEventRender[] = [
//   {position: 1, Games: 'Dungeon of Dragon', Location: 'Bellevue', Users: 'H'},
//   {position: 2, Games: 'PathFinder', Location: 'Bellevue, Seattle', Users: 'He'},
//   {position: 3, Games: 'Monopoly', Location: 'Seattle', Users: 'Li'},

// ];

// // /**
// //  * @title Basic CDK data-table
// //  */
// @Component({
//   selector: 'event-render',
//   styleUrls: ['event-render.css'],
//   templateUrl: 'event-render.html',
// })
// export class eventRender {
//   displayedColumns: string[] = ['position', 'Games', 'Location', 'Users'];
//   dataSource = new ExampleDataSource();
// }

// export class ExampleDataSource extends DataSource<GameEventRender> {
//     /** Stream of data that is provided to the table. */
//     data = new BehaviorSubject<GameEventRender[]>(ELEMENT_DATA);
  
//     /** Connect function called by the table to retrieve one stream containing the data to render. */
//     connect(): Observable<GameEventRender[]> {
//       return this.data;
//     }
  
//     disconnect() {}
//   }