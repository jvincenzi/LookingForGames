import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameBoardComponent } from './game-board.component';
import { eventRender } from './event-render/event-render';
import { eventLog } from './eventlog/event-log';
import { HttpClientModule,  } from '@angular/common/http';
import { MatFormFieldModule, MatSelectModule } from  '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { eventDialog } from './eventdialog/event-dialog';
import { Token } from '../Token';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  let myToken: Token = new Token();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        RouterTestingModule,
      ],
      declarations: [ 
        GameBoardComponent,
        eventRender,
        eventLog,
        eventDialog
      ]
    })
    .compileComponents();
  }));

  

  beforeEach(() => {
    history.state.sessionToken = myToken;
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
