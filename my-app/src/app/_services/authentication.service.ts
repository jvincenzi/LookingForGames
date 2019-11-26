import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';
import { UserAccount } from '../UserAccount';
import { UserSignInData } from '../UserSignInData';
import { GameEvent } from '../game-board/event-render/GameEvent';
import { CommentItem } from '../Comment';
import { LocData } from '../game-board/event-render/LocData';
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
  CommentNodeAddress = "http://localhost:3000/Comments";
  googleNodeAddress = 'http://localhost:3000/getDistance';

} else {
  userNodeAddress = "https://lfgnodesrv.azurewebsites.net/users";
  //userNodeAddress = "https://lookforgamesserver.azurewebsites.net/users"; <-- This is Kurt's azure version of our server
  loginNodeAddress = "https://lfgnodesrv.azurewebsites.net/signin";
  gameNodeAddress = "https://lfgnodesrv.azurewebsites.net/games";
  //CommentNodeAddress = "https://lfgnodesrv.azurewebsites.net/Comments";
  googleNodeAddress = 'https://lfgnodesrv.azurewebsites.net/getDistance';
}
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    // login(UserName: string, Password: string): Observable<User> {
    //     return this.http.get<User>(userNodeAddress + '/');
    //   }

//    login(UserName: string, Password: string): Observable<User> {
//    return this.http.post<User>(userNodeAddress + '/', {UserName, Password}); 
//      }

    login(login:string) {
      // return this.http.post<any>(`${userNodeAddress}/users/authenticate`, { username, password })
      return this.http.post<any>(loginNodeAddress + '/', login)
     .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
      
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}