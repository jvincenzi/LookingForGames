const Login = require("../models/Login");
const User = require("../models/User");
//const UserCon = require('./UserController');
var bcrypt = require('bcryptjs'); // user to securely store passwords, use if we have time

// login 
exports.loginUser = (req, res) => { // this is working
    console.log("---------- IN loginUser ----------");/////////////////
    console.log('User Login info: {Username: ' + req.body.UserName + ', Password: ' + req.body.Password + '}' );///////
    console.log("Looking for UserName: " + req.body.UserName);
    User.findOne({UserName: req.body.UserName}, (err, user) => {
        
        if (err) {
            res.status(500).send(err);
        }
        else if (user==undefined)
        {
            console.log('The user was not found: user==undefined'); //////////////////////////////////////////
            res.status(404).send('user not found');
        }
        else
        {
            /* // Use this example if we have time
            bcrypt.compare(password, user.password,(err, isMatch)=>{
                if(err){
                    callback('server error');
                }else if(isMatch===true){
                    callback(null, 'login successfully');
                }else{
                    callback('login info incorrect');
                }
            });
            */
            if(user.Password == req.body.Password)
            {
                let token = user;
                token.Password = "**************";
                token.UID = Date.now().toString();
                
    
                // add the UID timeStamp to the mongoDB user record
                // when a user logis out wipe the UID prop
                //user.UID = token.UID;
                //UserCon.updateUser(user._id, user);
    
                //console.log('User Record Found: \n\f' + token); //////////////////////////////////////////
                res.status(200).json(token);
            }
            else
            {
                //console.log('No Joy!'); //////////////////////////////////////////
                res.status(500).send("Username or password is incorrect");
            }
        }
        //console.log("-------------------------------");////////////////
    });
};

