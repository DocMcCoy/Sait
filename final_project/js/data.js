// David Wakely
// david@wakely.ca
// October 19th, 2018
// CPNT-262-WBD - Web Client & Server Prog.
// final assignment - Day 9 Workshop Javascript

// #region Data for the Travel Agents contact info

//create the arrays
let agentsArray = []; //this would be 
let name = ["Han Solo", "Luke Skywalker"];
let planet = ["Corellia", "Tattoine"];

// Create variables from the arrays
let name1 = document.getElementById('dName1')
let name2 = document.getElementById('dName2')
let contact1 = document.getElementById('dContact1')
let contact2 = document.getElementById('dContact2')
let planet1 = document.getElementById('dPlanet1')
let planet2 = document.getElementById('dPlanet2')

// Place the strings + variables into the HTML
name1.innerHTML = name[0];
name2.innerHTML = name[1];
contact1.innerHTML = "E-Mail: " + name[0] + "@rebelalliance.com";
contact2.innerHTML = "E-Mail: " + name[1] + "@rebelalliance.com";
planet1.innerHTML = "Planet: " + planet[0];
planet2.innerHTML = "Planet: " + planet[1];



// Retrieves names for the agentsArray - UNUSED - Instead just console logged the results.
for (var i = 1; i <= 88; i++) {
    let apiUrl = 'https://swapi.co/api/people/' + i;
    fetch(apiUrl).then(response => response.json()).then(data => console.log(data.name))
    ;
};
