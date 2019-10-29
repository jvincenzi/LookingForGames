// This async functionality uses an Angular HttpClint module to do the REST api to node
// for us. As we need calls to Node and over to mongo to be async, it uses the
// Observable  (called with a .subscribe modifier)
// each of the 5 methods return back the RESULT of executing the this.http.something call
// up to the node server
// all od this is provided to any component in the app as an Angular "Service"

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserAcount } from './UserAcount';

export interface Tasks {
  name: string;
}

@Injectable({ providedIn: 'root' })
export class CallNodeService {
  // This should be the URL to your monogDB, not Node server!
  //mongoDbAddress = "https://lookingforgamesmongodb.azurewebsites.net/tasks/"; 
  //mongoDbAddress = 'https://lookingforgames.azurewebsites.net/UserAccount/';
  mongoDbAddress = "https://kurtmongoserver.azurewebsites.net/tasks/"; 

  constructor(private http: HttpClient) {}
  
  getAllUsers(): Observable<UserAcount[]> {
    return this.http.get<UserAcount[]>(this.mongoDbAddress);
  }
  getUser(userName: string): Observable<UserAcount> {
    return this.http.get<UserAcount>(this.mongoDbAddress + userName);
  }
  insertUser(user: UserAcount): Observable<UserAcount> {
    return this.http.post<UserAcount>(this.mongoDbAddress, user);
  }
  updateUser(user: UserAcount): Observable<void> {
    return this.http.put<void>(this.mongoDbAddress + user._id, user);
  }
  deleteUser(user: UserAcount) {
    return this.http.delete(this.mongoDbAddress + user._id);
  }
  
  
  
  getAllTasks(): Observable<UserAcount[]> {
    return this.http.get<UserAcount[]>(this.mongoDbAddress);
  }
  getTask(taskName: string): Observable<UserAcount> {
    return this.http.get<UserAcount>(this.mongoDbAddress + taskName);
  }
  insertTask(task: UserAcount): Observable<UserAcount> {
    return this.http.post<UserAcount>(this.mongoDbAddress, task);
  }
  updateTask(task: UserAcount): Observable<void> {
    return this.http.put<void>(this.mongoDbAddress + task._id, task);
  }
  deleteTask(task: UserAcount) {
    return this.http.delete(this.mongoDbAddress + task._id);
  }
  
}

/*
@Injectable({ providedIn: 'root' })  // this makes this service injectable, Angular's dependecy injection model
export class CallNodeService {
  mongoDbAddress = "https://kurtmongoserver.azurewebsites.net/tasks/";
  constructor(private http: HttpClient) {}
  getAllTasks(): Observable<UserAcount[]> {
    return  this.http.get<UserAcount[]>(this.mongoDbAddress);
  }
  getTask(taskName: string): Observable<UserAcount> {
    return this.http.get<UserAcount>(this.mongoDbAddress + taskName);
  }
  insertTask(task: UserAcount): Observable<UserAcount> {
    return this.http.post<UserAcount>(this.mongoDbAddress, task);
  }
  updateTask(task: UserAcount): Observable<void> {
    return this.http.put<void>(this.mongoDbAddress + task._id, task);
  }
  deleteTask(task: UserAcount) {
    return this.http.delete(this.mongoDbAddress + task._id);
  }
}
*/