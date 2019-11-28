import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Token } from '../Token';
import { CallNodeService } from '../call-node.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


export interface Gamez {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  sessionTokenData: Token;
  @Input() localData: Token = new Token();
  //@Output() sessionTokenDataOutput = new EventEmitter<Token>(); // emits Token 
  @Output() searchSelectionEmitter = new EventEmitter<string>(); // emits string
  selectionData: string;
  hideButton: boolean = true;
  selectedGame: string;





  hideUserList: Boolean = false;



  gameNames: Gamez[] = [
    { value: 'Dungeons and Dragons', viewValue: "Dungeons & Dragons"},
    { value: 'Pathfinder', viewValue: "Pathfinder"},
    { value: 'Monopoly', viewValue: "Monopoly"},
    { value: 'go-fish', viewValue: "Go Fish"},
    { value: 'rifts', viewValue: "Rifts"}
  ];
  



  constructor() {
  }

  ngOnInit() {
  }

  findThisGame() {
    console.log(" <<<<<< In search-bar >>>>>> ");
    //console.log("Selected game, this.selectedGame.value: " + this.selectedGame);
    this.localData.Location = this.selectedGame.toString(); // change /Location to another prop once you get this working ///////////////
    console.log("Selected game, this.localData.Location: " + this.localData.Location);
    this.searchSelectionEmitter.emit(this.localData.Location);
  }

  onClick() {
    this.hideButton = false;
  }

}
