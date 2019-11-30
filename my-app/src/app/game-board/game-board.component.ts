import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../Token';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {
  sessionTokenData: Token;
  weAreTestingThen: boolean = true;
  constructor(private router: Router) { 
    //console.log('////////////////////////////////////////////////\r\nGame-Board:\r\nsessionToken _id:       ' + history.state.sessionToken._id +"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName +"\r\nsessionToken Search Selection:   " + history.state.sessionToken.Location+'\r\n////////////////////////////////////////////////');
    this.sessionTokenData = new Token();
  }

  ngOnInit() {
    if(history.state.sessionToken == undefined || history.state.sessionToken._id == undefined || history.state.sessionToken._id == "Default"){
      //console.log('////////////////////////////////////////////////\r\nSearch-bar:\r\nhistory.state.sessionToken _id:       ' + history.state.sessionToken._id+"\r\nhistory.state.sessionToken FirstName: " + history.state.sessionToken.FirstName+"\r\nhistory.state.sessionToken Address:   " + history.state.sessionToken.Address+'\r\nhistory.state.sessionToken.userLatitude:    ' + history.state.sessionToken.userLatitude + '\r\nhistory.state.sessionToken.userLongitude:   ' + history.state.sessionToken.userLongitude + '\r\n////////////////////////////////////////////////');
    
      console.log(">>> You must be logged in to view this page. Rerouting you to sign in page >>>");
      this.router.navigate(['/signIn', {state: {sessionToken: this.sessionTokenData}}]);
    }else{
      console.log('////////////////////////////////////////////////\r\nGame-Board:\r\nhistory.state.sessionToken _id:       ' + history.state.sessionToken._id +"\r\nsessionToken FirstName: " + history.state.sessionToken.FirstName +"\r\nsessionToken Search Selection:   " + history.state.sessionToken.Location+'\r\n////////////////////////////////////////////////');
    }
  }
}

 




 