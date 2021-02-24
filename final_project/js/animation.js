// David Wakely
// david@wakely.ca
// October 19th, 2018
// CPNT-262-WBD - Web Client & Server Prog.
// final assignment - Day 9 Workshop Javascript

// test for linked script
console.log("Animation Script Linked!")

// #region Shuttle Flight Animation - based on CatWalk by Heather Tovey

if (localStorage.walkForwards) {
  var walkForwards = JSON.parse(localStorage.walkForwards);
} else {
  var walkForwards = true;
}

var img = document.getElementById('shuttle'); //store the DOM for the shuttle in a variable

// 
function shuttleFlight() {

  if (localStorage.currentLeft) {
    var currentLeft = parseInt(localStorage.currentLeft);
  } else {
    var currentLeft = parseInt(img.style.left);
  }

  if (walkForwards && (currentLeft > (window.innerWidth - 300))) { //changed the parameters so that the ship flies inside a window and disappears outside of the div container - see styles.css

    walkForwards = false;
  }

  if (!walkForwards && (currentLeft <= -300)) { //changed the parameters so that the ship flies inside a window and disappears outside of the div container - see styles.css

    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 8) + 'px';
    img.classList.remove("shuttleBackward");
    img.classList.add("shuttleForward");
  } else {
    img.style.left = (currentLeft - 8) + 'px';
    img.classList.remove("shuttleForward");
    img.classList.add("shuttleBackward");
  }

  localStorage.currentLeft = img.style.left;
  localStorage.walkForwards = walkForwards;
}

shuttleFlight() // Start up shuttleFlight function

setInterval(shuttleFlight, 50); //Every 50ms reexecute shuttleFlight

// #endregion

// #region Slideshow Animation

// DOM Variables
let slideshow = document.getElementById("product-slideshow"); // Where the slideshow will go
let alderaan = document.getElementById("alderaan"); // Card 1 of 3 that we want to listen to
let naboo = document.getElementById("naboo"); // Card 2 of 3 that we want to listen to
let coruscant = document.getElementById("coruscant"); // Card 3 of 3 that we want to listen to


// Mouse Events for the Alderaan Card
alderaan.addEventListener("mouseenter", function( event ) {
  // console.log("alderaan mouse enter"); // Test to check if working
  slideshow.classList.remove("product-slideshow"); 
  slideshow.classList.add("alderaan");
});

alderaan.addEventListener("mouseleave", function( event ) {
  // console.log("alderaan mouse leave"); // Test to check if working
  slideshow.classList.remove("alderaan");
  slideshow.classList.add("product-slideshow");
});

// Mouse Events for the Naboo Card
naboo.addEventListener("mouseenter", function( event ) {
  // console.log("naboo mouse enter"); // Test to check if working
  slideshow.classList.remove("product-slideshow");
  slideshow.classList.add("naboo");
});

naboo.addEventListener("mouseleave", function( event ) {
  // console.log("naboo mouse leave"); // Test to check if working
  slideshow.classList.remove("naboo");
  slideshow.classList.add("product-slideshow");
});

// Mouse Events for the Coruscant Card
coruscant.addEventListener("mouseenter", function( event ) {
  // console.log("coruscant mouse enter"); // Test to check if working
  slideshow.classList.remove("product-slideshow");
  slideshow.classList.add("coruscant");
});

coruscant.addEventListener("mouseleave", function( event ) {
  // console.log("coruscant mouse leave"); // Test to check if working
  slideshow.classList.remove("coruscant");
  slideshow.classList.add("product-slideshow");
});

// #endregion
