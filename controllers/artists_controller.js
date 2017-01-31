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
	successRedirect: '/blah',
    failureRedirect: '/login' 
}));

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

router.get("/profile/:id", function(req, res) {
      db.artist.findOne({
       where: {id: req.params.id}
   }).then(function(Artist) {
   res.render('profile', { artist_data: Artist });    
   });

});


module.exports = router;