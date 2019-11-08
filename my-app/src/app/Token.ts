export class Token {
    _id: string; 
    FirstName: string;
    LastName: string;
    //Email: string;
    UserName: string;
    //Password: string;
    //Telephone: string;
    //DateOfBirth: Date;
    //Address: string;
    //City: string;
    //State: string;
    //Zipcode: number;
    FreeAccount: boolean;
    SubscriptionExp: Date;
    SubscriptionLv: number;//level (monthly or yearly)
    CurrentStatus: string; // online or offline
    Location: string; // location in the world, GPS cords &/or address
    //createdOn: string;
  }