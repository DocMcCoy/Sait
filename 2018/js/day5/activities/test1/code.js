var submitButton = document.getElementById('submit');
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');
var tooYoung = document.getElementById('tooYoung');

submitButton.addEventListener("click", function(event) {
    errorName.style.display = "none";
    errorAge.style.display = "none";
    tooYoung.style.display = "none";

    var name = document.form1.name.value;
    var age = document.form1.txtAge.value;
    var young = parseInt(age)

    if (!name) {
    event.preventDefault();
    errorName.style.display = "block";
    }

    if (!age) {
    event.preventDefault();
    errorAge.style.display = "block";
    }

    if (young < 18) {
    event.preventDefault();
    tooYoung.style.display = "block";
    }
});
