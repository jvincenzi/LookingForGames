import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { ToDoComponent } from './to-do/to-do.component';
import { WordSortComponent } from './word-sort/word-sort.component';
import { PalindromeCheckerComponent } from './palindrome-checker/palindrome-checker.component';
import { CounterComponent } from './counter/counter.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { GameBoardComponent } from './game-board/game-board.component';
import { UsersComponent } from './users/users.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    ToDoComponent,
    WordSortComponent,
    PalindromeCheckerComponent,
    CounterComponent,
    SearchBarComponent,
    GameBoardComponent,
    UsersComponent,
    BannerAdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
