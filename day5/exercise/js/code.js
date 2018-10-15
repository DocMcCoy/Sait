console.log("Linked!")
// Assign your submit button to a variable
var submitButton = document.myForm.submit;
// Add a "click" event listener to your submitButton
console.log(submitButton)
submitButton.addEventListener("click", function(event) {
// Prevent the default action
event.preventDefault();
// Run the rest of your code
var quiz1value = document.myForm.quiz1.value;
console.log(quiz1value);
var quiz2value = document.myForm.quiz2.value;
console.log(quiz2value);
var quiz3value = document.myForm.quiz3.value;
console.log(quiz3value);
var quiz4value = document.myForm.quiz4.value;
console.log(quiz4value);
var quiz5value = document.myForm.quiz5.value;
console.log(quiz5value);
})