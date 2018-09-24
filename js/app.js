// 1. GET HTML Elements

var hamburger = document.querySelector('#hamburger')
var closeHamburger = document.querySelector('#close-hamburger')
var mobileNav = document.querySelector('#mobile-nav')

// 2. Define Actions

function openMenu() {
    mobileNav.className = 'mobile-nav'
}

function closeMenu() {
    mobileNav.className = 'mobile-nav closed'
}

// 3. Wire it all up

hamburger.addEventListener('click', openMenu)
closeHamburger.addEventListener('click', closeMenu)