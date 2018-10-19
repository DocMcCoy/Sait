
// #region Shuttle Flight Animation - based on CatWalk by Heather Tovey

if (localStorage.walkForwards) {
  var walkForwards = JSON.parse(localStorage.walkForwards);
} else {
  var walkForwards = true;
}

var img = document.getElementById('shuttle');

function shuttleFlight() {

  if (localStorage.currentLeft) {
    var currentLeft = parseInt(localStorage.currentLeft);
  } else {
    var currentLeft = parseInt(img.style.left);
  }

  if (walkForwards && (currentLeft > (window.innerWidth - 300))) {

    walkForwards = false;
  }

  if (!walkForwards && (currentLeft <= -300)) {

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

shuttleFlight()

setInterval(shuttleFlight, 50);

// #endregion

// #region Slideshow Animation

let slideshow = document.getElementById("product-slideshow");
let alderaan = document.getElementById("alderaan");
let naboo = document.getElementById("naboo");
let coruscant = document.getElementById("coruscant");


alderaan.addEventListener("mouseenter", function( event ) {
  console.log("alderaan mouse enter");
  slideshow.classList.remove("product-slideshow");
  slideshow.classList.add("alderaan");
});
alderaan.addEventListener("mouseleave", function( event ) {
  console.log("alderaan mouse leave");
  slideshow.classList.remove("alderaan");
  slideshow.classList.add("product-slideshow");
});
naboo.addEventListener("mouseenter", function( event ) {
  console.log("naboo mouse enter");
  slideshow.classList.remove("product-slideshow");
  slideshow.classList.add("naboo");
});
naboo.addEventListener("mouseleave", function( event ) {
  console.log("naboo mouse leave");
  slideshow.classList.remove("naboo");
  slideshow.classList.add("product-slideshow");
});
coruscant.addEventListener("mouseenter", function( event ) {
  console.log("coruscant mouse enter");
  slideshow.classList.remove("product-slideshow");
  slideshow.classList.add("coruscant");
});
coruscant.addEventListener("mouseleave", function( event ) {
  console.log("coruscant mouse leave");
  slideshow.classList.remove("coruscant");
  slideshow.classList.add("product-slideshow");
});



// #endregion
