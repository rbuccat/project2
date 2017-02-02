var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

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
      console.dir(user)
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }
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

passport.serializeUser(function(user, done) {
  console.dir(user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/artists_controller.js");

app.use("/", routes);

// Image.sync({force: true}).on('success', function() {
//   console.log("reading image")
//   var image = fs.readFileSync(__dirname + '/../config/config.json').toString("base64")
//   console.log("done\n")

//   console.log("creating database entry")
//   Image.create({photo: image}).on('success', function(img) {
//     console.log("done\n")

//     console.log("writing file")
//     fs.writeFileSync(__dirname + '/target.png', img.photo, "base64")
//     console.log("done\n")

//     console.log("you might open the file ./target.png")
//   })
// })

db.sequelize.sync({ force: false }).then(function(){
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
})