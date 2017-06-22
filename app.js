console.log("Hi Everyone!");
//console.log(document.querySelector(".second"));

//console.log($('body').find('.second'));
/*
$('body').prepend("<p>Things and Stuff.</p>")

let body = $('body');
body.prepend("<p>All your base!");
*/

//$('p:first').fadeOut(800);

$('.second').click(function() {
    $(this).slideUp(800)
});
