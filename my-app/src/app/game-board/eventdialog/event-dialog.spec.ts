import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentItem } from '../../Comment';
import { eventDialog } from './event-dialog';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GameBoardComponent', () => {
  let component: eventDialog;
  let fixture: ComponentFixture<eventDialog>;

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
        eventDialog,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eventDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
