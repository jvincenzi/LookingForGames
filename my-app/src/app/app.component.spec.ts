import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { 
  MatToolbarModule, 
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatButtonModule, 
  MatFormFieldModule,
  MatSelectModule
 } from  '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms'
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        BannerAdComponent,
        SearchBarComponent,

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'LFG'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('LFG');
  });

  
  
});
