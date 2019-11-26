import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;


    //callnodeservice copy
      //userNodeAddress = "http://localhost:3000/users"
  //gameNodeAddress = "http://localhost:3000/games"
  signInNodeAddress = "http://localhost:3000/signin";
  //nodeAddress = "https://LookingForGamesDB.azurewebsites.net/users/"; 
  //nodeAddress = "https://kurtmongoserver.azurewebsites.net/tasks/";
  userNodeAddress = "http://lfgnodesrv.azurewebsites.net/users";
  gameNodeAddress = "http://lfgnodesrv.azurewebsites.net/games";
  

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.userNodeAddress);
      }
      
      getUser(userID: string): Observable<User> {
        return this.http.get<User>(this.userNodeAddress + '/' + userID);
      }
      
      updateUser(user: User): Observable<void> {
        //console.log("call-node-service user._id = " + user._id); ///////////////////////////////////////////////////
        return this.http.put<void>(this.userNodeAddress + '/' + user._id, user);
      }
    
      deleteUser(user: User) {
        return this.http.delete(this.userNodeAddress + '/' + user._id);
      }
    
      insertUser(user: User): Observable<User> {
        return this.http.post<User>(this.userNodeAddress + '/', user);
      }

    // login(username, password) {
    //     return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //             this.currentUserSubject.next(user);
    //             return user;
    //         }));
    // }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}