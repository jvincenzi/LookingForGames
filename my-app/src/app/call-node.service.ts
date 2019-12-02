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
import { CommentItem } from './Comment';
import { userCommentData } from './game-board/eventdialog/userCommentData';

import { LocData } from './game-board/event-render/LocData';
// export interface Tasks {
//   name: string;
// }
let userNodeAddress: string;
let gameNodeAddress: string;
let loginNodeAddress: string;
let CommentNodeAddress: string;
let googleNodeAddress: string;


let useLocalHost: Boolean = false; // use this to switch between running localHost and Azure <----------------------<<

  
if (useLocalHost) {
  userNodeAddress =  "http://localhost:3000/users";
  loginNodeAddress = "http://localhost:3000/signin";
  gameNodeAddress = "http://localhost:3000/games";
  CommentNodeAddress = "http://localhost:3000/comment";
  googleNodeAddress = 'http://localhost:3000/getDistance';

} else {
  userNodeAddress = "https://lfgnodesrv.azurewebsites.net/users";
  //userNodeAddress = "https://lookforgamesserver.azurewebsites.net/users"; <-- This is Kurt's azure version of our server
  loginNodeAddress = "https://lfgnodesrv.azurewebsites.net/signin";
  gameNodeAddress = "https://lfgnodesrv.azurewebsites.net/games";
  CommentNodeAddress = "https://lfgnodesrv.azurewebsites.net/comment";
  googleNodeAddress = 'https://lfgnodesrv.azurewebsites.net/getDistance';
}

@Injectable({ providedIn: 'root' })
export class CallNodeService {
  constructor(private http: HttpClient) {}

  /* 
    In app.js swap:
     PORT (3000 <--> 80)
     corsOptions (origin: 'http://localhost:4200' <--> origin: 'lookingforgames.azurewebsites.net/)
  */
  ///////////////////// Comment related routes //////////////////////
  getAllComment(): Observable<userCommentData[]> {
    return this.http.get<userCommentData[]>(CommentNodeAddress);
  }
  getComment(commentID: string): Observable<userCommentData> {
    return this.http.get<userCommentData>(CommentNodeAddress + '/' + commentID);
  }
  insertComment(comment: userCommentData): Observable<userCommentData> {
    return this.http.post<userCommentData>(CommentNodeAddress + '/', comment);
  }
  deleteComment(Comment: CommentItem) {
    return this.http.delete(CommentNodeAddress + '/' + Comment._id);
  }


  ////////////////////// User related routes //////////////////////
  
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
    return this.http.post<UserSignInData>(loginNodeAddress + '/', login); 
  }

  ////////////////////// GameEvent routes //////////////////////

  insertGame(game: GameEvent): Observable<GameEvent> {
    return this.http.post<GameEvent>(gameNodeAddress + '/', game);
  }
  deleteGame(game: GameEvent) {
    return this.http.delete(gameNodeAddress + '/' + game._id);
  }
  updateGame(game: GameEvent): Observable<void> {
    return this.http.put<void>(gameNodeAddress + '/' + game._id, game);
  }

  //call for Game Event/
  getAllGames(): Observable<GameEvent[]> {
    return this.http.get<GameEvent[]>(gameNodeAddress);
  }
  getGame(Title: string): Observable<GameEvent> {
    return this.http.get<GameEvent>(gameNodeAddress + '/' + Title);
  }
  getDistance(lat: string, long: string, destination: string): Observable<JSON> { // new version
    return this.http.get<JSON>(googleNodeAddress + '/' + lat + '/' + long + '/' + destination);
  }
  getDistance2(locData: LocData): Observable<JSON> { // Joes old working
    return this.http.post<JSON>(googleNodeAddress + '/', locData);
  }
  

}

