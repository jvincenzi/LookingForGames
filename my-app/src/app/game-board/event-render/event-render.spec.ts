import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eventRender } from './event-render';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameBoardComponent', () => {
  let component: eventRender;
  let fixture: ComponentFixture<eventRender>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
      ],
      declarations: [ 
        eventRender 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eventRender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
