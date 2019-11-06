import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'event-dialog',
  templateUrl: './event-dialog.html',
  styleUrls: ['./event-dialog.css']
})


export class eventDialog {
  options: FormGroup;
  name: String;
  comment: String;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }



 
} 