import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  disableSelect = new FormControl(false);


  selectedGame = "What do you want to play today?";
  gameNames= ["Dungeons and Dragons", "Pathfinder", "Monopoly"];

  constructor() { }

  ngOnInit() {
  }

}
