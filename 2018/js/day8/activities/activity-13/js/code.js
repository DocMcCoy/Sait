console.log("Linked! - Activity 13")

// INSTRUCTIONS:    We need to console.log the title and body of the
//                  post with ID 29. Use the find() method to set the value of 'currentPost'
//                  to the object with ID 29. If everything AudioWorkletNode, you should 
//                  see the title and body in your console.

// An array of posts
const posts = [
    { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sitamet...' }
];

// Find the post with ID 29
const currentId = 29;
const currentPost = posts.find(post => post.id === 29); // your code here
console.log(currentPost.title);
console.log(currentPost.body);