import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { CallNodeService } from '../../call-node.service'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameEvent } from './GameEvent';
import { Token } from '../../Token';
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

  @Injectable({ providedIn: 'root' })
  export class eventRender implements OnInit {

    

  ourGame: GameEvent[];
  
  dummyToken: Token = new Token();

  selectedGame: GameEvent;

  eventLocation: String;

  currentDistance: Object;

  constructor(private myGameEvent: CallNodeService, private router: Router, private http: HttpClient) { 

  }

  ngOnInit() {
    this.getGames();
    
  }
  
  getGames(): void {
    this.myGameEvent.getAllGames().subscribe((gameData: GameEvent[]) => {
      this.ourGame = gameData;
      return gameData;
    })
  }

  onSelect(PassedInGameItem: GameEvent): void {
    this.selectedGame = PassedInGameItem;
    console.log(this.selectedGame);
  }
 
  deleteEvent(): void {
    console.log("Deleting" + this.selectedGame);
    this.myGameEvent.deleteGame( this.selectedGame).subscribe();
  }

  joinEvent(theGame: GameEvent): void {
    this.dummyToken.FirstName = "Sean";
    this.dummyToken.LastName = "Newman";
    this.dummyToken.UserName = "SeanNewman22";
    
    let playerArr = [];

    console.log(history.state.sessionToken.FirstName);

    playerArr.push(history.state.sessionToken.FirstName);
    playerArr.push(history.state.sessionToken.LastName);
    playerArr.push(history.state.sessionToken.UserName);

    //playerArr.push(this.dummyToken.FirstName);
    //playerArr.push(this.dummyToken.LastName);
    //playerArr.push(this.dummyToken.UserName);

    console.log("pushing " + playerArr + " to the server");

    theGame.CurrentPlayers.push(playerArr)

    this.myGameEvent.updateGame(theGame).subscribe();
  }

  getPosition(eventLocation) {
    console.log(eventLocation);
    this.eventLocation = eventLocation;
    console.log(this.eventLocation + "is what we set this.eventLocation to");
    console.log('/// in getLocation() ///:  ');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getLocation.bind(this));
    } else {
      console.log('/// Geolocation is not supported by this browser. ///:  ');
      //this.x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  getLocation(position) {
    //this.x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    console.log('latitude:  ' + position.coords.latitude);
    console.log('longitude: ' + position.coords.longitude);

    let positionString = "" + position.coords.latitude + "," + position.coords.longitude;
    console.log(positionString);

    this.myGameEvent.getDistance(positionString, this.eventLocation).subscribe((distance: Object) =>{
      console.log(distance);
      this.currentDistance = distance;
    });
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