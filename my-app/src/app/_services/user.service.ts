import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
//copy from Joseph 
import { Observable, of, config } from 'rxjs';
import { UserSignInData } from '../UserSignInData';
import { GameEvent } from '../game-board/event-render/GameEvent';
import { CommentItem } from '../Comment';
import { LocData } from '../game-board/event-render/LocData';

let userNodeAddress: string;
let loginNodeAddress: string;
let googleNodeAddress: string;


let useLocalHost: Boolean = false; // use this to switch between running localHost and Azure <----------------------<<

  
if (useLocalHost) {
  userNodeAddress =  "http://localhost:3000/users";
  loginNodeAddress = "http://localhost:3000/signin";
  googleNodeAddress = 'http://localhost:3000/getDistance';

} else {
  userNodeAddress = "https://lfgnodesrv.azurewebsites.net/users";
  //userNodeAddress = "https://lookforgamesserver.azurewebsites.net/users"; <-- This is Kurt's azure version of our server
  loginNodeAddress = "https://lfgnodesrv.azurewebsites.net/signin";

  //CommentNodeAddress = "https://lfgnodesrv.azurewebsites.net/Comments";
  googleNodeAddress = 'https://lfgnodesrv.azurewebsites.net/getDistance';
}

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(userNodeAddress);
      }

      getUser(userID: string): Observable<User> {
        return this.http.get<User>(userNodeAddress + '/' + userID);
      }
    
      deleteUser(user: User) {
        return this.http.delete(userNodeAddress + '/' + user._id);
      }




    // getAll() {
    //     return this.http.get<User[]>(`${config.apiUrl}/users`);
    // }

    // register(user: User) {
    //     return this.http.post(`${config.apiUrl}/users/signUp`, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`${config.apiUrl}/users/${id}`);
    // }
}