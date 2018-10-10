// #region While Loops!
console.log("-------------------------------------"); //simple break for console log
console.log("While Loops");
console.log("-------------------------------------"); //simple break for console log

var x = 1;

while (x < 13) {
    var answer = 9 * x;
    console.log("9 x " + x + " = " + answer);
    x = x + 1;
}

console.log("-------------------------------------"); //simple break for console log
console.log("Embeded While Loops");
console.log("-------------------------------------"); //simple break for console log

var y = 1;

while (y < 13) {
    var counter = 1
    while (counter < 13) {
        console.log(counter + " x " + y + " = " + y*counter);
        counter++;    
    }

    y++;
}

console.log("-------------------------------------"); //simple break for console log
//#endregion

// #region For Loops!
console.log("For Loops");
console.log("-------------------------------------"); //simple break for console log

for (var z = 1; z <= 12; z++) {
    console.log("9 x " + z + " = " + 9*z)
}


console.log("-------------------------------------"); //simple break for console log
console.log("Embeded For Loops");
console.log("-------------------------------------"); //simple break for console log

for (var z = 1; z <=12; z++) {
    for (var counter = 1; counter <= 12; counter++){
        console.log(z + " x " + counter + " = " + z*counter)
    }
}

console.log("-------------------------------------"); //simple break for console log
// #endregion

// #region Logic in Loops
console.log("Logic in Loops");
console.log("-------------------------------------"); //simple break for console log

for (var pizza = 1; pizza <= 20; pizza++) {
    if (pizza % 2 === 0) {
        console.log(pizza + " is even")
    }
    else if (pizza % 1 === 0){
        console.log(pizza + " is odd")
    }
    else {console.log(pizza)}
}

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Break Statement
console.log("Break Statement");
console.log("-------------------------------------"); //simple break for console log

// The break statement does not allow the number 6 to be in any position in x * y = z but it does allow 6 to appear in numbers like 16.
for (var z = 1; z <=12; z++) {
    for (var counter = 1; counter <= 12; counter++){
        var answer = z * counter;
        if (answer === 6 ){
            console.log("I hate the number 6");
            break;
        }
        else if (counter === 6 ){
            console.log("I hate the number 6");
            break;
        } 
        else if (z === 6) {
            console.log("I hate the number 6");
            break;
        }
        console.log(z + " x " + counter + " = " + z*counter)      
    }      
}

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Arrays

console.log("Arrays");
console.log("-------------------------------------"); //simple break for console log

var favoriteFoods = ["pizza", "burgers", "burrittos", "pasta", "hearts of my enemies"];
console.log(favoriteFoods)

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Array Length

console.log("Array Length");
console.log("-------------------------------------"); //simple break for console log

console.log("The favoriteFoods array is " + favoriteFoods.length + " items long.")

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Using Arrays

console.log("Using Arrays");
console.log("-------------------------------------"); //simple break for console log

console.log("The 3rd item in your favoriteFoods array is " + favoriteFoods[2])

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Changing Arrays
console.log("Changing Arrays");
console.log("-------------------------------------"); //simple break for console log

favoriteFoods[2] = "pain and suffering"
console.log(favoriteFoods)

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Expanding Arrays

console.log("Expanding Arrays");
console.log("-------------------------------------"); //simple break for console log

favoriteFoods.push ("salt n' peppa")
console.log (favoriteFoods)

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Iterating Through Arrays

console.log("Iterating Through Arrays");
console.log("-------------------------------------"); //simple break for console log

console.log("The Following is a list of your favourite foods;")
for (var i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i]);
}

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Objects

console.log("Objects");
console.log("-------------------------------------"); //simple break for console log

var favoriteRecipe = {
    recipeTitle: "Pain & Suffering",
    recipeDEscription: "This is a delicious recipe that will cause pain while you it eat. And a lot of suffering after you've digested it.",
    ingredients: ["chicken wings", "hot sauce 1", "hot sauce 2", "hot sauce 3", "butter"],
    directions: "bake those chicken wings at 500degrees, cook those freaky chickens. after 20 mins those wings are done. throw 'em in a metal bowl and toss those wings",
    rating: 5,
    cookTime: 20
};

console.log(favoriteRecipe);

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Accessing Objects

console.log("Accessing Objects");
console.log("-------------------------------------"); //simple break for console log

var recipeTitle = favoriteRecipe.recipeTitle;
var recipeDEscription = favoriteRecipe.recipeDEscription;
var ingredients = favoriteRecipe.ingredients;
var directions = favoriteRecipe.directions;
var rating = favoriteRecipe.rating;
var cookTime = favoriteRecipe.cookTime;

console.log(recipeTitle);
console.log(recipeDEscription);
console.log("Ingredients; " + ingredients);
console.log(directions);
console.log("Rating: " + rating + " / 5");
console.log("Cook time is " + cookTime + ":00 minutes");

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Change Objects

console.log("Change Objects");
console.log("-------------------------------------"); //simple break for console log

//1. Go back to your recipe object.
//2. Add a servings property (a number)
//3. Change the rating property value
//4. Delete the cook time property

favoriteRecipe.servings = 1;
favoriteRecipe.rating = 6;

delete favoriteRecipe.cookTime;

console.log (favoriteRecipe)

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Arrays of Objects

console.log("Arrays of Objects");
console.log("-------------------------------------"); //simple break for console log

var movies = [
    {movieName: 'Star Wars', movieRating: 5},
    {movieName: 'Empire Strikes Back',  movieRating: 5},
    {movieName: 'Return of the Jedi',  movieRating: 5}
];

for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    console.log("I give " + movie.movieName + ", " + movie.movieRating + " stars.");
}

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Objects in Functions

console.log("Objects in Functions");
console.log("-------------------------------------"); //simple break for console log

function recipeLog(recipeMaster) {
    console.log(recipeMaster.recipeTitle + "\n" + recipeMaster.servings);
}

recipeLog(favoriteRecipe);

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Object Methods

console.log("Object Methods");
console.log("-------------------------------------"); //simple break for console log

//1. Go back to your recipe object.
//2. Add a function called letsCook that says "I'm hungry! Let'scook..." with the name of your recipe title.
//3. Call your new method.

favoriteRecipe.cook = function letsCook() {
    console.log("I'm hungry! Let's cook " + favoriteRecipe.recipeTitle)
};

favoriteRecipe.cook();

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Array Object Methods

console.log("Array Object Methods");
console.log("-------------------------------------"); //simple break for console log

//1. Create 2 arrays - list of favorite movies - list of favorite books
//2. Log the length of each array
//3. Create a new variable moviesAndBooks and assign the arrays created by merging your 2 arrays
//4. Create a function isTitleLong that returns true if the argument (title) is longer than 6 characters
//5. Create a new variable moviesWithLongTitles that assigns the array created with all movies that pass the isTitleLong test. (filter)

var favoriteMovies = ["Star Wars", "Empire Strikes Back", "Return of the Jedi", "Saving Private Ryan"]
var favoriteBooks = ["Catch 22", "Man's Search for Meaning", "On the Road", "1984", "To Kill a Mockingbird"]

var moviesAndBooks = favoriteMovies.concat(favoriteBooks);

console.log(moviesAndBooks);

var moviesWithLongTitles = moviesAndBooks.filter(word => word.length > 6);

console.log(moviesWithLongTitles);

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Fixed Numbers

console.log("Fixed Numbers");
console.log("-------------------------------------"); //simple break for console log

//1. Create a variable pi that equals 3.14159
//2. Log the results of cutting o pi after 2 decimal points

var pi = 3.14159
console.log(pi.toFixed(2))

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Dates

console.log("Dates");
console.log("-------------------------------------"); //simple break for console log

//  1.  Create a new Date object with today's date and assign it to a variable today
//  2.  Log the day of the month
//  3.  Create a function dayOfWeek that takes a number between 0and 6 and returns 
//      the associated day. For example, if you call dayOfWeek(0), the function returns
//      "Sunday"
//  4.  Use your new function to get today's day of the week and log it.

var date = new Date();

console.log("Today's Date and Time is " + date);
console.log("We are " + date.getDate() + " days into the month.") ;

function dayOfWeek(i) {
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log(day[i]);
}

console.log("It's " + dayOfWeek(date.getDay) + " today!");

console.log("-------------------------------------"); //simple break for console log

// #endregion

// #region Math

console.log("Math");
console.log("-------------------------------------"); //simple break for console log


console.log("-------------------------------------"); //simple break for console log

// #endregion