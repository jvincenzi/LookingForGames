// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  Title: {
    type:String, 
    required: false
  },
  GameType: {
    type:String, 
    required: false
  },
  LocationName: {
    type:String, 
    required: false
  },
  Location: {
    type:String, 
    required: false
  },
  Date: {
    type:String, 
    required: false
  },
  Restrictions: {
    type:String, 
    required: false
  },
  ReqPlayers: {
    type:Number, 
    required: false
  },
  MaxPlayers: {
    type:Number, 
    required: false
  },
  CurrentPlayers: {
    type:Array,
    required: false
  }
});

module.exports = mongoose.model("Game", GameSchema);