$(document).ready(function(){

  $("#newuser").on('click', function(){
      $("#pleaselogin").modal('show');
  })

function getArtistTrack(artist){

    // Run an initial search to identify the artist unique Spotify ID
    var queryURL = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

      // Prints the entire object to console
      console.log(response);

      // Prints the Artist ID from the Spotify Object to console.
      var artistID = response.artists.items[0].id;

      // Then we build a SECOND URL to query another Spotify endpoint (this one for the tracks)
      var queryURLTracks = "https://api.spotify.com/v1/artists/" + artistID +"/top-tracks?country=US";

      // We then run a second AJAX call to get the tracks associated with that Spotify ID
      $.ajax({url: queryURLTracks, method: 'GET'}).done(function(trackResponse) {

        // Gets the tracks
        console.log(trackResponse);

        // Builds a Spotify player playing the top song associated with the artist. (NOTE YOU NEED TO BE LOGGED INTO SPOTIFY)
        var player = '<iframe src="https://embed.spotify.com/?uri=spotify:track:'+trackResponse.tracks[0].id+'" frameborder="0" allowtransparency="true"></iframe>';

        // Appends the new player into the HTML
                $("#playerDiv").append(player)
      })
    });   
  }


  // On Button Click for Artist Selection
  // $('#profile').on('click', function(){

    // Grab the Artist Name
    var artist = $('#artist').data('artist');
    console.log(artist);

    // Run the Artist Player Function (Passing in the Artist as an Argument)
    getArtistTrack(artist);

    // Prevents moving to the next page
    // return false;
  // });


// // // Needed to create this function to readCookies. Essentially it splits up the cookie list 
// function readCookie(name) { 
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }


// // Capture Button Click
// $("#addUser").on("click", function() {

//   // Capture User Inputs and store into variables
//   var name = $('#nameinput').val().trim(); 
//   var email = $('#emailinput').val().trim(); 
//   // var age = $('#ageinput').val().trim(); 
//   // var comment = $('#commentinput').val().trim(); 

//   // Console log each of the user inputs to confirm you are receiving them
//   console.log(name);
//   console.log(email);
//   // console.log(age);
//   // console.log(comment);

//   // Replaces the content in the "recentMember" div
//   $("#recentMember").empty();

//   // Dump all of the new information into the relevant sections
//   $("#recentMember").append("<h1>" + name);
//   $("#recentMember").append("<h4>" + email);
//   // $("#recentMember").append("<h4>" + age);
//   // $("#recentMember").append("<p>" + comment);

//   // < -----------------------------------------------------------

//   // Clear the previous cookie by setting it it equal to nothing and its expiration date to a past time
//   document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // <------------------


//   // Store all of the parameters as part of the cookie string
//   document.cookie ="name=" + name;
//   document.cookie = "email=" + email;
//   // document.cookie = "age=" + age;
//   // document.cookie =  "comment=" + comment;

//   // Print all the cookies 
//   console.log(document.cookie);

//   // Recover the parameters by passing the cookie parameters of interest through a function that breaks the document.cookie 
//   var cookieName = readCookie("name");
//   var cookieEmail = readCookie("email");
//   // var cookieAge = readCookie("age");
//   // var cookieComment = readCookie("comment");

//   // Log all of the cookies to test
//   console.log(readCookie("name"));
//   console.log(readCookie("email"));
//   // console.log(readCookie("age"));
//   // console.log(readCookie("comment"));

//   // < -----------------------------------------------------------

//   // Don't refresh the page!
//   return false;
// });

// // <------------------------------------------------

// // By default display the content from the cookieString
// $("#recentMember").empty();
// $("#recentMember").append("<h1>" + readCookie("name"));
// $("#recentMember").append("<h4>" + readCookie("email"));
// // $("#recentMember").append("<h4>" + readCookie("age"));
// // $("#recentMember").append("<p>" + readCookie("comment"));

// // <------------------------------------------------

$.post("/register/create", function() {
      window.location.href = "/myprofile";
})