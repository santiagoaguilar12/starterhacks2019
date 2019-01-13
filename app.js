var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/dashboard", function(req, res){
    res.render("dashboard");
});

app.get("/user", function(req, res){
    res.send("User Info");
});




// app.post("/login", passport.authenticate("local", 
//     {
//         successRedirect: "/campgrounds",
//         failureRedirect: "/login"
//     }), function(req, res){
// });


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Help.io Server Has Started!");
});