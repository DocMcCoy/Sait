var temperature = prompt("What temperature is it?");
var coat = prompt("Do you have a coat? - true or false")
var hat = prompt("Do you have a hat? - true or false")

if (temperature < -20 || coat || hat) {
    document.write('Shut the door asshole. You\'re not going outside'); 
} else if (temperature < 0  && coat == true) {
    document.write('What are ya dumb?!? It\'s cold outside get a hat AND a coat.');
} else if (temperature < 10 && coat == true) {
    document.write('Put on a coat ya dummy');
} else {
    document.write('Naked? Bold choice but at least it shouldn\'t freeze off');
}