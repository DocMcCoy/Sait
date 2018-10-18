console.log("Linked! - Activity 12")

// INSTRUCTIONS:    Use the map() method to create an array called
//                  'speeds' based on the 'trips' array. Speed is calculated as miles /
//                  hours.

const trips = [
    { miles: 5, hours: 1 },
    { miles: 6, hours: 0.5 },
    { miles: 4, hours: 2 }
];
const speeds = trips.map(trip => trip.miles / trip.hours); // your code here
// Output the speeds
console.log(speeds);