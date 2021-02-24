console.log("This is linked")

var square = document.getElementById('activity1')



square.style.background = 'blue';
square.style.position = 'absolute';
square.style.top = '100px';
square.style.left = '100px';



// ANIMATING CONTENT
//      • fade elements in and out
//      • give elements a swipe animation
//      • animate them to move around the page

// PARTS OF EVERY ANIMATION
//      • the starting state
//      • the movement toward the final goal
//      • the end state; stopping the animation

// var timerId = setTimeout(yourFunction, millisecondsDelay);



function doThisLater() {
    alert("Time's up!");
    }
var timerId = setTimeout(doThisLater, 3000);

clearTimeout(timerId)

function doThisLater2() {
    square.style.left = '800px';
    }
    setTimeout(doThisLater2, 2000);









