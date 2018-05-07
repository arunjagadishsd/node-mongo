const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db');

const {Todo,User} = require('../models');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let {text} = req.body;

    let todo = new Todo({text});
    todo.save().then(doc => res.send(doc)).catch(e => res.send(e));
});

app.listen(3000, () => {
    console.log('Server Started At 3000');
});