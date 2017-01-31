var express = require("express");
var router = express.Router();
var db = require("../models");



router.get("/", function(req, res) {
  res.render('index');
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

router.get("/profile/:id", function(req, res) {
	  db.Artist.findOne({
    	where: {id: req.params.id}
    }).then(function(Artist) {
    res.render('profile', { artist_data: Artist });    
    });

});


module.exports = router;