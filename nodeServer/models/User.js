// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  FirstName: {
    type:String, 
    required: false
  },
  LastName: {
    type:String, 
    required: false
  },
  Email: {
    type:String, 
    required: false
  },
  UserName: {
    type:String, 
    required: false
  },
  Password: {
    type:String, 
    required: false
  },
  Telephone: {
    type:String, 
    required: false
  },
  DateOfBirth: {
    type:Date, 
    required: false
  },
  Address: {
    type:String, 
    required: false
  },
  City: {
    type:String, 
    required: false
  },
  State: {
    type:String, 
    required: false
  },
  Zipcode: {
    type:String, 
    required: false
  },
  FreeAccount: {
    type:Boolean, 
    required: false
  },
  SubscriptionExp: {
    type:String, 
    required: false
  },
  SubscriptionLv: {
    type:String, //level (free, monthly or yearly)
    required: false
  },
  CurrentStatus: {
    type:String, 
    required: false
  },
  Location: {
    type:String, 
    required: false
  },
  createdOn: {
    type: Date,
    default: Date.now  // this line means we don't have to overtly set the time 
    // the task was created, it will be set as we create a new document
  }
});

module.exports = mongoose.model("User", UserSchema);