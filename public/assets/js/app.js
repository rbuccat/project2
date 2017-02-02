$(document).ready(function{
$('.dropdown-menu li > a').click(function(e){
    $('.btn .btn-default .dropdown-toggle').text(this.innerHTML);
});
})