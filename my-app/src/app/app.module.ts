import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { fakeBackendProvider } from './_helpers';
import { HomeComponent } from './home';


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
    AlertComponent,
    HomeComponent,
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
  providers: [
      
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule);
=======
// DO NOT UN-COMMENT THIS -- This line below broke our app on azure (it is serving a life-sentence as a comment as punishment)
//platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> d018ccb6d4419545cb84f52a2b0e218853b56480
