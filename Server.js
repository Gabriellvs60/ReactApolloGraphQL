const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});
const Recipe = require('./models/Recipe');
const User = require('./models/User');

//Connects to database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))
.catch(err => console.error(err));

//Initializes Application
const app = express();

const PORT = process.env.PORT || 444;

app.listen(PORT, () => {
    console.log(`server listening on 
    ${PORT}`);
})