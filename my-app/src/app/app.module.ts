import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { ToDoComponent } from './to-do/to-do.component';
import { WordSortComponent } from './word-sort/word-sort.component';
import { PalindromeCheckerComponent } from './palindrome-checker/palindrome-checker.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    ToDoComponent,
    WordSortComponent,
    PalindromeCheckerComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
