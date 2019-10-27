import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  atHome = true;

  newPage (){
    this.atHome = false;
  }

  renderHome (){
    this.atHome = true;
  }
}
