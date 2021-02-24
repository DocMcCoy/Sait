// EXERCISE: THE LIFETIME SUPPLY CALCULATORE
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! 
// Store your current age into a variable. 
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to lastyou until the ripe old age of X".

var currentAge = prompt("How old are you in years?");
var maximumAge = prompt("How old will you be when you die?");
var itemPrice = prompt("How much do your coffees cost?")
var perDay = prompt("How many coffee do you have a day?")

var totalCoffee = (maximumAge - currentAge) * 365 * perDay;
var totalCoffeePrice = totalCoffee * itemPrice;  

document.write("You will need to spend " + totalCoffeePrice + " and you will have consumed " + totalCoffee + " coffees by the time you are " + maximumAge);