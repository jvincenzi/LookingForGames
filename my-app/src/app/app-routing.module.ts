import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const myRoutes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'gameBoard', component: GameBoardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'signUp', component: SignUpComponent }
 // { path: 'users', component: UsersComponent }
 ];
 

 @NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
 })
 
 export class AppRoutingModule { }
