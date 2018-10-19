console.log("Linked!")

// Code by David Wakely
// email: david@wakely.ca

// const agentsArray = "test";
// let randomPerson = Math.floor((Math.random() * 88) + 1);


// #region Mobile Menu ---------------------------------------------------------

// 1. get elements
let openButton = document.getElementById('open-button')
let closeButton = document.getElementById('close-button')
let mobileMenu = document.getElementById('mobile-menu')

// 2. define actions

function open() {
    mobileMenu.className = 'mobile-menu'
    mobileMenu.setAttribute('aria-hidden', 'false')
    openButton.setAttribute('aria-expanded', 'true')
}

function close() {
    mobileMenu.className = 'mobile-menu closed'
    mobileMenu.setAttribute('aria-hidden', 'true')
    openButton.setAttribute('aria-expanded', 'false')
}

// 3. wire it all up
openButton.addEventListener('click', open)
closeButton.addEventListener('click', close)

// #endregion

// #region Date ----------------------------------------------------------------

function formatDate(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
}
document.getElementById("footerDate").innerHTML = formatDate(new Date());
console.log();

// #endregion -------------------------------------------------------------------

// #region SW API

// function getPersonInfo(n) {
    
//     let apiUrl = 'https://swapi.co/api/people/' + n;

//     fetch(apiUrl).then(response => response.json()).then(data => console.log(data.name));
// };

// getPersonInfo(randomPerson);

// #endregion



