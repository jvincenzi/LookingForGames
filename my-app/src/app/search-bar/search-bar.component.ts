import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchSelection } from './SearchSelection';
import { Token } from '../Token';

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
  //sessionTokenData: Token;
  @Input() sessionTokenDataInput: Token = new Token();;
  @Output() sessionTokenDataOutput = new EventEmitter<Token>();
  selectionData: string;
  hideButton: boolean = true;
  //searchSelection: SearchSelection;
  selectedGame: string;
  gameNames: Gamez[] = [
    { value: 'd&d', viewValue: "Dungeons & Dragons"},
    { value: 'pathfinder', viewValue: "Pathfinder"},
    { value: 'monopoly', viewValue: "Monopoly"},
    { value: 'go-fish', viewValue: "Go Fish"},
    { value: 'rifts', viewValue: "Rifts"}
  ];
  

  constructor() {
    //this.searchSelection = new SearchSelection();
    //this.sessionTokenDataInput = new Token();
  }

  ngOnInit() {

  }

  findThisGame() {
    
    console.log("///////////////////////////////////// In search-bar /////////////////////////////////////");
    console.log("Selected game, this.selectedGame.value: " + this.selectedGame);
    //console.log("Selected game, this.selectionData.value: " + this.searchSelection.selectionData);
    
    //this.searchSelection.selectionData = this.selectedGame;
    this.sessionTokenDataInput.FirstName = this.selectedGame; // change /FirstName to anothe prop once you get this working ///////////////
    console.log("Selected game, this.sessionTokenDataInput.FirstName: " + this.sessionTokenDataInput.FirstName);
    this.sessionTokenDataOutput.emit(this.sessionTokenDataInput);

    

  }

  onClick() {
    this.hideButton = false;
  }

}
/*
import {Component} from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

//
// @title Basic select
//
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
*/
