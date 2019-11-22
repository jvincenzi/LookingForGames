import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShowUserInfoComponent } from './show-user-info.component';
import { Token } from '../Token';
import { PaymentAuthComponent } from '../payment-auth/payment-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material';

let sessionTokenData: Token = new Token();
sessionTokenData._id = "12345678910";
sessionTokenData.UserName = "karma-jest-test";
sessionTokenData.FirstName = "FirstName";

describe('ShowUserInfoComponent', () => {
  let component: ShowUserInfoComponent;
  let fixture: ComponentFixture<ShowUserInfoComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([{
          path: '',
          redirectTo: 'myAccount',
          pathMatch: 'full',
          data: {sessionToken: sessionTokenData} //  <-------<<<< 
        }]),
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


