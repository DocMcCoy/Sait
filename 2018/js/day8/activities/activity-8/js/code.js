console.log("linked!")

// INSTRUCTIONS:    Can you get the body of isActiveEngineer() down to
//                  two lines using destructuring?


// Orignal Code - Comment out to test

// const myEmployee = {
//     active: true,
//     department: 'Engineering'
// };
// function isActiveEngineer(employee) {
//     const active = employee.active;
//     const department = employee.department;
//     return department === 'Engineering' && active;
// }
// console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);

// Refactored Code

const myEmployee = {
    active: true,
    department: 'Engineering'
};
let isActiveEngineer = (employee) => {
    const {active, department} = employee;
    return department === 'Engineering' && active;
}
console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);