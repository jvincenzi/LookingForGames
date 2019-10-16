import { Component, OnInit } from '@angular/core';
import { GAMEBOARDS } from '../List-Game';
import { GameItem } from '../GameBoard';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})


export class GameBoardComponent implements OnInit {

  TheGames = GAMEBOARDS;


  gameNames= ["Dungeons and Dragons", "Pathfinder", "Monopoly"];
 
  selectedGameItem: GameItem;
 
  onSelect(PassedInGameItem: GameItem): void {
    this.selectedGameItem = PassedInGameItem;
  }

  constructor() { }

  ngOnInit() {
  }

}
