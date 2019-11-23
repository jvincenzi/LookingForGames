import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShowUserInfoComponent } from './show-user-info.component';
import { Token } from '../Token';
import { PaymentAuthComponent } from '../payment-auth/payment-auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material';


//let sessionToken: Token = new Token();

describe('ShowUserInfoComponent', () => {
  let component: ShowUserInfoComponent;
  let fixture: ComponentFixture<ShowUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        //RouterTestingModule,
        //MatIconModule,
        //MatToolbarModule,
        //MatSidenavModule,
        //MatListModule,
        //MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        //BrowserAnimationsModule,
        
      ],
      declarations: [ 
        ShowUserInfoComponent,
        PaymentAuthComponent,
      ]
    })
    .compileComponents();
  }));

//mockImplementation()

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
