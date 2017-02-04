//controller file for all routes

//dependancies
var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require("passport");
var nodemailer =require("nodemailer");
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: "@gmail.com",
        pass: ""
    }
});

//logging in
router.post('/login', passport.authenticate('local', { 
  successRedirect: '/',
    failureRedirect: '/login' 
})
);

//logged in user - myprofile
passport.serializeUser(function(user, done) {
  console.dir(user);
  done(null, user.id);
  router.get("/myprofile", function(req, res) {
   db.artist.findOne({
       where: {
        id: user.id
      }
   }).then(function(result) {
       console.dir(result.toJSON());
   res.render('myprofile', result.toJSON());    
   });
});
  router.put("/myprofile/update", function(req, res) {
    db.artist.update({
      artist_name: req.body.artist_name,
      email: req.body.email,
      location: req.body.location,
      genre: req.body.genre,
      experience: req.body.experience,
      date: req.body.date,
      soundcloud: req.body.soundcloud,
      available: req.body.available
    },{
        where: {
          id: user.id
        }
      })
    .then(function() {
      res.redirect("/myprofile");
    });
  });
  router.put("/myprofile/updateavailability", function(req, res) {
    db.artist.update({
      available: req.body.available
    },{
        where: {
          id: user.id
        }
      })
    .then(function() {
      res.redirect("/myprofile");
    });
  });
});



//logging user out (***needs fixing)
passport.deserializeUser(function(id, done) {
  db.artist.findById(id, function(err, user) {
    done(err, user);  
  });
});

router.get('/logout', function(req, res){
 req.logout();
 res.redirect('/');
});

//home page that shows featured artists on bottom
router.get("/", function(req, res) {
  db.artist.findAll({}).then(function(result) {
    console.log(result); 
   res.render("index", { artist_data: result});
});
});

//modal to register new user
router.get("/register", function(req, res) {
 res.render('register');
});

router.post("/register/create", function(req, res) {
  db.artist.create({
    artist_name: req.body.artist_name,
    email: req.body.email,
    artist_password: req.body.artist_password,
    genre: req.body.genre,
    location: req.body.location,
    photo: req.body.photo,
    soundcloud: req.body.soundcloud
  }).then(function(){
    res.redirect("/");
  })
});

//search function
router.post("/searchBy", function(req, res) {
    db.artist.findAll({
      where: {
        $or:{
        location: req.body.location, 
        genre: req.body.genre
      }
      }
    }).then(function(result) {
    console.log(result); 
   res.render("search", { artist_data: result});
});
})    

//messages page
router.get("/messages", function(req, res) {
 res.render('messages');
});

//artist's profile by id
router.get("/profile/:id", function(req, res) {
      db.artist.findOne({
      where: {id: req.params.id}
   }).then(function(Artist) {
   res.render('profile', { artist_data: Artist });    
   });
});

//For the newsletter (***needs fixing)
router.post("/mailMe", function(req, res) {
        console.log(req.body);
        var mailOptions={

        to : "",
        subject : "New Artist",
        text : req.body.content
        };

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
            //make redirect here
        }
    });
})

module.exports = router;