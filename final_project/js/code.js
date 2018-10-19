// David Wakely
// david@wakely.ca
// October 19th, 2018
// CPNT-262-WBD - Web Client & Server Prog.
// final assignment - Day 9 Workshop Javascript


// test for linked script
console.log("Mobile Menu and Footer Script Linked!")

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
    // create array of full month names
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate(); //get the current day
    var monthIndex = date.getMonth(); //get the numeric month
    var year = date.getFullYear(); //get the full four digit year

    return monthNames[monthIndex] + ' ' + day + ', ' + year; //return a string constructed from the variables
}
document.getElementById("footerDate").innerHTML = formatDate(new Date()); // place the formatted date into the footer HTML

// #endregion -------------------------------------------------------------------