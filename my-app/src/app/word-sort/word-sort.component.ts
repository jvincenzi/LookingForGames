import { Component, OnInit } from '@angular/core';
import { SafePropertyRead } from '@angular/compiler';

@Component({
  selector: 'app-word-sort',
  templateUrl: './word-sort.component.html',
  styleUrls: ['./word-sort.component.css']
})
export class WordSortComponent implements OnInit {
  userWord = "foo";
  arr = [];
  sorted = [];

  sortString(userWord){
    this.arr = userWord.split('');
    this.sorted = this.arr.sort();
    return this.sorted.join('');
  }

  constructor() { }

  ngOnInit() {
  }

}
