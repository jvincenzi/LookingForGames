import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShowUserInfoComponent } from './show-user-info/show-user-info.component';
import { PaymentAuthComponent } from './payment-auth/payment-auth.component';
import { CreateEventComponent } from './create-event/create-event.component';

const myRoutes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'gameBoard', component: GameBoardComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'myAccount', component: ShowUserInfoComponent},
  { path: 'paymentAuth', component: PaymentAuthComponent},
  { path: 'createGameEvent', component: CreateEventComponent}//,
//{ path: 'users', component: UsersComponent }
 ];
 

 @NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
 })
 
 export class AppRoutingModule { }
