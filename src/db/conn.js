const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mobUserData").then(()=> {
    console.log("Database Successfully connected");
}).catch((err)=>{
    console.log("Error connecting to Database");
})