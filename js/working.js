// 1. GET HTML Elements

var button = document.querySelector('#button')
var closeButton = document.querySelector('#close-button')
var menu = document.querySelector('#menu')

// 2. Define Actions

function openMenu() {
    menu.className = 'menu'
}

function closeMenu() {
    menu.className = 'menu closed'
}

// 3. Wire it all up

button.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)