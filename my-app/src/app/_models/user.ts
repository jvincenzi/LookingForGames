export class User {
    _id: string;
    UserName: string;
    Password: string;
    Email: string;
    FirstName: string;
    LastName: string;
    Telephone: string;
    DateOfBirth: Date;
    Country: string; // new
    Address: string;
    Address2: string; // new
    City: string;
    State: string;
    Zipcode: number;
    FreeAccount: boolean;
    SubscriptionExp: Date;
    SubscriptionLv: number;//level (0=freeAccount, 1=monthly or 12=yearly)
    AdminAccess: string;  // new
    CurrentStatus: string;
    Location: string;
    createdOn: string;
    UID: string; // new
    userLatitude: number; // new
    userLongitude: number; // new
  }