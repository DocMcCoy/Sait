/*
1.* Create an index.html page with the following:
     *  Navigation - 4 links
     *  H1 heading with id
     *  2 paragraphs
2.* Add any placeholder content that you choose to those elements.
3.* Use https://modernizr.com/ to add feature detection for geolocation.
4.* If the browser supports geolocation, add a kitten image (https://placekitten.com/) to the page.
    If it doesn't, add a puppy image (http://www.placepuppy.net/) to the page.
5.* If your page is the first visited in that tab (history.length), make the background lightblue.
    Otherwise, make the background light orange.
6.* Style the h1 heading using getElementById.

Feel free to style more of your website with JavaScript.
Bonus: Style every even nav item differently from the odd nav items.
*/

var pageBody = document.getElementsByTagName('body')[0];

if (Modernizr.geolocation) {
    var newImg = document.createElement('img');
    newImg.src = 'http://placekitten.com/g/500/200';
    newImg.style.border = '1px solid black';
    pageBody.appendChild(newImg);
  } else {
    var newImg = document.createElement('img');
    newImg.src = 'http://www.placepuppy.net/500/200';
    newImg.style.border = '1px solid black';
    pageBody.appendChild(newImg);
  }

if (history.length === 1) {
    pageBody.style.background += "blue";
} else {
    pageBody.style.background += "orange";
};

var heading = document.getElementById('heading');

heading.style.fontSize = '100px';
heading.style.fontFamily = 'arial';
heading.style.textTransform = 'uppercase';
heading.style.textAlign = 'center';
heading.style.fontWeight = '900';
heading.style.margin = '0px';
heading.style.padding = '0px';

var listItems = document.getElementsByTagName('li');


for (var i = 0; i < listItems.length; i++) {
    if (i % 2 === 0) {
        var even = listItems[i]
        even.style.backgroundColor = "#fff";
        even.style.color = "black";
    }
    else {
        var odd = listItems[i];
        odd.style.background = "black";
        odd.style.color = "white";
    }
}