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
import { GameEvent } from './game-board/event-render/GameEvent';

// export interface Tasks {
//   name: string;
// }

@Injectable({ providedIn: 'root' })
export class CallNodeService {
  // This should be the URL to your monogDB, not Node server!
  constructor(private http: HttpClient) {}
  nodeAddress = "http://localhost:3000/users"
  gameNodeAddress = "http://localhost:3000/games"
  //nodeAddress = "https://LookingForGamesDB.azurewebsites.net/users/"; 
  //nodeAddress = "https://kurtmongoserver.azurewebsites.net/tasks/";
  //nodeAddress = "http://lfgnodesrv.azurewebsites.net/users";
  
  //call for Game Event/
  getAllGames(): Observable<GameEvent[]> {
    //return this.http.get<UserAccount[]>('http://localhost:3000/users');
    return this.http.get<GameEvent[]>(this.gameNodeAddress);
  }
  getTask(Title: string): Observable<GameEvent> {
    return this.http.get<GameEvent>(this.gameNodeAddress + '/' + Title);
   // return this.http.get<Task>('https://kurtmongoserver.azurewebsites.net/tasks/' + taskName);
  }

  getAllUsers(): Observable<UserAccount[]> {
  //return this.http.get<UserAccount[]>('http://localhost:3000/users');
    return this.http.get<UserAccount[]>(this.nodeAddress);
  }
  getUser(userID: string): Observable<UserAccount> {
  //return this.http.get<UserAccount>('http://localhost:3000/users/' + userName);
    return this.http.get<UserAccount>(this.nodeAddress + '/' + userID);
  }
  insertUser(user: UserAccount): Observable<UserAccount> {
  //return this.http.post<UserAccount>('http://localhost:3000/users/', user);
    return this.http.post<UserAccount>(this.nodeAddress + '/', user);
  }
  updateUser(user: UserAccount): Observable<void> {
  //return this.http.put<void>('http://localhost:3000/users/' + user._id, user);
    return this.http.put<void>(this.nodeAddress + '/' + user._id, user);
  }
  deleteUser(user: UserAccount) {
  //return this.http.delete('http://localhost:3000/users/' + user._id);
    return this.http.delete(this.nodeAddress + '/' + user._id);
  }
  


  insertGame(game: GameEvent): Observable<GameEvent> {
    //return this.http.post<UserAccount>('http://localhost:3000/users/', user);
      return this.http.post<GameEvent>(this.gameNodeAddress + '/', game);
  }

  deleteGame(game: GameEvent) {
    //return this.http.delete('http://localhost:3000/users/' + user._id);
      return this.http.delete(this.gameNodeAddress + '/' + game._id);
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

// /*
// @Injectable({ providedIn: 'root' })  // this makes this service injectable, Angular's dependecy injection model
// export class CallNodeService {
//   mongoDbAddress = "https://kurtmongoserver.azurewebsites.net/tasks/";
//   constructor(private http: HttpClient) {}
//   getAllTasks(): Observable<UserAcount[]> {
//     return  this.http.get<UserAcount[]>(this.mongoDbAddress);
//   }
//   getTask(taskName: string): Observable<UserAcount> {
//     return this.http.get<UserAcount>(this.mongoDbAddress + taskName);
//   }
//   insertTask(task: UserAcount): Observable<UserAcount> {
//     return this.http.post<UserAcount>(this.mongoDbAddress, task);
//   }
//   updateTask(task: UserAcount): Observable<void> {
//     return this.http.put<void>(this.mongoDbAddress + task._id, task);
//   }
//   deleteTask(task: UserAcount) {
//     return this.http.delete(this.mongoDbAddress + task._id);
//   }
// 
