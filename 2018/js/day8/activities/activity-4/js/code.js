// const sum = function(num1, num2) {
//     return num1 + num2;
//     }
//     console.log(sum(3, 4));

const sum = (num1, num2) => num1 + num2;

console.log(sum(3, 4));

// const fibonacci = function (n) {
//     if (n < 3) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(9)); // 34

const fibonacci = n => {
    if (n < 3) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(9)); // 34

