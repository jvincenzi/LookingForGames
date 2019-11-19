const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/UserController");
const loginController = require("./controllers/LoginController");
const gameController = require("./controllers/GameController");
const googleController = require("./controllers/GoogleController");
const CommentController = require("./controllers/CommentController");
const cors = require('cors')
// note the extra line in package.json to download this code


var corsOptions = {
  // this URL must match the URL that the Angular app will call from
  origin: 'http://localhost:4200', /////////////////////////////// LocalHost Config ///////////////////////////////
  //origin: 'https://lookingforgames2.azurewebsites.net', 
  optionsSuccessStatus: 200 
}
/* In call-node.service.ts swap:
    userNodeAddress (http://localhost:3000/users <--> http://lfgnodesrv.azurewebsites.net/users)
    gameNodeAddress (http://localhost:3000/games <--> http://lfgnodesrv.azurewebsites.net/games) 
*/

// Monog db instance connection
require("./config/db");
const app = express();

//this._baseUrl = 'http://localhost:3000/';
const port = process.PORT || 3000; /////////////////////////////// LocalHost Config ///////////////////////////////
//const port = process.env.PORT || 80; ///////////////////////////////// Azure Host Config //////////////////////////////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS code to our app
app.use(cors(corsOptions))   

// API ENDPOINTS
// not using the Express Router code, instead just listing them each of these 5 routed call one of the 5 methods defined in taskController
// which in turn call Mongo Atlas, each of those 5 do a return to the client notive they are "keyed", but HTTP request type, get, put, etc

app
  .route("/users")
  .get(userController.listAllUsers)
  .post(userController.createNewUser);

app
  .route("/users/:userid")
  .get(userController.readUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

app
  .route("/signin")
  .post(loginController.loginUser);

app
  .route("/games")
  .get(gameController.listAllGames)
  .post(gameController.createNewGame);

app
  .route("/games/:gameid")
  .delete(gameController.deleteGame)
  .put(gameController.joinGame);

app
  .route("/getDistance/:location?destination")
  .get(googleController.getDistance);

app
  .route("/comment")
  .get(CommentController.listAllComment)
  .post(CommentController.createNewComment)

  app
  .route("/comment/:commentid")
  .get(CommentController.readComment)
  .delete(CommentController.deleteComment);

  
app.listen(port, () => {
  console.log(`--------------------------------------------------------------------------------`);
 	console.log(` Server running at http://localhost:${port}`);
	console.log(`--------------------------------------------------------------------------------`);
});



