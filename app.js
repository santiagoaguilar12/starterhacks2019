var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    User        =require("./models/user")
    


mongoose.connect("mongodb://localhost/help_io");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.use(require("express-session")(
    {
        secret:"help.io",
        resave:false,
        saveUninitialized:false
    }
));


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

app.get("/:id", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("show",{user:foundUser});
        });  
});

app.get("/:id/bio", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("bio",{user:foundUser});
        });  
});

app.get("/:id/med", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("med",{user:foundUser});
        });  
});

app.get("/:id/history", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("history",{user:foundUser});
        });  
});

app.get("/:id/graphs", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("graphs",{user:foundUser});
        });  
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