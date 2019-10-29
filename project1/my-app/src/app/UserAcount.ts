export class UserAcount {
  _id: String;
  FirstName: string;
  LastName: string;
  Email: string;
  UserName: string;
  Password: string;
  Telephone: string;
  DateOfBirth: Date;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  FreeAccount: boolean;
  SubscriptionExp: Date;
  SubscriptionLv: number;//level (monthly or yearly)
  CurrentStatus: string;
  Location: string;
  createdOn: Date;
}