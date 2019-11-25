const GeoLocation = require("../models/GeoLocation");

exports.getDistance = (req, res) => {
  console.log(">>>>>>>>> IN GET DISTANCE <<<<<<<<<");
  let newLocation = new GeoLocation(req.body);
  /*
  console.log("/// newLocation.myLat: " + newLocation.myLat);
  console.log("/// newLocation.myLon: " + newLocation.myLon);
  console.log("/// newLocation.eventLocation: " + newLocation.eventLocation);
  */
 
  const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyABCbdxy8xO6iftYiU4p-cNbGuAt71mIDM'
  });
  
  googleMapsClient.distanceMatrix({
    origins: [newLocation.myLat.toString() + "," + newLocation.myLon.toString()],
    destinations: newLocation.eventLocation
  }, function(err, result) {
    if (!err) {
      
      console.log(result.json);
      console.log('\r\n\r\n------lets see whats inside the \'rows\' array-------\r\n');
      console.log(result.json.rows[0]);
      console.log('\r\n------lets see whats inside the \'elements\' array-------\r\n');
      console.log(result.json.rows[0].elements[0]);
      console.log('\r\n-----------------------------\r\n');
      console.log('result.json.rows[0].elements[0].distance.value: 0' + result.json.rows[0].elements[0].distance.value);
      console.log("You are " + result.json.rows[0].elements[0].distance.value + " meters from the event");

      res.status(200).json(result);
    } else {
      console.log(err);
      res.status(500).send(err);
    }
  }); 
  
};


////////////////////////////////////////////////////////////////////////

/*
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyABCbdxy8xO6iftYiU4p-cNbGuAt71mIDM'
});
*/

/*// unedited copy
exports.getDistance = (req, res) => {
  console.log(">>>>>>>>> IN GET DISTANCE <<<<<<<<<");

  googleMapsClient.distanceMatrix({
    origins: req.location,
    destinations: req.destination

  }, function(err, response) {
    if (!err) {
      res.status(200).json(response.json.results);

      console.log("returned" + response.json.results)
    } else {
      console.log(err);
      res.status(500).send(err);
    }
  }); 
};
*/
