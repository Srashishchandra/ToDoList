const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.get("/", function(req,res){

let day = date();

res.render("list",{listTitle:day,newListItem:items});

});

app.post("/",function(req,res){
let item = req.body.newItem;

  if(req.body.list === "Work List"){
    console.log(req.body);
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    console.log(req.body.list);
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work", function(req,res){
  res.render("list",{listTitle:"Work List", newListItem: workItems});
});

app.get("/about", function(req,res){
  res.render("about");
});




app.listen("2000", function(){
  console.log("Server is running on Sapper");
});
