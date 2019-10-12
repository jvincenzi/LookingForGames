import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome-checker',
  templateUrl: './palindrome-checker.component.html',
  styleUrls: ['./palindrome-checker.component.css']
})
export class PalindromeCheckerComponent implements OnInit {
  userString = "";

  checkForPalindrome()
  {
    if(this.inputIsAPalindrome())
    {
      return 'IS';
    }
    else if(!this.inputIsAPalindrome())
    {
      return 'IS NOT';
    }
  }

  inputIsAPalindrome()
  {
    return this.userString == this.userString.split('').reverse().join('');
  }

  constructor() { }

  ngOnInit() {
  }
}
