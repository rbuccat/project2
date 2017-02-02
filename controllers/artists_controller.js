//each route, we need to send and recieve data
//create and update for myprofile
//create logic that looks up artist by id

var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require("passport");

router.get("/", function(req, res) {
 res.render('index');
});

router.post('/login', passport.authenticate('local', { 
	successRedirect: '/',
    failureRedirect: '/login' 
}));

router.get("/register", function(req, res) {
 res.render('register');
});


// router.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//   // If this function gets called, authentication was successful.
//   // `req.user` contains the authenticated user.
//   res.redirect('/users/' + req.user.username);
// });

// router.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );


// passport.authenticate('local', { failureFlash: 'Invalid username or password.' });

// passport.authenticate('local', { successFlash: 'Welcome!' });

router.post("/register/create", function(req, res) {
  db.artist.create({
    artist_name: req.body.artist_name,
    email: req.body.email,
    artist_password: req.body.artist_password,
    genre: req.body.genre
  }).then(function(){
    res.redirect("/myprofile");
  })
});

router.put("/myprofile/update", function(req, res) {
    db.artist.update({
      artist_name: req.body.artist_name,
      email: req.body.email,
      location: req.body.location,
      genre: req.body.genre,
      experience: req.body.experience,
      date: req.body.date
    },{
        where: {
          id: 1
        }
      })
    .then(function() {
      res.redirect("/myprofile");
    });
  });

router.get("/search", function(req, res) {
    db.artist.findAll({}).then(function(result) {
   res.render("search", { artist_data: result});    
   });
});

router.get("/messages", function(req, res) {
 res.render('messages');
});



router.get("/myprofile", function(req, res) {
   db.artist.findOne({
       where: {id: 1}
   }).then(function(result) {
       console.dir(result.toJSON());
   res.render('myprofile', result.toJSON() );    
   });
});

// router.get("/profile", function(req, res) {
//  res.render('profile');
// });

router.get("/profile/:id", function(req, res) {
      db.artist.findOne({
       where: {id: req.params.id}
   }).then(function(Artist) {
    console.log(Artist);
   res.render('profile', { artist_data: Artist });    
   });

});


module.exports = router;