import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  } from '@angular/common/http';

import { CreateEventComponent } from './create-event.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { GameEvent } from '../GameEvent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';


describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD

      imports: [   
        MatFormFieldModule, 
        MatSelectModule,
        FormControl, 
        ReactiveFormsModule,
        BrowserAnimationsModule, 
        GameEvent, 
        CallNodeService 
      ],
      
      declarations: [ 
         
        CreateEventComponent
        
      ]
=======
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ CreateEventComponent ]
>>>>>>> 313bee93c1eb98b568b8d5828108ded9a5ec0e0e
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
