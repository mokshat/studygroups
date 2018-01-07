
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("login");
});

app.get("/login", function(req, res){
    res.render("findGroup");
});
app.get("/duyhoang", function(req, res){
    res.render("duyhoang");
});
app.get("/amyeng", function(req, res){
    res.render("amyeng");
});
app.get("/jacob", function(req, res){
    res.render("jacob");
});
app.get("/kieren", function(req, res){
    res.render("kieren");
});
app.get("/zac", function(req, res){
    res.render("zac");
});
app.get("/zach", function(req, res){
    res.render("zach");
});
app.get("/chang", function(req, res){
    res.render("chang");
});
app.get("/austin", function(req, res){
    res.render("austin");
});
app.get("/moks", function(req, res){
    res.render("moks");
});



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Study Group Server Has Started!");
});

