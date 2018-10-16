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