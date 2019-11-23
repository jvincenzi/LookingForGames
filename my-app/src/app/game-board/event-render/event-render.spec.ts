import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { eventRender } from './event-render';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GameEvent } from './GameEvent';
import { Token } from '../../Token';
import { CallNodeService } from '../../call-node.service'


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
        MatFormFieldModule
      ],
      declarations: [ 
        eventRender,
        myGameEvent 
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

  let myGameEvent: CallNodeService;
  
  it('#getGames should return real value from the real service',  () => {
    this.myGameEvent.getAllGames()
    .subscribe((gameData: GameEvent[]) => {
    console.log(gameData);
    console.log(this.gameFilter);
    if(this.gameFilter!="Name"){
      this.ourGame = [];
      for(let i=0;i<gameData.length;i++){
        if(gameData[i].GameType==this.gameFilter){
          this.ourGame.push(gameData[i]);
        }

      }
      return ('#getGames success');
    }
    this.ourGame = gameData;
    return 'Success';
  })
});


});