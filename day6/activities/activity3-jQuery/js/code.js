$('p').addClass('special');

console.log($('header').html())

$('header').html("It's not that great")
$('header').css({ 'background': 'rebeccapurple', 'color': 'white' })

$('#button').on('click', function () {
    console.log('clicked!');
});

$('body').on('keypress', function (event) {
    // outputs event object
    console.log(event);
    // outputs value for key pressed
    console.log(event.which);
    // outputs element clicked
    console.log(event.target);
});

$('form').on('submit', function(event) {
    event.preventDefault();
    console.log('Not submitting the form!');
    //Maybe I want to do stuff first.
});

// $("#error").hide();
$("#error").slideDown();

// $("#error").fadeIn(500);

// $("#error").show(1000,function() {
//     $(this).addClass('alert');
// });


