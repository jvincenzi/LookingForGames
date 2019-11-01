const User = require("../models/User");

// go to mongo and select network and allow any url to come in
// go to azure and turn on app logging so can see console.log messages
exports.listAllUsers = (req, res) => {
    console.log(">>>>>>>>>>>>>> IN listAllUsers <<<<<<<<<");
    User.find({}, (err, user) => {

        if (err) {
        console.log(err);
        res.status(500).send(err);
        }
        res.status(200).json(user);

        console.log("returned" + user);
    });
};

exports.createNewUser = (req, res) => {
    let newUser = new User(req.body);
    console.log(newUser);
    newUser.save((err, user) => {
        if (err) {
        res.status(500).send(err);
        }
        res.status(201).json(user);
    });
};

exports.readUser = (req, body) => {
    User.findById(req.params.userid, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
    console.log('user id at server is ' + req.params.userid);
    User.findOneAndUpdate(
        { _id: req.params.userid },  // don't know who changed the name from _id
        req.body,
        { new: true },  // true or false to let it add if not present?
        (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log(user);
        res.status(200).json(user);
        }
    );
};

exports.deleteUser = (req, res) => {
    User.remove({ _id: req.params.userid }, (err, user) => {  // don't know who changed the name from _id
        if (err) {
        res.status(404).send(err);
        }
        res.status(200).json({ message: "User Account successfully deleted" });
    });
};