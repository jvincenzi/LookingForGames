// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

// edited to include my non-admin, user level account and PW on mongo atlas
// and also to include the name of the mongo DB that the collection is in (TaskDB)
//const dbURI ="mongodb+srv://bcuser:bcuser@cluster001-q7tna.mongodb.net/test?retryWrites=true&w=majority";  // LFG MongoDB
const dbURI ="mongodb+srv://bcuser2:bcuser2@cluster0-nbt1n.mongodb.net/TaskDB?retryWrites=true&w=majority";  // Kurts MongoDB

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const options = {
 	reconnectTries: Number.MAX_VALUE,
 	poolSize: 10,
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect(dbURI, options).then(
	() => {
		console.log(`----------------------------|     Success     |-----------------------------------`);
		console.log(" Database connection established!");
		console.log(`----------------------------------------------------------------------------------`);
		console.log(``);
	},
	err => {
		console.log(`-----------------------------| <<< Error >>> |------------------------------------`);
		console.log(" Failed to connect to Database instance due to: ", err);
		console.log(`----------------------------------------------------------------------------------`);
		console.log(``);
	}
);

// bring in our mongoose schema defintion defintion for a Task
require("../models/Task"); // Remove after LFG User stuff is working //////////////////////////////////
require("../models/User"); // LFG User Schema 