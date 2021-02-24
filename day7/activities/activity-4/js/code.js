console.log("Linked!")

if (localStorage.getItem("username") != null) {
    console.log("Hi there " + localStorage.getItem("username"))
} else {
    var promptName = prompt("What's your name?");
    localStorage.setItem("username", promptName);
    console.log(localStorage.getItem("username"));
}






// set item
localStorage.setItem("username", "Janessa");
console.log(localStorage);

// get item

var name = localStorage.getItem("username");
// var name = localStorage.username
console.log(name);

// remove items

// localStorage.removeItem("username");
// localStorage.username = null;

// Wipeout Storage
console.log(localStorage.getItem("username"))

localStorage.clear();

console.log(localStorage.getItem("username"))