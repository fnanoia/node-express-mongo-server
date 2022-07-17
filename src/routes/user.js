const express = require('express');
const userSchema = require("../models/userSchema");

const router = express.Router();

//configurando Endpoints

//get users
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
    
});


//get user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message : err}));

});

//Create user
router.post('/users', (req, res) => {
    const newUser = userSchema(req.body);
    newUser
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message : err}));

});


//update user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email, country, telephone } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {name, age, email, country, telephone } })
        .then((data) => res.json(data))
        .catch((err) => res.json({message : err}));

});

//delete user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({message : err}));

});

module.exports = router;
