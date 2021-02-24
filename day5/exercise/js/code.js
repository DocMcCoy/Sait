// Create a Quiz
//     √  • Create 5 or more quiz questions with a total of 3 different types of inputs.
//     √  • Display the questions on your page.
//     • Require that each question be filled out.
//     • When a user submits the quiz, score it and display their score.
//     • Once you've finished creating your quiz, modify your code to only show one quiz question at a time.
//     • Consider everything you've learned up through now. Make your quiz look and feel good. This could be a potential project for your portfolio.
//     • When you are done, create a Github page for this project and submit a link to the actual quiz website.
//         If you have questions about your code, please email me the Github page link or your repository link. Please don't copy/paste your code into email. Thank you.**

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
    var quiz3 = document.getElementsByName("quiz3");
    var checkboxCheckedQuiz3 = [];
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

    if (!quiz4) {
        event.preventDefault();
        errorQuiz4.style.display = "block";
    }

    for(var i = 0; i < checkboxesQuiz3.length; i++) {
        if(checkboxes[i].checked && (checkboxesQuiz3[i].value === "right")) {
            checkboxCheckedQuiz3.push(checkboxesQuiz3[i]);
        }
    }

    if(checkboxesQuiz3.length === 4) {
        alert("You answered correctly");
    } 
    else {
        alert("Wrong answer");
    }
});



// document.getElementById("answer").onclick = validate;

// function validate() {
//     var checkboxes = document.getElementsByName("input");
//     var checkboxChecked = []; 

//     for(var i = 0; i < checkboxes.length; i++) {
//         if(checkboxes[i].checked && (checkboxes[i].value === "right")) {
//             checkboxChecked.push(checkboxes[i]);
//         }
//     }

//     if(checkboxChecked.length === 2) {
//         alert("You answered correctly");
//     } 
//     else {
//         alert("Wrong answer");
//     }
// }

