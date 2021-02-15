const express = require('express');
const app = express();
const users = require('./routes/users');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

//npm install cors
const cors = require("cors");
app.use(cors());

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}))

app.use(express.json())

// app.use(express.static('public'))

app.use('/users', users);

app.listen(port, () => console.log(`listening on port ${port}`));
