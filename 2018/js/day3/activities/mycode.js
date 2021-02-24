// #region Browser History

console.log("-------------------------------------"); //simple break for console log
console.log("Geolocation");
console.log("-------------------------------------"); //simple break for console log

//  1.  Visit a few different pages in your browser
//  2.  In the console, type history.back()
//  3.  Next, try history.forward()
//  4.  What happens if you try history.go(-2)

console.log("Instructions commented out. See Source.")

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Geolocation

console.log("Geolocation");
console.log("-------------------------------------"); //simple break for console log


console.log("The code has been commented out")

/*
function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    console.log(position.coords.latitude)
    }
    navigator.geolocation.getCurrentPosition(success);

function geoError(errorObj) {
    alert("Uh oh, something went wrong");
    }
    navigator.geolocation.getCurrentPosition(success, geoError);
*/

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Screen Object

console.log("Screen Object");
console.log("-------------------------------------"); //simple break for console log

/*  1.  Go back to your script.js file.
    2.  Log the screen height, width, colorDepth, and orientation. */

    console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);
console.log(screen.orientation);

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Document Object - Background Color

console.log("Background Color");
console.log("-------------------------------------"); //simple break for console log

//  1.  Go back to your script.js file.
//  2.  Change your background color

// document.bgColor = "red";
document.bgColor = "#fff";

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Feature Detection

console.log("Feature Detection");
console.log("-------------------------------------"); //simple break for console log

/*  1.  Go back to your geolocation code
    2.  Add feature detection to only geolocate your user's device if that
        feature is available for their device.
    3.  If the feature isn't available, display a nice message or alternative. */

   
function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    console.log(position.coords.latitude)
}

navigator.geolocation.getCurrentPosition(success);

function geoError(errorObj) {
    alert("Uh oh, something went wrong");
}

if (typeof navigator.geolocation != "undefined") {     
    navigator.geolocation.getCurrentPosition(success, geoError);
} else {
    console.log("Always!")
}

console.log("-------------------------------------"); //simple break for console log

// #endregion