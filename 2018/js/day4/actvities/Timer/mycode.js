console.log("Linked!");

var block = document.getElementById('timer-block')
var date = new Date();
console.log(date);


function doThisLater() {
    var date = new Date();
    block.innerHTML = date;
    }
var timerId = setInterval(doThisLater, 1000);