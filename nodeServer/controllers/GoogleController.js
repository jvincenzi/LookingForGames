const GoogleDistanceApi = require('google-distance-api');

exports.getDistance = (req, res) => {
    console.log(">>>>>>>>> IN GET DISTANCE <<<<<<<<<");

    const options = {
      key: 'AIzaSyABCbdxy8xO6iftYiU4p-cNbGuAt71mIDM',
      origins: [req.location],
      destinations: [req.destination]
    }
    const data  = GoogleDistanceApi.distance(options, (err, data) => {
      if(err) {
          return console.log(err);
      }
   
      console.log(data);
      res.send(data);
  });
};

/*
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyABCbdxy8xO6iftYiU4p-cNbGuAt71mIDM'
});
*/

/*
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
*/