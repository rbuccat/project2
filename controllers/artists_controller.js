var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/index", function(req, res) {
  res.render('index');
});

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