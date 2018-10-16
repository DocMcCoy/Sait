// Test to see if the various scripts are linked;

random = Math.random()

var colorstest = randomColor(Math.round(Math.random() * 20));

console.log(colorstest)


// Color Options:
// spec­ify the hue, lu­mi­nos­ity and the num­ber of col­ors to gen­er­ate

$('form').on('submit', function(event) {
    event.preventDefault();
    console.log('Not submitting the form!');
    
});

var luminosity = "light";
var hue = "red";
var colorNumber = 5;
var colors = randomColor({hue: hue,luminosity: luminosity,count: colorNumber});
console.log(colors)

$(document).ready(function () {
    var colors = randomColor({hue: hue,luminosity: luminosity,count: colorNumber});
    console.log(colors)
    // Use the jQuery each method to loop through each link.
    $.each(colors, function (index, value) {

        // console.log each color
        console.log(value);
        
    });
});


