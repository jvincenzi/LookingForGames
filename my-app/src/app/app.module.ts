import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { PaymentAuthComponent } from './payment-auth/payment-auth.component';
import { ShowUserInfoComponent } from './show-user-info/show-user-info.component';

import { AppRoutingModule } from './app-routing.module';


import { MaterialModuleSample } from './material-module';
import { eventLog } from './game-board/eventlog/event-log';
import { eventDialog} from './game-board/eventdialog/event-dialog';
import { eventRender} from './game-board/event-render/event-render';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GameBoardComponent,
    BannerAdComponent,
    SignInComponent,
    SignUpComponent,
    PaymentAuthComponent,
    ShowUserInfoComponent,
    eventRender,
    eventLog,
    eventDialog,
    CreateEventComponent
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
    ReactiveFormsModule,
    MaterialModuleSample
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
