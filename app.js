const express = require("express");

const https = require("https");

const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var items = [];

app.get("/", function(req, res){

    
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    //This one way to find what day it is
    /*var currentDay = today.getDay();
    var day = "";

    switch(currentDay){
        case 0:
            day = "Sunday";
            break; 
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break; 
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;  
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;      
        default: 
        console.log("JUbba");                                             
    }*/

    res.render('list', {day_of_week : day, items_array : items});
})

app.post("/", function(req, res){
    var item = req.body.new_item;
    items.push(item);
    console.log("The items inside the array " + items);
    res.redirect("/");
    
})

app.listen(3000, function(){
    console.log("live on port 3000");
})