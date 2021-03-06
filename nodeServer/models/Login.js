// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  UserName: {
    type: String, 
    required: true
  },
  Password: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model("Login", LoginSchema);


