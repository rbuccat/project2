$(document).ready(function(){

  $("#newuser").on('click', function(){
      $("#pleaselogin").modal('show');
  })

  Handlebars.registerHelper('availability', function(this.available){
    var stringVal = '';
    if (this.available === 1){
      stringVal = "<div class='status sold'>" + this.available + "</div>"
    }else{
      stringVal = "<div class='status new'>" + this.available + "</div>"
    }

    return new Handlebars.SafeString(stringVal);
  })

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