const User = require("../models/User");

// go to mongo and select network and allow any url to come in
// go to azure and turn on app logging so can see console.log messages

exports.listAllUsers = (req, res) => { // this is working
    console.log("---------- IN listAllUsers ----------");/////////////////
    User.find({}, (err, user) => {
        if (err) {
        console.log(err);
        res.status(500).send(err);
        }
        res.status(200).json(user);
        //console.log("returned" + user);////////////////////////////////
    });
};

exports.readUser = (req, res) => { // this is working
    console.log("---------- IN readUser ----------");/////////////////
    //console.log('User ID at server is ' + req.params.userid);///////
    User.findById(req.params.userid, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
    //console.log("returned" + user);////////////////////////////////
    //console.log("-------------------------------");////////////////
  });
};

exports.updateUser = (req, res) => {
    console.log("---------- IN updateUser ----------");
    //console.log('user id at server is ' + req.params.userid.toString());
    User.findOneAndUpdate(
        { _id: req.params.userid },  // don't know who changed the name from _id
        req.body,
        { new: true },  // true or false to let it add if not present?
        (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            //console.log(user);
            res.status(200).json(user);
        }
    );
    //console.log("---------------------------------");
};

exports.deleteUser = (req, res) => { // this is working
    console.log("---------- IN deleteUser ----------");/////////////////////
    //console.log('User ID at server is ' + req.params.userid);/////////////
    User.deleteOne({ _id: req.params.userid }, (err, user) => {
        if (err) {
        res.status(404).send(err);
        }
        res.status(200).json({ message: "User Account successfully deleted" });
    });
    //console.log("---------------------------------");/////////////////////
};

exports.createNewUser = (req, res) => { // this is working
    let newUser = new User(req.body);
    console.log("---------- IN createNewUser ----------");/////////////
    //console.log(newUser);////////////////////////////////////////////
    newUser.save((err, user) => {
        if (err) {
        res.status(500).send(err);
        }
        res.status(201).json(user);
    });
    //console.log("---------------------------------");////////////////
};