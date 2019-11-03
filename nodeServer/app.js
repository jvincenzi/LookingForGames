const express = require("express");
const bodyParser = require("body-parser");
//const taskController = require("./controllers/TaskController");
const userController = require("./controllers/UserController");
const cors = require('cors')
// note the extra line in package.json to download this code

var corsOptions = {
  // this URL must match the URL that the Angular app will call from
  origin: 'http://localhost:4200', /////////////////////////////// LocalHost Config ///////////////////////////////  
  //origin: 'lookingforgames.azurewebsites.net/', 
  optionsSuccessStatus: 200 
}

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


// LFG Routes 
app
  .route("/users")
  .get(userController.listAllUsers)
  .post(userController.createNewUser);

app
  .route("/users/:userid")
  .get(userController.readUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);
  

// Remove after LFG User stuff is working //////////////////////////////////
// app
//   .route("/tasks/:taskid")
//   .get(taskController.readTask)
//   .put(taskController.updateTask)
//   .delete(taskController.deleteTask); // Remove after LFG User stuff is working //////////////////////////////////

app.listen(port, () => {

  //console.log(`Server running at http://localhost:${port}`);
  console.log(`--------------------------------------------------------------------------------`);
 	console.log(` Server running at http://localhost:${port}`);
	console.log(`--------------------------------------------------------------------------------`);
	// console.log(``);
});