console.log("Linked!")

// INSTRUCTIONS:    Refactor the following to use the rest operator.
//                  There should be no restriction on how many numbers the function
//                  accepts.


// let array = [2, 3, 4, 1];
// console.log(array);
// array.push(5);
// console.log(array);

// for (let value of array) {
//     console.log(value);
// }

// let createArray = (...array) => {
//     console.log(array);
// }
// // below is a list
// createArray(10, 20, 40, 60, 90); // [10, 20, 40, 60, 90]

// let createListFromArray = (...list) => {
//     console.log(list);
// }
// // below is an array
// createListFromArray([10, 20, 40, 60, 90]); // 10, 20, 40, 60, 90

// function product(x, y, z) {
//     var numbers = [x, y, z];
//     return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
// }
// console.log(product(3, 4, 5)); // 60
// console.log(product(3, 4, 5, 6)); // 360
// console.log(product(1, 2, 3, 4, 5, 6)); // 720

let product = (...numbers) => {
    // var numbers = [x, y, z];
    return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
}
console.log(product(3, 4, 5)); // 60
console.log(product(3, 4, 5, 6)); // 360
console.log(product(1, 2, 3, 4, 5, 6)); // 720