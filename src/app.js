const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
require('./db/conn');
const User = require('./models/userData');

const app = express();


app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/contact',(req, res) => {
    res.render('contact');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/contact', async (req, res) => {
    try {
        const newUser= new User({
            user: req.body.user,
            email: req.body.email,
            mobile: req.body.mobile,
            comment: req.body.comment,
        });
        await newUser.save();
        res.status(201).render('index');
    }catch(err) {
        res.status(500).render('error');
    }
});

app.listen(5000, () =>{
    console.log('listening on port 5000');
});