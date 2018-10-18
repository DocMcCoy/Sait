console.log("Linked!")

// INSTRUCTIONS:    You're managing IT inventory and want to check if
//                  all of your available laptops have at least 16 GB of RAM. If not, do
//                  some of them have at least 16 GB of RAM?

const availableLaptops = [
    { name: 'MacBook', RAM: 8 },
    { name: 'Asus', RAM: 32 },
    { name: 'Lenovo', RAM: 16 },
    { name: 'HP', RAM: 4 }
];

// your code here
const allRam = availableLaptops.every(availableLaptops => availableLaptops.RAM >= 16);
console.log(allRam); // false

const someRam = availableLaptops.some(availableLaptops => availableLaptops.RAM >= 16);
console.log(someRam); // true