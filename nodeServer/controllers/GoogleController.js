exports.getDistance = (req, res) => {
    console.log(">>>>>>>>> IN GET DISTANCE <<<<<<<<<");
    Game.find({}, (err, game) => {

        if (err) {
        console.log(err);
        res.status(500).send(err);
        }
        res.status(200).json(game);

        console.log("returned" + game);
    });

    
};