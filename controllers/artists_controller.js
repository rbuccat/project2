var express = require("express");
var router = express.Router();
var db = require("../models");
var passport = require("passport");

router.get("/", function(req, res) {
  res.render('index');
});

router.get("/search", function(req, res) {
  res.render('search');
});

router.get("/messages", function(req, res) {
  res.render('messages');
});

/* POST login page. */

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));



router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);


passport.authenticate('local', { failureFlash: 'Invalid username or password.' });

passport.authenticate('local', { successFlash: 'Welcome!' });

app.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });

  app.get('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});


// router.post("/register", function(req, res) {
//   db.Artist.create(req.body).then(function(dbregister) {
//     res.json(dbRegister);
//   });
// });


// router.post('/register', function(req, res) {
// //     db.Artist.create(new Artist({ username : req.body.username }), req.body.password, function(err, account) {
// //         if (err) {
// //             return res.render('register', { artist : artist });
// //         }
// //
// //         passport.authenticate('local')(req, res, function () {
// //             res.redirect('/');
// //         });
// //     });
// // });


// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });
//
// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
// });
//
// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });
//
// router.get('/ping', function(req, res){
//     res.status(200).send("pong!");
// });



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
