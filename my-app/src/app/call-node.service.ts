// This async functionality uses an Angular HttpClint module to do the REST api to node
// for us. As we need calls to Node and over to mongo to be async, it uses the
// Observable  (called with a .subscribe modifier)
// each of the 5 methods return back the RESULT of executing the this.http.something call
// up to the node server
// all od this is provided to any component in the app as an Angular "Service"

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from './UserAccount';
import { UserSignInData } from './UserSignInData';
import { GameEvent } from './game-board/event-render/GameEvent';

// export interface Tasks {
//   name: string;
// }

let useLocalAddresses: Boolean = false;
let userNodeAddress: string;
let gameNodeAddress: string;
let loginNodeAddress: string;
  
if (useLocalAddresses) {
  userNodeAddress =  "http://localhost:3000/users";
  loginNodeAddress = "http://localhost:3000/signin";
  //gameNodeAddress = "http://localhost:3000/games";
} else {
  userNodeAddress = "https://lfgnodesrv.azurewebsites.net/users";
  //userNodeAddress = "https://lookforgamesserver.azurewebsites.net/users"; <-- This is Kurt's azure version of our server
  loginNodeAddress = "https://lfgnodesrv.azurewebsites.net/signin";
  gameNodeAddress = "https://lfgnodesrv.azurewebsites.net/games";
}

@Injectable({ providedIn: 'root' })
export class CallNodeService {
  constructor(private http: HttpClient) {}

  //gameNodeAddress = "http://localhost:3000/games";
  //gameNodeAddress = "http://lfgnodesrv.azurewebsites.net/games";
  /* 
    In app.js swap:
     PORT (3000 <--> 80)
     corsOptions (origin: 'http://localhost:4200' <--> origin: 'lookingforgames.azurewebsites.net/)
  */
  
  getAllUsers(): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>(userNodeAddress);
  }
  getUser(userID: string): Observable<UserAccount> {
    return this.http.get<UserAccount>(userNodeAddress + '/' + userID);
  }
  updateUser(user: UserAccount): Observable<void> {
    return this.http.put<void>(userNodeAddress + '/' + user._id, user);
  }
  deleteUser(user: UserAccount) {
    return this.http.delete(userNodeAddress + '/' + user._id);
  }
  insertUser(user: UserAccount): Observable<UserAccount> {
    return this.http.post<UserAccount>(userNodeAddress + '/', user);
  }
  userLogin(login: UserSignInData): Observable<UserSignInData> {
    //console.log('call-node.service.userLogin({' + login.UserName + ', ' + login.Password + '})'); ////////////////////////////
    return this.http.post<UserSignInData>(loginNodeAddress + '/', login); 
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  insertGame(game: GameEvent): Observable<GameEvent> {
    //return this.http.post<UserAccount>('http://localhost:3000/users/', user);
      return this.http.post<GameEvent>(gameNodeAddress + '/', game);
  }

  deleteGame(game: GameEvent) {
    //return this.http.delete('http://localhost:3000/users/' + user._id);
      return this.http.delete(gameNodeAddress + '/' + game._id);
  }

  updateGame(game: GameEvent): Observable<void> {
    return this.http.put<void>(gameNodeAddress + '/' + game._id, game);
  }

  //call for Game Event/
  getAllGames(): Observable<GameEvent[]> {
    //return this.http.get<UserAccount[]>('http://localhost:3000/users');
    return this.http.get<GameEvent[]>(gameNodeAddress);
  }
  getTask(Title: string): Observable<GameEvent> {
    return this.http.get<GameEvent>(gameNodeAddress + '/' + Title);
  // return this.http.get<Task>('https://kurtmongoserver.azurewebsites.net/tasks/' + taskName);
  }

}

  
//   getAllTasks(): Observable<UserAcount[]> {
//     return this.http.get<UserAcount[]>(this.nodeAddress);
//   }
//   getTask(taskName: string): Observable<UserAcount> {
//     return this.http.get<UserAcount>(this.nodeAddress + taskName);
//   }
//   insertTask(task: UserAcount): Observable<UserAcount> {
//     return this.http.post<UserAcount>(this.nodeAddress, task);
//   }
//   updateTask(task: UserAcount): Observable<void> {
//     return this.http.put<void>(this.nodeAddress + task._id, task);
//   }
//   deleteTask(task: UserAcount) {
//     return this.http.delete(this.nodeAddress + task._id);
//   }
  
// }

