var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs  = require('express-handlebars');

var PORT = 3000;

var app = express();
var db = require("./models");

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("\nlogin\n");
    // db.artist.findAll().then(function(user) { console.dir(user); });

    db.artist.findOne({where:{ email: username }}).then(function(user) {
      console.dir(user);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // else if (password !== user.password) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }else{ 
      return done(null, user);
    }).catch(function(err){
    	return done(err);
    });
  }
));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(passport.session());

//Did not work on server.js and so we pasted in artists_controller.js
// passport.serializeUser(function(user, done) {
//   console.dir(user);
//   console.log("THIS IS THE " + user.email + "!!!!!!!!");
//   done(null, user.id);
// });

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Handlebars helpers 
var hbs = require('handlebars');
hbs.registerHelper("availability", function(options)
{
    var stringVal = '';
    console.log(typeof(options));
    if (options === true){
      stringVal = "<div class='status sold'>Available</div>"
    }else{
      stringVal = "<div class='status new'>Not Available</div>"
    }

    return new hbs.SafeString(stringVal);
});

//Handlebars helpers
hbs.registerHelper("availability2", function(options)
{
    var stringVal = '';
    console.log(typeof(options));
    if (options === true){
      stringVal = "<span class='button-checkbox'><button type='submit' class='btn btn-available btn-lg' name='available' value=0>Available</button></span>"
    }else{
      stringVal = "<span class='button-checkbox'><button type='submit' class='btn btn-notavailable btn-lg' name='available' value=1>Not Available</button></span>"
    }

    return new hbs.SafeString(stringVal);
});

// Import routes and give the server access to them.
var routes = require("./controllers/artists_controller.js");

app.use("/", routes);

db.sequelize.sync({ force: false }).then(function(){
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
})