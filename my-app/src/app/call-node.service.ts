// This async functionality uses an Angular HttpClint module to do the REST api to node
// for us. As we need calls to Node and over to mongo to be async, it uses the
// Observable  (called with a .subscribe modifier)
// each of the 5 methods return back the RESULT of executing the this.http.something call
// up to the node server
// all od this is provided to any component in the app as an Angular "Service"

/*

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserAcount } from './UserAcount';
export interface CallNode {
  name: string;
}
@Injectable({ providedIn: 'root' })  // this makes this service injectable, Angular's dependecy injection model

export class CallNodeService {
  constructor(private http: HttpClient) {}
  getAllTasks(): Observable<UserAcount[]> {
    return  this.http.get<UserAcount[]>('http://localhost:3000/show');
    //return  this.http.get<UserAcount[]>(' https://lookingforgames.azurewebsites.net/tasks/');
  }
  getTask(taskName: string): Observable<UserAcount> {
    return this.http.get<UserAcount>('http://localhost:3000/tasks/' + taskName);
    //return this.http.get<UserAcount>('https://lookingforgames.azurewebsites.net/tasks/' + taskName);
  }
  insertTask(task: UserAcount): Observable<UserAcount> {
    return this.http.post<UserAcount>('http://localhost:3000/tasks/', task);
    //return this.http.post<UserAcount>('https://lookingforgames.azurewebsites.net/tasks/', task);
  }
  updateTask(task: UserAcount): Observable<void> {
    return this.http.put<void>('http://localhost:3000/tasks/' + task._id, task);
    //return this.http.put<void>('https://lookingforgames.azurewebsites.net/tasks/' + task._id, task);
  }
  deleteTask(task: UserAcount) {
    return this.http.delete('http://localhost:3000/tasks/' + task._id);
    //return this.http.delete('https://lookingforgames.azurewebsites.net/tasks/' + task._id);
  }
}
*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Task } from './Task';
import { UserAcount } from './UserAcount';

export interface Tasks {
  name: string;
}

@Injectable({ providedIn: 'root' })

export class CallNodeService { // CallNodeService WAS TaskService
  constructor(private http: HttpClient) {}
  getAllTasks(): Observable<UserAcount[]> {
    return  this.http.get<UserAcount[]>('http://localhost:3000/tasks');
    //return  this.http.get<UserAcount[]>(' https://kurtmongoserver.azurewebsites.net/tasks/');
  }
  getTask(taskName: string): Observable<UserAcount> {
    return this.http.get<UserAcount>('http://localhost:3000/tasks/' + taskName);
    //return this.http.get<UserAcount>('https://kurtmongoserver.azurewebsites.net/tasks/' + taskName);
  }
  insertTask(task: UserAcount): Observable<UserAcount> {
    return this.http.post<UserAcount>('http://localhost:3000/tasks/', task);
    //return this.http.post<UserAcount>('https://kurtmongoserver.azurewebsites.net/tasks/', task);
  }
  updateTask(task: UserAcount): Observable<void> {
    return this.http.put<void>('http://localhost:3000/tasks/' + task._id, task);
    //return this.http.put<void>('https://kurtmongoserver.azurewebsites.net/tasks/' + task._id, task);
  }
  deleteTask(task: UserAcount) {
    return this.http.delete('http://localhost:3000/tasks/' + task._id);
    //return this.http.delete('https://kurtmongoserver.azurewebsites.net/tasks/' + task._id);
  }
}