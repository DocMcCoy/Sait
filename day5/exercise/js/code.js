console.log("Linked!")
// Assign your submit button to a variable
var submitBtn = document.myForm.submit;
// Add a "click" event listener to your submitButton
console.log(submitBtn)

var submitButton = document.getElementById('submit');
var errorQuiz1 = document.getElementById('errorQuiz1');
var errorQuiz2 = document.getElementById('errorQuiz2');
var errorQuiz3 = document.getElementById('errorQuiz3');
var errorQuiz4 = document.getElementById('errorQuiz4');
var errorQuiz5 = document.getElementById('errorQuiz5');

submitButton.addEventListener("click", function(event) {
    // Code goes here
    errorQuiz1.style.display = "none";
    errorQuiz2.style.display = "none";
    errorQuiz3.style.display = "none";
    errorQuiz4.style.display = "none";
    errorQuiz5.style.display = "none";
    
    var quiz1 = document.myForm.quiz1.value;
    console.log(quiz1)
    var quiz2 = document.myForm.quiz2.value;
    console.log(quiz2)
    var quiz3 = document.myForm.quiz3.value;
    console.log(quiz3)
    var quiz4 = document.myForm.quiz4.value;
    console.log(quiz4)
    var quiz5 = document.myForm.quiz5.value;
    console.log(quiz5)

    if (!quiz1) {
        event.preventDefault();
        errorQuiz1.style.display = "block";
    }
    if (!quiz2) {
        event.preventDefault();
        errorQuiz2.style.display = "block";
    }
    if (!quiz3) {
        event.preventDefault();
        errorQuiz3.style.display = "block";
    }
    if (!quiz4) {
        event.preventDefault();
        errorQuiz4.style.display = "block";
    }
    if (!quiz5) {
        event.preventDefault();
        errorQuiz5.style.display = "block";
    }
});

// http://jsfiddle.net/dY372/


document.getElementById("answer").onclick = validate;

function validate() {
    var checkboxes = document.getElementsByName("input");
    var checkboxChecked = []; 

    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked && (checkboxes[i].value === "right")) {
            checkboxChecked.push(checkboxes[i]);
        }
    }

    if(checkboxChecked.length === 2) {
        alert("You answered correctly");
    } 
    else {
        alert("Wrong answer");
    }
}

