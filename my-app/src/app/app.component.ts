import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { UserAccount } from './UserAccount';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: UserAccount;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/signIn']);
  }
}
//   title = 'my-app';
//   atHome = true;

//   newPage (){
//     this.atHome = false;
//   }

//   renderHome (){
//     this.atHome = true;
//   }
// }
