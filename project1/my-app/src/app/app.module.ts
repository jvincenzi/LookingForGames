import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//app components. 
import { MaterialModuleSample } from './material-module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { UsersComponent } from './users/users.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { PaymentAuthComponent } from './payment-auth/payment-auth.component';
import { ShowUserInfoComponent } from './show-user-info/show-user-info.component';
import {eventLog } from './game-board/eventlog/event-log';
import {eventDialog} from './game-board/eventdialog/event-dialog';
import {RoutingAppModule} from './game-board/routing-app.module';
import {eventRender} from './game-board/event-render/event-render';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GameBoardComponent,
    eventLog,
    eventDialog,
    UsersComponent,
    BannerAdComponent,
    SignInComponent,
    SignUpComponent,
    PaymentAuthComponent,
    ShowUserInfoComponent,
    eventRender
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    MaterialModuleSample,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    AppRoutingModule,
    RoutingAppModule,
    ReactiveFormsModule,
  
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
