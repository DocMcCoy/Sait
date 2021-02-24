console.log("Linked!");

// INSTRUCTIONS:    Write a function called multiply that accepts two
//                  parameters. The second parameter should have a default value of 1.
// BONUS:           Throw an error if the 


//example

// let addNumbers = (a, b = 10) => {
//     return a + b;
// }
// addNumbers(20); // 30
// addNumbers(20, 30); // 50

// Modify this function

function multiply(num1, num2 = 1) {
    return num1 * num2
}
console.log(multiply(5, 4));
console.log(multiply(4));
console.log(multiply());

// Below is the same function but with a custom error message.

// function multiply(num1, num2 = 1) {
//     if (!num1) {
//         throw Error("Enter a Number Next Time Dummy");
//     }
//     return num1 * num2
// }
// console.log(multiply(5, 4));
// console.log(multiply(4));
// console.log(multiply());