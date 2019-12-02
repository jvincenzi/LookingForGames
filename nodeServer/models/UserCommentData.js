const mongoose = require("mongoose");
const Schema = mongoose.Schema
const UserCommentDataSchema = new Schema({
  _id: {
    type:String,
    required: false
  },
  Users_id: {
    type:String,
    required: false
  },
  UserName: {
    type:String, 
    required: false
  },
  Comment: {
    type:String, 
    required: false
  }
});

module.exports = mongoose.model("UserCommentData", UserCommentDataSchema);