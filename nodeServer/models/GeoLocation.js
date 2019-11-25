const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const geolocationSchema = new Schema({
  myLat: {
    type: String, 
    required: true
  },
  myLon: {
    type: String, 
    required: true
  },
  eventLocation: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model("geolocation", geolocationSchema);