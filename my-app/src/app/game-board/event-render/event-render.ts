import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { CallNodeService } from '../../call-node.service'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameEvent } from './GameEvent';
import { LocData } from './LocData';
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
  
  gameFilter = "None";
  isASC = true;
  soonest = true;
  gameNames= ["Dungeons And Dragons", "Pathfinder", "Monopoly"];

  ourGame: GameEvent[];
  dist: number [];
  
  dummyToken: Token = new Token();

  selectedGame: GameEvent;

  eventLocation: string;

  //currentDistance: Object; // was an object
  currentDistance: number;

  sortGamesByDist() {
    if(this.isASC) {
      this.ourGame.sort((x, y) => {
        if(x.DistFromUser > y.DistFromUser){
          return 1;
        }else{
          return -1;
        }
      });
      this.isASC = false;
    }else{
      this.ourGame.sort((x, y) => {
        if(x.DistFromUser < y.DistFromUser){
          return 1;
        }else{
          return -1;
        }
      });
      this.isASC = true;
    }
  } 

  sortGamesByDate() {
    if(this.soonest) {
      this.ourGame.sort((x, y) => {
        if(x.Date > y.Date){
          return 1;
        }else{
          return -1;
        }
      });
      this.soonest = false;
    }else{
      this.ourGame.sort((x, y) => {
        if(x.Date < y.Date){
          return 1;
        }else{
          return -1;
        }
      });
      this.soonest = true;
    }
  }

  userOwnsEvent(eventOwnerId: string) {
    if(history.state.sessionToken._id == eventOwnerId) {
      return true;
    }else{
      return false;
    }
  }

  userHasJoined(usersIds: Array<[]>[]) {
    for(let i =0; i < usersIds.length; i++){
      if(history.state.sessionToken._id == usersIds[i][2]) {
        console.log(" >>>> I found you ..." + usersIds[i][2]);
        return true;
      }
    } 
    console.log(" >>>> Not there ..." + usersIds[0][2]);
    return false;
  }

  constructor(private myGameEvent: CallNodeService, private router: Router, private http: HttpClient) { 
    this.ourGame = [];
  }

  ngOnInit() {
    if(history.state.sessionToken.Location == undefined || history.state.sessionToken.Location == "Default"){
      this.gameFilter = "None";
    } else {
        this.gameFilter = history.state.sessionToken.Location;
    }
    this.getGames();
    //console.log('////////////////////////////////////////////////\r\nEvent-Render:\r\nsessionToken _id:       ' + history.state.sessionToken._id +"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName +"\r\nsessionToken Search Selection:   " + history.state.sessionToken.Location+'\r\n////////////////////////////////////////////////');
  }
  
  getGames(): void {
    //console.log("Event-Render: In getGames()");
    this.myGameEvent.getAllGames().subscribe((gameData: GameEvent[]) => {
      //change gameData to ourGame if this doesn't work
      //console.log(gameData);
      //console.log(this.gameFilter);
      
      this.ourGame = [];
      
      if(this.gameFilter!="None"){
        for(let i=0;i<gameData.length;i++){
          if(gameData[i].GameType==this.gameFilter){
            //this.geoLocator(gameData[i].Location)  ////////////////////////////////// new
            this.geoLocator(gameData[i])  ////////////////////////////////// new

            //gameData[i].DistFromUser = this.currentDistance;
            //console.log("gameData[i].DistFromUser: " + gameData[i].DistFromUser)
            //
            //this.dist[i] = this.currentDistance;
          }
        }
        return this.ourGame;
      }else {
        for(let i=0;i<gameData.length;i++){
          //this.geoLocator(gameData[i].Location)  ////////////////////////////////// new
          this.geoLocator(gameData[i])  ////////////////////////////////// new

          //gameData[i].DistFromUser = this.currentDistance;
          //console.log("gameData[i].DistFromUser: " + gameData[i].DistFromUser)
          //this.ourGame.push(gameData[i]);
        }
        return this.ourGame;
      }
    });
  }

  onSelect(PassedInGameItem: GameEvent): void {
    this.selectedGame = PassedInGameItem;
    console.log(this.selectedGame);
  }

  deleteEvent(): void {
    console.log("Deleting: " + this.selectedGame);
    this.myGameEvent.deleteGame(this.selectedGame).subscribe();
  }

  joinEvent(theGame: GameEvent): void {
    if(this.userHasJoined(theGame.CurrentPlayers)!){ // This is my favrote line in the app... <-------------------<<<<< LOL
      let playerArr = [];

      console.log("// joinEvent(): sessionToken.FirstName: " + history.state.sessionToken.FirstName);

      playerArr.push(history.state.sessionToken.UserName); /// DO NOT REARRANGE THESE!!!!!!!!
      playerArr.push(history.state.sessionToken.FirstName); // DO NOT REARRANGE THESE!!!!!!!!
      playerArr.push(history.state.sessionToken._id); //////// DO NOT REARRANGE THESE!!!!!!!!
      

      console.log("Event-Render: pushing playerArr [" + playerArr + "] to the server");

      theGame.CurrentPlayers.push(playerArr);

      this.myGameEvent.updateGame(theGame).subscribe();
    }
  }

  leaveEvent(theGame: GameEvent): void {

    console.log("deleting user from event" + history.state.sessionToken.UserName);

    for(let i = 0; i<theGame.CurrentPlayers.length; i++){
      if(theGame.CurrentPlayers[i][2] == history.state.sessionToken.UserName){
        theGame.CurrentPlayers.splice(i, 1);
        break;
      }
    }

    this.myGameEvent.updateGame(theGame).subscribe();
  }

  geoLocator(gameData) {
  /*
  // older: funcional way of getting distance
    //console.log(eventLocation);
    this.eventLocation = gameData;
    //console.log(this.eventLocation + " is what we set this.eventLocation to");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getLocation.bind(this));
    } else {
      console.log('/// Geolocation is not supported by this browser. ///:  ');
    }
    */

    // new: way of getting distance, "now even more better!!!" - movie quote: Idiocracy
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.myGameEvent.getDistance(position.coords.latitude.toString(), position.coords.longitude.toString(), gameData.Location).subscribe((distance: Object) =>{
          let response: any = distance;
          //if(response.status == 200) {
          //  console.log('/// response.status == OK ///');
          //  console.log('Meters to event: ' + response.json.rows[0].elements[0].distance.value);
          //  console.log('Miles to event: ' + this.metersToMiles(response.json.rows[0].elements[0].distance.value));
          //}
          gameData.DistFromUser = this.metersToMiles(response.json.rows[0].elements[0].distance.value);
          
          this.ourGame.push(gameData);
        });
      });
    } else {
      console.log('/// Sorry your browser dosen\'t support Geolocation ///');
      document.getElementById('errorMsgLabel').innerHTML = "Sorry your browser dosen't support Geolocation.";
      this.ourGame.push(gameData);
    }
  }

  /*
  getLocation(position) {
    //this.x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    //console.log('latitude:  ' + position.coords.latitude);
    //console.log('longitude: ' + position.coords.longitude);
    //let positionString = "" + position.coords.latitude + "," + position.coords.longitude;
    //console.log("positionString: " + positionString);

    // Joseph's Funky Google API code /////////////////////////////////////
    let locData: LocData = new LocData();
    locData.myLat = position.coords.latitude.toString();
    locData.myLon = position.coords.longitude.toString();
    locData.eventLocation = this.eventLocation.toString();
    
    // POST way 
    //this.myGameEvent.getDistance(locData).subscribe((distance: Object) =>{
    //  let response: any = distance;
    //  //if(response.status == 200) {}
    //  this.currentDistance = this.metersToMiles(response.json.rows[0].elements[0].distance.value);
    //});
    
    //GET way
    this.myGameEvent.getDistance2(position.coords.latitude.toString(), position.coords.longitude.toString(), locData.eventLocation).subscribe((distance: Object) =>{
      let response: any = distance;
      //console.log('///////////////////////////////////////////////\r\nEvent-Render: distance object Start: \r\n' + distance + '\r\ndistance object End.\r\n///////////////////////////////////////////////');
      if(response.status == 200) {
        //console.log('/// response.status == OK ///');
        //console.log('Meters to event: ' + response.json.rows[0].elements[0].distance.value);
        //console.log('Miles to event: ' + this.metersToMiles(response.json.rows[0].elements[0].distance.value));
      }
      //this.currentDistance = distance;
      //this.currentDistance = this.metersToMiles(response.json.rows[0].elements[0].distance.value);
      this.gameData.DistFromUser = this.metersToMiles(response.json.rows[0].elements[0].distance.value);
      
      this.ourGame.push(gameData);
    });
    
    
    return this.currentDistance;
  }*/

  metersToMiles(meters: number) {
    return Math.ceil((meters/1609.344) * 100) / 100;
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