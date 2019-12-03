export class UserAccount {
  _id: string = "Default";
  UserName: string = "Default";
  Password: string = "Default";
  Email: string = "Default";
  FirstName: string = "Default";
  LastName: string = "Default";
  Telephone: string = "Default";
  DateOfBirth: Date;
  Country: string = "Default"; // new
  Address: string = "Default";
  Address2: string = "Default"; // new
  City: string = "Default";
  State: string = "Default";
  Zipcode: number = 0;
  FreeAccount: boolean = true;
  SubscriptionExp: Date;
  SubscriptionLv: number = 0;//level (0=freeAccount, 1=monthly or 12=yearly)
  AdminAccess: string = "Default";  // new
  CurrentStatus: string = "Default";
  Location: string = "Default";
  createdOn: Date;
  UID: string = "Default"; // new
  userLatitude: number = 40; // new
  userLongitude: number = 100; // new
}

