console.log("Linked!")

// INSTRUCTIONS:
//  •   Create a div with an id of "target" in your index.html page.
//  •   Refactor this code to use template strings.

const user = {
    name: 'Cody',
    loginCount: 1,
    goldStatus: true
};

// const className = 'container';
// const html = '<div class="' + className + '">'
//     + '<h2>Welcome' + (user.goldStatus ? ' to our gold status member, ' : ', ') +
//     user.name + '!' + '</h2>'
//     + '<p>Today is ' + new Date() + '</p>'
//     + '<p>You have logged in ' + ++user.loginCount + ' times.</p>'
//     + '</div>';
// document.getElementById('target').innerHTML = html;

const className = 'container';
const html = `<div class="${className}"> <h2>Welcome ${(user.goldStatus ? ' to our gold status member, ' : ', ')}${user.name}!</h2>
    <p>Today is ${new Date()}</p>
    <p>You have logged in ${++user.loginCount} times.</p>
    </div>`;
document.getElementById('target').innerHTML = html;

var test = `asdfasdf
sadfasdfsadf
asdfasdfasa`;

