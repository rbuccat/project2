$(document).ready(function(){
  if ($("#avail").data("available") === false){
    $("#avail").attr('disabled', 'disabled');
    $("#avail2").attr('disabled', 'disabled');
  }else{
    $("#avail").removeAttr('disabled');
    $("#avail2").removeAttr('disabled');
  }

    // $("#logmein").on('click', function(){
    //   $(".navbar-collapse .collapse ul li:last").after("<li><a href='/logout'>Log Out</a></li>");
    // })

 });


// $.post("/register/create", function() {
//       window.location.href = "/myprofile";
// })
// });