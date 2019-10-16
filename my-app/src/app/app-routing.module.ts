import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { GameBoardComponent } from './game-board/game-board.component';

const myRoutes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'gameBoard', component: GameBoardComponent }
 ];
 

 @NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
 })
 
 export class AppRoutingModule { }
