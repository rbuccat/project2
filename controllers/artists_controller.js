//each route, we need to send and recieve data
//create and update for myprofile
//create logic that looks up artist by id

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

passport.serializeUser(function(user, done) {
  console.dir(user);
  console.log("THIS IS THE " + user.id + "!!!!!!!!");
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
      date: req.body.date
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

passport.deserializeUser(function(id, done) {
  db.artist.findById(id, function(err, user) {
    done(err, user);
  });
});



router.get("/", function(req, res) {
 res.render('index');
});

router.post('/login', passport.authenticate('local', { 
	successRedirect: '/',
    failureRedirect: '/login' 
})
);

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
    genre: req.body.genre,
    photo: req.body.photo
  }).then(function(){
    res.redirect("/");
  })
});




// router.get("/search", function(req, res) {
//     db.artist.findAll({}).then(function(result) {  
//    res.render("search", { artist_data: result}); 
//    });
// });

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



// router.get("/search", function(req, res) {
//     db.artist.findAll({}).then(function(result) {
//    res.render("search", { artist_data: result});    

//    });
// });

router.get("/messages", function(req, res) {
 res.render('messages');
});





router.get("/profile/:id", function(req, res) {
      db.artist.findOne({
      where: {id: req.params.id}
   }).then(function(Artist) {
   res.render('profile', { artist_data: Artist });    
   });

// router.get("/profile/:id", function(req, res) {
//       db.artist.findOne({
//        where: {id: req.params.id}
//    }).then(function(Artist) {
//    res.render('profile', { artist_data: Artist });    
//    });

});

// mailFunction
router.post("/mailMe", function(req, res) {
        console.log(req.body);
        var mailOptions={

        to : "helenavolskaja@gmail.com",
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