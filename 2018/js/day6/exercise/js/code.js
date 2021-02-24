// Test to see if the various scripts are linked;

random = Math.random()
var colorstest = randomColor(Math.round(Math.random() * 20));
console.log("Random Number of Colour Array = " + colorstest)

ClipboardJS.isSupported();

$('.congrats').fadeIn("slow");

$(document).ready(function () {
    $('input[type=submit]').css({ 'background-color': randomColor({ hue: "random", luminosity: "dark" }) });
    $('input[type=submit]').click(function () {
        event.preventDefault();
        $("#congrats").removeClass("invisible").addClass("congrats");
        $("#pointer").removeClass("imgContainer").addClass("imgContainerInvisible");

        // Color Options:
        // spec­ify the hue, lu­mi­nos­ity and the num­ber of col­ors to gen­er­ate
        var hue = $('input[name=hue]:checked').val();
        console.log(hue);
        var luminosity = $('input[name=luminosity]:checked').val();
        console.log(luminosity);
        var colorNumber = $('#count').find(":selected").text();
        console.log(colorNumber);

        var colors = randomColor({ hue: hue, luminosity: luminosity, count: colorNumber });
        console.log(colors)
        $("#pallete").empty();

        // Use the jQuery each method to loop through each of the color array.
        $.each(colors, function (index, value) {
            var color = value;
            $('input[type=submit]').css({ 'background-color': randomColor({ hue: "random", luminosity: "dark" }) });
            $('#pallete').append('<div class="roundDiv" data-clipboard-target="' + color + '" style="color: ' + color + '; background: ' + color + '">' + color + '</div>')
            console.log(color);
        });
    });
});


// Click to copy to clipboard ... no worky

// $( ".roundDiv" ).click(function() {
//     var divColor = document.getElementById('roundDiv');
//     var clipboard = new ClipboardJS(divColor);
//     clipboard.on('success', function (e) {
//         console.log(e);
//     });
//     clipboard.on('error', function (e) {
//         console.log(e);
//     });
// });