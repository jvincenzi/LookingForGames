const Comment = require("../models/Comment");

// go to mongo and select network and allow any url to come in
// go to azure and turn on app logging so can see console.log messages
exports.listAllComment = (req, res) => {
    console.log(">>>>>>>>> IN Comments <<<<<<<<<");
    Comment.find({}, (err, comment) => {
        if (err) {
        console.log(err);
        res.status(500).send(err);
        }
        res.status(200).json(comment);

        console.log("returned" + comment);
    });
};

exports.readComment = (req, res) => { // this is working
    console.log("---------- IN readComment ----------");/////////////////
  
    Comment.findById(req.params.commentid, (err, comment) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(comment);
   
  });
};

exports.createNewComment = (req, res) => {
    let newComment = new Comment(req.body);
    console.log(newComment);
    newComment.save((err, Comment) => {
        if (err) {
        res.status(500).send(err);
        }
        res.status(201).json(Comment);
    });
};

exports.deleteComment = (req, res) => {
    Comment.deleteOne({ _id: req.params._id }, (err, comment) => {  // don't know who changed the name from _id
        if (err) {
        res.status(404).send(err);
        }
        res.status(200).json({ message: "Comment was successfully deleted" });
    });
};