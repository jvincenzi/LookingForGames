import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-ToDos';
import { ToDoItem } from '../ToDoItem';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
  
})

export class ToDoComponent implements OnInit {
 TheToDOs = TODOS;
 
 selectedToDoItem: ToDoItem;

 onSelect(PassedInToDoItem: ToDoItem): void {
   this.selectedToDoItem = PassedInToDoItem;
 }

  constructor() { }

  ngOnInit() {
    
  }

}
