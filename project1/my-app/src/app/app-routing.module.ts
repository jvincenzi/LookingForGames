import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const myRoutes: Routes = [
  {path: 'search', component: SearchBarComponent},
  { path: 'signIn', component: SignInComponent },
  { path: 'gameBoard', component: GameBoardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'signUp', component: SignUpComponent }
 ];
 

 @NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
 })
 
 export class AppRoutingModule { }
