import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'event-log',
  templateUrl: './event-log.html',
  styleUrls: ['./event-log.css']
})



export class eventLog {



  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

 
}