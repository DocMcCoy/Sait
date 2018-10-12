var button = document.getElementById("myBtn");
button.addEventListener("click", function (event) {
    document.location.reload(true);
});

myButton = document.getElementById("myBtn");

myButton.addEventListener("click", function(event) {
    btn = event.currentTarget;
    btn.style.backgroundColor = 'red';
    btn.innerHTML = 'Clicked!';
});

var walkForwards = true;

var direction = 10

function catWalk() {
    var img = document.getElementById('cat'); 
    //gets the info on the element id'd or identified as 'Cat' and puts it into a variable

    var currentLeft = parseInt(img.style.left);
    //uses the new 'img' variable to retrieve the 'style left' info and place that into a new variable
    //it is 'parseInt' to change the string to a number

    // if (walkForwards && (currentLeft > (window.innerWidth - img.width))) {
    // walkForwards = false;
    // }
    if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
    }

    // above if statement changes direction if currentLeft is out of bounds does not do anything if 

    if (walkForwards) {
    img.style.left = (currentLeft + direction) + 'px';
    } else {
    img.style.left = (currentLeft - direction) + 'px';
    }
    // above if / else statement determines the direction
}

setInterval(catWalk, Math.round(Math.random() * (50 - 10) + 10));

console.log(Math.round(Math.random() * (100 - 25) + 25));
//this sets up the timer by referencing the function and the duration of the loop

/* 
ACTIVITY: CAT WALK
    • Modify the code so that the amount of pixels moved in either
      direction is controlled by a global variable.
    • Call it direction.
    • Remove the walkForward variable.
    • Change the code to use the new direction variable to determine
      when the animation should change directions.
Bonus: Move the cat up and down the page too!
*/

var img2 = document.getElementById('cat2');
//gets the height of the cat2 element and places it in a global variable

img2.style.top = img2.height + "px"
//sets the starting position of the cat to be below the original cat

function cat2Walk() {
    var currentLeft = parseInt(img2.style.left)

    //uses the new 'img' variable to retrieve the 'style left' info and place that into a new variable
    //it is 'parseInt' to change the string to a number

    // if (walkForwards && (currentLeft > (window.innerWidth - img2.width))) {
    // walkForwards = false;
    // }
    if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
    }

    // above if statement changes direction if currentLeft is out of bounds does not do anything if 

    if (walkForwards) {
    img2.style.left = (currentLeft + direction) + 'px';
    } else {
    img2.style.left = (currentLeft - direction) + 'px';
    }
    // above if / else statement determines the direction

}

setInterval(cat2Walk, Math.round(Math.random() * (50 - 10) + 10));

var img3 = document.getElementById('cat3');
//gets the height of the cat2 element and places it in a global variable

img3.style.top = (2 * img2.height) + "px"
//sets the starting position of the cat to be below the original cat

function cat3Walk() {
    var currentLeft = parseInt(img3.style.left)

    //uses the new 'img' variable to retrieve the 'style left' info and place that into a new variable
    //it is 'parseInt' to change the string to a number

    // if (walkForwards && (currentLeft > (window.innerWidth - img3.width))) {
    // walkForwards = false;
    // }
    if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
    }

    // above if statement changes direction if currentLeft is out of bounds does not do anything if 

    if (walkForwards) {
    img3.style.left = (currentLeft + direction) + 'px';
    } else {
    img3.style.left = (currentLeft - direction) + 'px';
    }
    // above if / else statement determines the direction

}

setInterval(cat3Walk, Math.round(Math.random() * (50 - 10) + 10));


