//Express is used to give the skeleton or structure to the API. allows us to easily CRUD items intstead of using conditionals
//install npm joi to help with user validation without a bunch of conditionals. 
const express = require('express');
const users = express.Router();
bodyParser = require('body-parser').json();

const userArray = [
    {id: 0, fName: "John", lName: "Doe", email: "JDoe@email.com" },
    {id: 1, fName: "Remi", lName: "Green", email: "Rgreen@email.com" },
    {id: 2, fName: "Jack", lName: "Smith", email: "JSmith@email.com" },
    {id: 3, fName: "Jack", lName: "Smith", email: "JSmith@email.com" },
]
//These are considered endpoints
//GET = returning either all of the items or a specific item based on id/any other identifier.
//    /api/customers/
//    /api/customers/1
//PUT = Updates a specific item with given id and values to update
//    /api/customers/1
//POST = Creates an item with given data. does not require id
//    /api/customers
//DELETE = Deletes an item from given id
//    /api/customers/1

//anything in the first half is REQUIRED. Anything that comes after a ? is optional parameter
users.get('/:id', (req, res) => {
    //this sends back whichever user - identified by the inputted id
    // res.status(200).send(userArray[req.params.id]); This also works.
    const user = userArray.find(u => u.id == parseInt(req.params.id));
    if(!user){
        res.status(404).send("The user with the given ID was not found.");
    } else { 
        res.send(user);
    }
    
})

users.get('/', (req, res) => {
    //this sends back entire array
    console.log(req.params);
    res.status(200).send(userArray);
});

users.post('/', bodyParser, (req, res) => {
    if (!req.body.fName || !req.body.lName || !req.body.email){
        //400 bad request
        res.status(400).send('First name, last name and email are required to submit.');
        return;
    }
    const user = {
        id: userArray.length + 1,
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
    };
    userArray.push(user);
    res.set('content-type', 'text/plain');
    res.status(201).send(user);
    // res.status(201).res.send(JSON.stringify(user));
    // res.send(userArray);
});

users.put('/:id', (req, res) => {
    const user = userArray.find(u => u.id == parseInt(req.params.id));
    if(!user){
        res.status(404).send("The user with the given ID was not found.");
        return;
    } else { 
        res.send(user);
    }
    user.fName = req.body.fName;
    user.lName = req.body.lName;
    res.send(user);
});

users.delete('/:id', (req, res) => {
    const user = userArray.find(u => u.id == parseInt(req.params.id));
    if(!user){
        res.status(404).send("The user with the given ID was not found.");
        return;
    } else { 
        res.send(user);
    }
    const index = userArray.indexOf(user);
    userArray.splice(index, 1);
    console.log(userArray);
    res.send(userArray);
    res.sendStatus(204);
})

module.exports = users;