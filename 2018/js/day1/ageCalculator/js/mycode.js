var birthYear = prompt("What's the four digit birth year? Example - 1901");
var futureYear = prompt("Pick a four digit year in the future. Example 2021");
var possibleAge1 = futureYear - birthYear;
var possibleAge2 = possibleAge1 - 1;

document.write('I will be either ' + possibleAge1 + ' or ' + possibleAge2 + ' in ' + futureYear);