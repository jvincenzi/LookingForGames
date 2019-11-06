const Game = require("../models/Game");

// go to mongo and select network and allow any url to come in
// go to azure and turn on app logging so can see console.log messages
exports.listAllGames = (req, res) => {
    console.log(">>>>>>>>> IN listAllGames <<<<<<<<<");
    Game.find({}, (err, game) => {

        if (err) {
        console.log(err);
        res.status(500).send(err);
        }
        res.status(200).json(game);

        console.log("returned" + game);
    });
};

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

exports.deleteGame = (req, res) => {
    Game.deleteOne({ _id: req.params.gameid }, (err, game) => {  // don't know who changed the name from _id
        if (err) {
        res.status(404).send(err);
        }
        res.status(200).json({ message: "User Event successfully deleted" });
    });
};