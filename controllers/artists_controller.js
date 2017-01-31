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
  res.render('search');
});

router.get("/messages", function(req, res) {
  res.render('messages');
});

router.get("/myprofile", function(req, res) {
  res.render('myprofile');
});

router.get("/profile/:id", function(req, res) {
  db.Artist.findOne({}).then(function(results){
  	var hbsObject = {
      artists: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })

  res.render('profile');
});
// /* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
// });

/* GET home page. */
// router.get('/profile/:id', function(req, res, next) {

 //Write logic that looks up artist by ID

 // myapp.com/artist/123

 // In the example above 123 would equal =  req.params.id

 // get all artist where id =  req.params.id

//  var mathTeacher = req.params.id *2;

//  res.render('templates/artist_search', { title: mathTeacher, name: 'anthony' });
// });

// router.get('/artist_search', function(req, res, next) {

// });

// router.get('/scheduling/:id', function(req, res, next) {
//  res.render('templates/scheduling', { title: 'Express' });
// });

// router.get('/messages/:id', function(req, res, next) {
//  res.render('templates/messages', { title: 'Express' });
// });

/* POST login page. */
// router.post('/login', function(req, res, next) {
//  res.render('index', { title: 'Login' });
// });

module.exports = router;