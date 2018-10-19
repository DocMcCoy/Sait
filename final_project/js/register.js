// David Wakely
// david@wakely.ca
// October 19th, 2018
// CPNT-262-WBD - Web Client & Server Prog.
// final assignment - Day 9 Workshop Javascript



let myForm = document.getElementById('myForm')
let submit = document.getElementById('submit')
let fName  = document.getElementById('fname')
let fAddress = document.getElementById('faddress')
let fCity = document.getElementById('fcity')
let fCode = document.getElementById('fcode')
let fEmail = document.getElementById('femail')
let fPhone = document.getElementById('fphone')
let fPlanet = document.getElementById('fplanet')

console.log(/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/.test("T2G 5R8"));
console

submit.addEventListener('click', open)

// submit.addEventListener("click"), function(event) {
//     errorName.style.display = "none";
//     errorAge.style.display = "none";
//     var name = document.form1.name.value;
//     var age = document.form.txtAge.value;

//     if (!name) {
//     event.preventDefault();
//     errorName.style.display = "block";
//     }
//     if (!age) {
//     event.preventDefault();
//     errorAge.style.display = "block";
//     }
//     }