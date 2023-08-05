// show menu
let menu = document.querySelector('.menu-gp')
function openMenu(){
    ul.style.right= 'calc(100% - 280px)'
}
menu.addEventListener('click' , openMenu)
// hide menu
let closeIcon = document.querySelector('.close-icn')
function closeMenu(){
    ul.style.right= '100%'
}
closeIcon.addEventListener('click' , closeMenu)

// light & dark theme  
let moon = document.querySelector('.moon')
let sun = document.querySelector('.sun')

let darkerBg = document.querySelectorAll('.darker-bg')
let darkBg = document.querySelectorAll('.dark-bg')
let lightBg = document.querySelectorAll('.light-bg')
let lighterBg = document.querySelectorAll('.lighter-bg')

let darkerTxt = document.querySelectorAll('.darker-txt')
let darkTxt = document.querySelectorAll('.dark-txt')
let lightTxt = document.querySelectorAll('.light-txt')
let lighterTxt = document.querySelectorAll('.lighter-txt')


function changeToSun(){

    //icons
    sun.classList.remove('d-none')
    moon.classList.add('d-none')

    // backgrounds ----------------------------
    darkerBg.forEach(element1 => {
        element1.classList.add('lighter-bg')
        element1.classList.remove('darker-bg')
    });

    darkBg.forEach(element5 => {
        element5.classList.add('light-bg')
        element5.classList.remove('dark-bg')
    });

    lightBg.forEach(element6 => {
        element6.classList.add('light-bg')
        element6.classList.remove('dark-bg')
    });

    lighterBg.forEach(element2 => {
        element2.classList.add('darker-bg')
        element2.classList.remove('lighter-bg')
    });
    // texts ----------------------------------
    darkerTxt.forEach(element3 => {
        element3.classList.add('lighter-txt')
        element3.classList.remove('darker-txt')
    });
    darkTxt.forEach(element7 => {
        element7.classList.add('light-txt')
        element7.classList.remove('dark-txt')
    });

    lightTxt.forEach(element8 => {
        element8.classList.add('light-bg')
        element8.classList.remove('dark-txt')
    });
    lighterTxt.forEach(element4 => {
        element4.classList.add('darker-txt')
        element4.classList.remove('lighter-txt')
    });

}

function changeToMoon(){
    moon.classList.remove('d-none')
    sun.classList.add('d-none')
}
moon.addEventListener('click' , changeToSun)
sun.addEventListener('click' , changeToMoon)