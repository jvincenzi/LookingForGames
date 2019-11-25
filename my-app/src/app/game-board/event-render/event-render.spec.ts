import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { eventRender } from './event-render';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GameEvent } from './GameEvent';
import { Token } from '../../Token';
import { CallNodeService } from '../../call-node.service'


describe('EventRender: ', () => {
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



  


  describe('Can Add Record: ', function(){ 
    beforeEach((done) => {
      fixture = TestBed.createComponent(eventRender);
      component = fixture.componentInstance;
      fixture.detectChanges();

      //let playerArr = [];
      let dummyGameEvent: GameEvent = new GameEvent();

      dummyGameEvent.Title = "TestCreate Title";
      //playerArr.push("TestCreate FirstName");
      //playerArr.push("TestCreate LastName");
      //playerArr.push("TestCreate UserName");
      //dummyGameEvent.CurrentPlayers.push(playerArr);
      console.log("/////// dummyGameEvent.Title: " + dummyGameEvent.Title);
      component.joinEvent(dummyGameEvent);

      setTimeout(() => {done();}, 2000);
    });


    /////////////////////////////////////////////////////////////////
    //
    //  Thanh put your test code in here >--+
    //                                      |
    //    +---------------------------------+
    //    |
    //    V
    describe('Thanh\'s test Can read Joseph\'s added Record: ', function(){  
      //beforeEach(function(done){
        //for refference// fixture = TestBed.createComponent(ShowTasksComponent);
        //for refference// component = fixture.componentInstance;
        //for refference// fixture.detectChanges();

        /* // Kurts example code setting up to finding a record
          component.foundTask._id = component.saved_id;
          console.log('just before call to find ' + component.saved_id );
          component.findTask();
          setTimeout(() => {done();}, 2000); 
        */


      //});

      // Kurts example code for finding a record
      it('should find new new record', function(){
        console.log('just before did it find new ' +  component.ourGame[7].Title );// 7
        expect( component.ourGame[7].Title ).toBe('TestCreate Title');// 7
      });
      


    // end of Thanhs Test
    ////////////////////////////////////////////////////////////////
    });

  });

  //////////////////////////////////////////////////////////////////
  // Sean's test goes here

  /* Kurts example
  describe('Can delete Record', function(){  
    beforeEach(function(done){
      component.selectedTask._id = component.saved_id;
      component.selectedTask.taskName = "TestCreate";
      console.log("task about to delete " + component.selectedTask._id );
      component.deleteTask();
      setTimeout(() => {done();}, 2000); 
    });

    describe('added Record should be gone', function(){  
      beforeEach(function(done){
        component.foundTask._id = component.saved_id;
        console.log('just before call to find ' + component.foundTask._id );
        component.findTask();
        setTimeout(() => {done();}, 2000); 
      });

      it('should not find deleted record', function(){
        expect( component.foundTask).toBe(null);
      });
    });  

  });
  */




  // end of Sean's test 
  //////////////////////////////////////////////////////////////////

  describe('is component created: ', function(){
    beforeEach(() => {
      fixture = TestBed.createComponent(eventRender);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  let myGameEvent: CallNodeService;

  
  /*
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
  */

});
