export class UserAccount {
  _id: string; // change 11/03/2019: String --> string
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
  AdminAccess: string;
  CurrentStatus: string;
  Location: string;
  createdOn: string;
  UID: string;
}