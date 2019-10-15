import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  selectedGame = "What do you want to play today?";
  gameNames= ["Dungeons and Dragons", "Pathfinder", "Monopoly"];

  constructor() { }

  ngOnInit() {
  }

}
