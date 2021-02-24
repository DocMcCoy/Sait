console.log("Linked!");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
        // console.log(response);
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }

    })

// Create the content to send
var user = {
    username: "htovey",
    id: 700
};
// Fetch the URL
fetch('https://jsonplaceholder.typicode.com/users', {
    // Set your method
    method: 'POST',
    // Set your headers
    headers: {
        'Content-Type': 'application/json'
    },
    // Set your body
    body: JSON.stringify(user)
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    });

//How to handle errors with AJAX
fetch('http://jsonplaceholder.typicode.com/404')
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });
//How to handle errors with AJAX
fetch('https://api.github.com/users/DocMcCoy/')
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });