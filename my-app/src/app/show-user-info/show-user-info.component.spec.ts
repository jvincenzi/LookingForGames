import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShowUserInfoComponent } from './show-user-info.component';
import { Token } from '../Token';
import { PaymentAuthComponent } from '../payment-auth/payment-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material';

<<<<<<< HEAD
//let sessionToken: Token = new Token();
=======
let sessionTokenData: Token = new Token();
sessionTokenData._id = "12345678910";
sessionTokenData.UserName = "karma-jest-test";
sessionTokenData.FirstName = "FirstName";
>>>>>>> 5fa12b71f3390d432f83d73653fb860837958122

describe('ShowUserInfoComponent', () => {
  let component: ShowUserInfoComponent;
  let fixture: ComponentFixture<ShowUserInfoComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
<<<<<<< HEAD
        BrowserAnimationsModule,
        //RouterTestingModule,
        //MatIconModule,
        //MatToolbarModule,
        //MatSidenavModule,
        //MatListModule,
        //MatButtonModule,
=======
        RouterTestingModule.withRoutes([{
          path: '',
          redirectTo: 'myAccount',
          pathMatch: 'full',
          data: {sessionToken: sessionTokenData} //  <-------<<<< 
        }]),
>>>>>>> 5fa12b71f3390d432f83d73653fb860837958122
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
      ],
      declarations: [ 
        ShowUserInfoComponent,
        PaymentAuthComponent,
      ],
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


