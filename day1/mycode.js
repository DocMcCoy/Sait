alert('Hello World');

console.log('Secret message'); //Commenting to the console

document.write('Secret message'); //Commenting directly to the page
document.write('Another secret message'); 
document.write('Wait ... none of these messages are Secret');

var x = 5;
console.log(x);

var y = 7;
var z = 10;
console.log(y * z);

var firstName = 'David';
var lastName = 'Wakely';
var wholeName = 'The secret name is '+ firstName + ' ' + lastName;
console.log(wholeName);

function whyNot() {
    console.log("Why not have a good time? We're not here for a long time.")
    document.write("Why not have a good time? We're not here for a long time.")
}

whyNot();

function nameGenerator(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log("My name written into the JS is " + firstName + " " + lastName)
console.log("The Name entered into the prompts is " + nameGenerator(prompt("What's yer first name?"), prompt("What's yer last name?")))
