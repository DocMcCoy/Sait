console.log("Linked! - Activity 14")

// findIndex Example

// const numbers = [ 25, 30, 35, 40, 45 ];
// const firstIndex = numbers.findIndex(number => number > 33);
// console.log(firstIndex); // 2 (the location of 35)

// reduce Example

// const numbers = [2, 6, 10];
// const sum = numbers.reduce(function (currentSum, number) {
//     return currentSum + number;
// }, 0);
// console.log(sum); // 18

// INSTRUCTIONS:    Use reduce() to find the sume of the elements in the transactions
//                  array. Remember to return the current calculated value (the first
//                  parameter in the iterator function) every iteration.

// Original Code;
// const transactions = [5, 10, 15];
// const sum = 0;
// console.log(sum); // 30


const transactions = [5, 10, 15];
const sum = transactions.reduce(function(currentSum, number) {
    return currentSum + number;
}, 0);
console.log(sum); // 30