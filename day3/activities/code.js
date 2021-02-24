// #region GET ELEMENT BY ID

console.log("-------------------------------------"); //simple break for console log
console.log("GET ELEMENT BY ID");
console.log("-------------------------------------"); //simple break for console log


var header = document.getElementById('header');

console.log(header)

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region GET ELEMENT BY TAG NAME

console.log("GET ELEMENT BY TAG NAME");
console.log("-------------------------------------"); //simple break for console log


var listItems = document.getElementsByTagName('li');

console.log(listItems);
console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region GET ELEMENTS

console.log("GET ELEMENTS");
console.log("-------------------------------------"); //simple break for console log

//  1.  Get your list elements by class name and assign it to listItems
//  2.  Get your list elements by querySelectorAll and assign it to
//      listItems
//  3.  Create a variable firstItem and use querySelector to
//      assign the first list item

listItems = document.getElementsByClassName("nav-item");
console.log("getElementsByClassName will return the following;");
console.log(listItems)

listItems = document.querySelector('li'); // gets the first item that matches that selector
console.log("querySelector will return the following;");
console.log(listItems)

listItems = document.querySelectorAll('li'); // gets all items that match the selector
console.log("querySelectorALL will return the following;");
console.log(listItems)

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region GET THE RIGHT ELEMENT

console.log("GET THE RIGHT ELEMENT");
console.log("-------------------------------------"); //simple break for console log

//  1.  Use getElementsByTagName and bracket notation to
//      console.log the 2nd paragraph element

var specificParagraph = document.getElementsByTagName('p')[1];
console.log(specificParagraph);

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region CHANGE AN ATTRIBUTE

console.log("CHANGE AN ATTRIBUTE");
console.log("-------------------------------------"); //simple break for console log

console.log(listItems[0].classList);

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region DOM NODES: GETTING AND SETTING ATTRIBUTES

console.log("DOM NODES: GETTING AND SETTING ATTRIBUTES");
console.log("-------------------------------------"); //simple break for console log

// Change the Arnold Image
var imgArnold = document.getElementById('arnoldPic');

document.getElementById("arnoldPic").onclick = function() {arnold()};
function arnold () {
    imgArnold.setAttribute('src', 'http://www.arnold.fun/500/500');
}


console.log("-------------------------------------"); //simple break for console log

//#endregion

// #region DOM NODES: STYLES

console.log("DOM NODES: STYLES");
console.log("-------------------------------------"); //simple break for console log

//The rule of thumb in JavaScript is to change CSS styles with a " - " to camelCase.

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region ACTIVITY: CHANGE AN ATTRIBUTE

console.log("ACTIVITY: CHANGE AN ATTRIBUTE");
console.log("-------------------------------------"); //simple break for console log

//  Isolate a node (an element on the page) and change an attribute or
//  add a new style.

var pageBody = document.getElementsByTagName('body')[0];

pageBody.style.backgroundColor = 'pink';

pageBody.style.paddingTop = '10px';

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region DOM INNERHTML

console.log("DOM INNERHTML");
console.log("-------------------------------------"); //simple break for console log


//var pageBody = document.getElementsByTagName('body')[0];
//pageBody.innerHTML = '<h1>Oh Noes!</h1><p>I changed the whole page!</p>'

pageBody.innerHTML += '...just adding this at the end of the page.';

console.log("-------------------------------------"); //simple break for console log

// #endregion

