// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
// let nowDate = Date.now.toString();
// let expDate = new Date(
//   nowDate.getFullYear()+1, 
//   nowDate.getMonth(),
//   nowDate.getDate()
// );
=======

>>>>>>> 011747dec143ce44202fdb83313842e7c2401be2

const UserSchema = new Schema({
  // TESTING SCHEMA
  _id: {
    type: String,
    required: true,
    unique: true
  },
  UserName: {
    type: String, 
    required: true,
    unique: true
  },
  Password: {
    type: String, 
    //required: true
  },
  Email: {
    type: String, 
    required: true,
    //unique: true
  },
  FirstName: {
    type: String, 
    //required: true
  },
  LastName: {
    type: String, 
    //required: true
  },
  Telephone: {
    type: String, 
    required: false
  },
  DateOfBirth: {
    type: Date, 
    required: false
  },
  Country: {
    type: String, 
    required: false
  },
  Address: {
    type: String, 
    required: false
  },
  Address2: {
    type: String, 
    required: false
  },
  City: {
    type: String, 
    required: false
  },
  State: {
    type: String, 
    required: false
  },
  Zipcode: {
    type: String, 
    required: false
  },
  FreeAccount: {
    type: Boolean, 
    required: false
  },
  SubscriptionExp: {
    type: String, 
    required: false,
<<<<<<< HEAD
  //  default: expDate
=======
    //default: expDate
>>>>>>> 011747dec143ce44202fdb83313842e7c2401be2
  },
  SubscriptionLv: {
    type: String, //level (0=freeAccount, 1=monthly or 12=yearly)
    required: false
  },
  AdminAccess: {
    type: String, 
    default: 0,
    // 0 for normal or free users
    // 1 for Administrator
    // 2 for Sysop
    required: false
  },
  CurrentStatus: {
    type: String, 
    required: false
  },
  Location: {
    type: String, 
    required: false
  },
  createdOn: {
    type: Date,
    default: Date.now,  // this line means we don't have to overtly set the time 
    // the task was created, it will be set as we create a new document
    required: false
  },
  UID: {
    type: String,
    default: Date.now.toString(),
    required: false
  },
  userLatitude: {
    type: Number, 
    required: false
  },
  userLongitude: {
    type: Number, 
    required: false
  }
});

/*
  ///////////////////////
  // PRODUCTION SCHEMA //
  ///////////////////////
let expDate = new Date(
  Date.now.toString().substring(0, 4), 
  Date.now.toString().substring(5, 7), 
  Date.now.toString().substring(8, 10)
);
const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    default: Date.now.toString()
  },
  UserName: {
    type: String, 
    required: true,
    unique: true
  },
  Password: {
    type: String, 
    required: true
  },
  Email: {
    type: String, 
    required: true,
    unique: true
  },
  FirstName: {
    type: String, 
    required: true
  },
  LastName: {
    type: String, 
    required: true
  },
  Telephone: {
    type: String, 
    required: false
  },
  DateOfBirth: {
    type: Date, 
    required: true
  },
  Country: {
    type: String, 
    required: true
  },
  Address: {
    type: String, 
    required: true
  },
  Address2: {
    type: String, 
    required: false
  },
  City: {
    type: String, 
    required: true
  },
  State: {
    type: String, 
    required: true
  },
  Zipcode: {
    type: String, 
    required: true
  },
  FreeAccount: {
    type: Boolean, 
    required: false
  },
  SubscriptionExp: {
    type: String, 
    required: false,
    default: expDate
  },
  SubscriptionLv: {
    type: String, //level (0=freeAccount, 1=monthly or 12=yearly)
    required: false
  },
  AdminAccess: {
    type: String, 
    default: 0,
    // 0 for normal or free users
    // 1 for Administrator
    // 2 for Sysop
    required: false
  },
  CurrentStatus: {
    type: String, 
    required: false
  },
  Location: {
    type: String, 
    required: false
  },
  createdOn: {
    type: Date,
    default: Date.now,  // this line means we don't have to overtly set the time 
    // the task was created, it will be set as we create a new document
    required: false
  },
  UID: {
    type: String,
    default: Date.now.toString(),
    required: false
  },
  userLatitude: {
    type: Number, 
    required: false
  },
  userLongitude: {
    type: Number, 
    required: false
  }
});
*/

module.exports = mongoose.model("User", UserSchema);
