fetch('https://swapi.co/api/people/1/').then(function (response) { console.log(response); });

fetch('https://swapi.co/api/people/1/').then(response => response.json()).then(data => console.log(data.name));