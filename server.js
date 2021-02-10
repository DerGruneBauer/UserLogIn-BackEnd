
//creates method to utilize express
const express = require('express');
//creates the base of the app by creating the express method. 
const app = express();
const users = require('./routes/users');
//below two lines require env variables to be used
const dotenv = require('dotenv');
dotenv.config();
//setting variable equal to whichever port you want it to be listening on
const port = process.env.PORT;

//npm install cors to connect front/back end
const cors = require("cors");
app.use(cors());

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/users', users);

//listens and then starts function that lets you know the app is listening for commands. 
//Port variable is generally an env variable as it is usually set outside of the users control
app.listen(port, () => console.log(`listening on port ${port}`));


//node server.js (or whatever file is called) to run the server and start listening on the port number
//without nodemon press control C to stop the server and restart it