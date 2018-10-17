console.log("Linked!")

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
