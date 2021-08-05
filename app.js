const { RSA_NO_PADDING } = require("constants");// what is this for??
const express = require("express");

const https = require("https");

const date = require(__dirname + "/date.js");

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.static("public")); // this enables express to server up static files at a specified folder so that we can link css, images etc. to our templates. 

app.set('view engine', 'ejs');

var items = [];
let workItems = [];

app.get("/", function(req, res){

    let day = date.getDate(); //this runs the function that is bound to the date module export which is an object.
        
    res.render('list', {listTitle : day, items_array : items});
})

app.post("/", function(req, res){
    let item = req.body.new_item;
    if (req.body.list === "work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
        //var item = req.body.new_item;
        items.push(item);
        console.log("The items inside the array " + items);
        res.redirect("/");
    }

    
    
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List",  items_array : workItems})
})

app.post("/work", function(req, res){
    

    workItems.push(item);

    res.redirect("/work");
})

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("live on port 3000");
})