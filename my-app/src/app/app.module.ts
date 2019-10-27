import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { ToDoComponent } from './to-do/to-do.component';
import { WordSortComponent } from './word-sort/word-sort.component';
import { CounterComponent } from './counter/counter.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { UsersComponent } from './users/users.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PaymentAuthComponent } from './payment-auth/payment-auth.component';
import { ShowUserInfoComponent } from './show-user-info/show-user-info.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    ToDoComponent,
    WordSortComponent,
    CounterComponent,
    SearchBarComponent,
    GameBoardComponent,
    UsersComponent,
    BannerAdComponent,
    SignInComponent,
    SignUpComponent,
    PaymentAuthComponent,
    ShowUserInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
