let agentsArray = [];
let name = ["Han Solo", "Luke Skywalker"];
let planet = ["Corellia", "Tattoine"];

let name1 = document.getElementById('dName1')
let name2 = document.getElementById('dName2')
let contact1 = document.getElementById('dContact1')
let contact2 = document.getElementById('dContact2')
let planet1 = document.getElementById('dPlanet1')
let planet2 = document.getElementById('dPlanet2')


name1.innerHTML = name[0];
name2.innerHTML = name[1];
contact1.innerHTML = "E-Mail: " + name[0] + "@rebelalliance.com";
contact2.innerHTML = "E-Mail: " + name[1] + "@rebelalliance.com";
planet1.innerHTML = "Planet: " + planet[0];
planet2.innerHTML = "Planet: " + planet[1];


// let randomPerson = Math.floor((Math.random() * 88) + 1);

for (var i = 1; i <= 2; i++) {
    let apiUrl = 'https://swapi.co/api/people/' + i;
    fetch(apiUrl).then(response => response.json()).then(data => console.log(data.name));
}

// function getPersonInfo(n) {

//     let apiUrl = 'https://swapi.co/api/people/' + n;

//     fetch(apiUrl).then(response => response.json()).then(data => console.log(data.name)).then(data => name.push(data.name));
// };

// getPersonInfo(1);


// console.log(name)

// console.log(agentsArray);