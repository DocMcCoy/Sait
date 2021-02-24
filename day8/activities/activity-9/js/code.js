console.log('Linked!')

// INSTRUCTIONS:    Each trip has a rate (mph) and time (hours) which
//                  we are using to calculate distance (mph * hours). Refactor this code
//                  to use the forEach helper instead of a for loop.


// Original Code

// const trips = [
//     { mph: 10, hours: 3 },
//     { mph: 30, hours: 2 },
//     { mph: 25, hours: 4 }
// ];
// for (let i = 0; i < trips.length; i++) {
//     console.log(trips[i].mph * trips[i].hours);
// };

const trips = [
    { mph: 10, hours: 3 },
    { mph: 30, hours: 2 },
    { mph: 25, hours: 4 }
];

trips.forEach((trip) => {
    console.log(trip.mph * trip.hours);
});
