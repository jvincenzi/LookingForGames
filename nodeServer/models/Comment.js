// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  _id: {
    type:String,
    required: false
  },
  Name: {
    type:String, 
    required: false
  },
  Comment: {
    type:String, 
    required: false
  },
  Date: {
    type:String, 
    required: false
  }

});

module.exports = mongoose.model("Comment", CommentSchema);