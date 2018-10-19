// David Wakely
// david@wakely.ca
// October 19th, 2018
// CPNT-262-WBD - Web Client & Server Prog.
// final assignment - Day 9 Workshop Javascript


// Form variables to start validating the input values
let myForm = document.getElementById('myForm')
let submit = document.getElementById('submit')
let fName = document.getElementById('fname')
let fAddress = document.getElementById('faddress')
let fCity = document.getElementById('fcity')
let fCode = document.getElementById('fcode')
let fEmail = document.getElementById('femail')
let fPhone = document.getElementById('fphone')
let fPlanet = document.getElementById('fplanet')

let errorName = document.getElementById('errorName');
let errorAddress = document.getElementById('errorAddress');
let errorCity = document.getElementById('errorCity');
let errorCode = document.getElementById('errorCode');
let errorEmail = document.getElementById('errorEmail');
let errorPhone = document.getElementById('errorPhone');
let errorPlanet = document.getElementById('errorPlanet');


// test for eventual postal code validation - 
console.log(/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/.test("T2G 5R8"));

// Submit button event listener to evaluate form - currently under development -

/*
submit.addEventListener("click", function (event) {
    event.preventDefault();
    // Code goes here
    errorName.style.display = "none";
    errorAddress.style.display = "none";
    errorCity.style.display = "none";
    errorCode.style.display = "none";
    errorEmail.style.display = "none";
    errorPhone.style.display = "none";
    errorPlanet.style.display = "none";

    let name = document.myForm.fName.value;
    console.log(name)
    let address = document.myForm.fAddress.value;
    console.log(address)
    let city = document.myForm.fCity.value;
    console.log(city)
    let code = document.myForm.fCode.value;
    console.log(code)
    let email = document.myForm.fEmail.value;
    console.log(email)
    let phone = document.myForm.fPhone.value;
    console.log(phone)
    let planet = document.myForm.fPlanet.value;
    console.log(planet)

    if (!name) {
        event.preventDefault();
        errorQuiz1.style.display = "block";
    }
    if (!address) {
        event.preventDefault();
        errorQuiz2.style.display = "block";
    }
    if (!city) {
        event.preventDefault();
        errorQuiz4.style.display = "block";
    }
    if (!code) {
        event.preventDefault();
        errorQuiz4.style.display = "block";
    }
    if (!email) {
        event.preventDefault();
        errorQuiz4.style.display = "block";
    }
    if (!phone) {
        event.preventDefault();
        errorQuiz4.style.display = "block";
    }
    if (planet = "alderaan") {
        event.preventDefault();
        alderaan.style.display = "block";
    }

    else {
        alert("You did somethign crazy wrong! *-Force choke-*");
    }
});*/