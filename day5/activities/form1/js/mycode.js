console.log("this page is linked!")

var myForm = document.myForm;
console.log(myForm)

var fname = document.myForm.firstname;
console.log(fname)

var fnameValue = document.myForm.firstname.value;
console.log(fnameValue)

// Create a list of checkboxes by using the checkbox name


function formViewer() {
    console.log("Form Values")
    console.log("Hello " + document.myForm.firstname.value + ", want some Jello?");
    console.log("First Name = " + document.myForm.firstname.value)
    console.log("Last Name = " + document.myForm.lname.value)
    var checkboxList = document.myForm.makeof4x4;
// Loop through your checkbox list
    for (var i = 0; i < checkboxList.length; i++) {
// If a checkbox is checked, console.log the value of the checkbox.
    if (checkboxList[i].checked) {
    console.log(checkboxList[i].value);
}
}
console.log ("Country = " + document.myForm.country.value)
console.log ("Here is the following message;\n" + document.myForm.message.value)
}
setInterval(formViewer, 10000)
// Assign your submit button to a variable
var submitButton = document.myForm.submit;
// Add a "click" event listener to your submitButton
submitButton.addEventListener("click", function(event) {
// Prevent the default action
event.preventDefault();
// Run the rest of your code
var name = document.myForm.fname.value;

})
