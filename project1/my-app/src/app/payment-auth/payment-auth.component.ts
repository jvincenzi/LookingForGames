import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment-auth',
  templateUrl: './payment-auth.component.html',
  styleUrls: ['./payment-auth.component.css']
})
export class PaymentAuthComponent implements OnInit {

  nameOnCard = new FormControl('');
  creditCardNumnber = new FormControl('');
  expirationMonth = new FormControl('');
  expirationYear = new FormControl('');
  cVV = new FormControl('');
  monthToMonthBilling = new FormControl('');
  yearlyBilling = new FormControl('');
  

  submitCCForm() {
    //this.eMailAddress.setValue('sonoojaiswal@javatpoint.com');
  }

  constructor() { }

  ngOnInit() {
  }

}
