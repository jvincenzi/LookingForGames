import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
//import { GameEvent } from '../GameEvent';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newGame: GameEvent = new GameEvent();

  title = new FormControl('');
  gameName = new FormControl('');
  location = new FormControl('');
  date = new FormControl('');
  restrictions = new FormControl('');
  reqPlayers = new FormControl('');
  maxPlayers = new FormControl('');
  

  addRecord(): void {

    this.newGame._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newGame.Title = this.title.value;

    //this.callNodeService.insertGame(this.newGame).subscribe();
  }

  submitSignupForm() {
    //////////////////////////////////
    // Put field verification here. //
    //////////////////////////////////
    
    this.addRecord();
  }

  //constructor(private formBuilder: FormBuilder) { }
  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() { }

}