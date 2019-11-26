import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShowUserInfoComponent } from './show-user-info/show-user-info.component';
import { PaymentAuthComponent } from './payment-auth/payment-auth.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { eventDialog } from './game-board/eventdialog/event-dialog'
import { Token } from './Token';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { AuthGuard } from './_helpers';
const myRoutes: Routes = [
  
   //{ path: '', component: SearchBarComponent, canActivate: [AuthGuard] },
  { path: '', component:SearchBarComponent, canActivate: [AuthGuard]},
  { path: 'signIn', component: SignInComponent },
  { path: 'gameBoard', component: GameBoardComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'myAccount', component: ShowUserInfoComponent, canActivate: [AuthGuard]},
  { path: 'paymentAuth', component: PaymentAuthComponent, canActivate: [AuthGuard]},
  { path: 'createGameEvent', component: CreateEventComponent, canActivate: [AuthGuard]},
  { path: 'eventDialog', component:eventDialog },
  //{ path: 'users', component: UsersComponent }

     // otherwise redirect to home
  { path: '**', redirectTo: '' }
 ];
 

 @NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
 })
 
 export class AppRoutingModule { 
  constructor() {}   //was a prameter in the constructor: private stateService: StateService
  

 }
