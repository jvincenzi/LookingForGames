// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  FirstName: {
    type: String, 
    //required: true
  },
  LastName: {
    type: String, 
    //required: true
  },
  Email: {
    type: String, 
    required: true,
    //unique: true
  },
  UserName: {
    type: String, 
    required: true,
    //unique: true
  },
  Password: {
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
  Address: {
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
    required: false
  },
  SubscriptionLv: {
    type: String, //level (free, monthly yearly, admin)
    required: false
  },/*
  AdminAccess: {
    type: String, 
    // 0 for normal or free users
    // 1 for Moderator
    // 2 for Administrator
    required: false
  },*/
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
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
