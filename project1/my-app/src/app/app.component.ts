import { Component } from '@angular/core';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
 
})


export class AppComponent {
  
 

  title = 'my-app';

 
    tabLoadTimes: Date[] = [];
  
    getTimeLoaded(index: number) {
      if (!this.tabLoadTimes[index]) {
        this.tabLoadTimes[index] = new Date();
      }
  
      return this.tabLoadTimes[index];
    }
  }
  


