const Game = require("../models/Game");

// go to mongo and select network and allow any url to come in
// go to azure and turn on app logging so can see console.log messages


exports.createNewGame = (req, res) => {
    let newGame = new Game(req.body);
    console.log(newGame);
    newGame.save((err, game) => {
        if (err) {
        res.status(500).send(err);
        }
        res.status(201).json(game);
    });
};

