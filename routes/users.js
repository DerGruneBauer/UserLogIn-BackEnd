const express = require('express');
const users = express.Router();
bodyParser = require('body-parser').json();
// users.use(express.static('public'));
const pool = require("../connection");

function getTable(req, res) {
    pool.query("SELECT * FROM USERS").then(result => {
        res.json(result.rows)
    });
};

users.get('/', function(req, res) {
    getTable(req, res);
})

// const userArray = [
//     {id: 0, fName: "John", lName: "Doe", email: "JDoe@email.com", password: "1234", pic: "Default.png", followers: 10, following: 80},
//     {id: 1, fName: "Remi", lName: "Greenbauer", email: "Rgreen@email.com", password: "1234", pic: "Remi.jpg", followers: 6, following: 25},
//     {id: 2, fName: "Jack", lName: "Smith", email: "JSmith@email.com", password: "1234", pic: "Default.png", followers: 5, following: 2},
//     {id: 3, fName: "Jane", lName: "Jay", email: "JJay@email.com", password: "1234", pic: "Default.png", followers: 4, following: 16},
//     {id: 4, fName: "Boris", lName: "Crowther", email: "BCrowther@email.com", password: "1234", pic: "Default.png", followers: 7, following: 28},
// ]

// users.get('/', (req, res) => {
//     console.log(req.params);
//     res.status(200).send(userArray);
// });

// users.get('/:id', (req, res) => {
//     const user = userArray.find(u => u.id == parseInt(req.params.id));
//     if(!user){
//         res.status(404).send("The user with the given ID was not found.");
//     } else { 
//         res.send(user);
//     }
// })


// users.get(`/images/`, function (req, res) {
 
// });

// users.post('/', bodyParser, (req, res) => {
//     if (!req.body.fName || !req.body.lName || !req.body.email){
//         res.status(400).send('First name, last name and email are required to submit.');
//         return;
//     }
//     const user = {
//         id: userArray.length,
//         fName: req.body.fName,
//         lName: req.body.lName,
//         email: req.body.email,
//         password: req.body.password,
//         pic: "Default.png",
//         followers: 0,
//         following: 0,
//     };
//     userArray.push(user);
//     res.set('content-type', 'text/plain');
//     res.status(201).send(userArray);
// });

// users.put('/:id', (req, res) => {
//     const user = userArray.find(u => u.id == parseInt(req.params.id));
//     if(!user){
//         res.status(404).send("The user with the given ID was not found.");
//         return;
//     } else { 
//         res.send(user);
//     }
//     user.fName = req.body.fName;
//     user.lName = req.body.lName;
//     res.send(userArray);
// });

// users.delete('/:id', (req, res) => {
//     const user = userArray.find(u => u.id == parseInt(req.params.id));
//     const index = userArray.indexOf(user);
//     if(!user){
//         res.status(404).send("The user with the given ID was not found.");
//         return;
//     } else { 
//         userArray.splice(index, 1);
//         res.status(204).send(userArray);
//     }
    
// })

module.exports = users;