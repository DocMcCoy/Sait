console.log("Linked!")

//How to handle errors with AJAX
var myForm = document.getElementById('myForm');
console.log(myForm)
var submitButton = document.getElementById('submit');

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    var name = document.getElementById("formartist").value;
    var title = document.getElementById("formtitle").value;

    lyrics(name, title);

})





var name = "Coldplay"
var title = "Adventure of a Lifetime"

function lyrics(a, b) {
    fetch('https://api.lyrics.ovh/v1/' + a + '/' + b)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            // clear any previous data
            var myNode = document.getElementById("lyricContainer");
            myNode.innerHTML = '';
            var element = document.createElement("div");
            element.appendChild(document.createTextNode(data.lyrics));
            element.classList.add("lyricContainer")
            // element.style.whiteSpace = 'pre-wrap'
            document.getElementById('lyricContainer').appendChild(element);
        })
        .catch(function (error) {
            //clear any previous data
            var myNode = document.getElementById("lyricContainer");
            myNode.innerHTML = '';
            //create new div for error message
            var element = document.createElement("div");
            element.appendChild(document.createTextNode(error + ' - Try Entering the Artist and Title Correctly Next Time'));
            element.classList.add("errorContainer")
            // element.style.whiteSpace = 'pre-wrap'
            document.getElementById('lyricContainer').appendChild(element);
        });
};

