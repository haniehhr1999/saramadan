// show menu
let ul = document.querySelector('ul')
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

let varydarkBg = document.querySelectorAll('.verydark-bg')
let darkerBg = document.querySelectorAll('.darker-bg')
let darkBg = document.querySelectorAll('.dark-bg')
let lightBg = document.querySelectorAll('.light-bg')
let lighterBg = document.querySelectorAll('.lighter-bg')
let whiteBg = document.querySelectorAll('.bg-white')

let verydarkTxt = document.querySelectorAll('.verydark-txt')
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
        element6.classList.add('dark-bg')
        element6.classList.remove('light-bg')
    });

    lighterBg.forEach(element2 => {
        element2.classList.add('darker-bg')
        element2.classList.remove('lighter-bg')
    });

    whiteBg.forEach(element9 => {
        element9.classList.add('verydark-bg')
        element9.classList.remove('bg-white')
    });
    // texts ----------------------------------
    verydarkTxt.forEach(el => {
        el.classList.add('text-white')
        el.classList.remove('verydark-txt')
    });
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
    //icons
    moon.classList.remove('d-none')
    sun.classList.add('d-none')
    // backgrounds ----------------------------
    darkerBg.forEach(element1 => {
        element1.classList.remove('lighter-bg')
        element1.classList.add('darker-bg')
    });

    darkBg.forEach(element5 => {
        element5.classList.remove('light-bg')
        element5.classList.add('dark-bg')
    });

    lightBg.forEach(element6 => {
        element6.classList.remove('dark-bg')
        element6.classList.add('light-bg')
    });

    lighterBg.forEach(element2 => {
        element2.classList.remove('darker-bg')
        element2.classList.add('lighter-bg')
    });

    whiteBg.forEach(element9 => {
        element9.classList.remove('verydark-bg')
        element9.classList.add('bg-white')
    });
    // texts ----------------------------------
    verydarkTxt.forEach(el => {
        el.classList.remove('text-white')
        el.classList.add('verydark-txt')
    });
    darkerTxt.forEach(element3 => {
        element3.classList.remove('lighter-txt')
        element3.classList.add('darker-txt')
    });
    darkTxt.forEach(element7 => {
        element7.classList.remove('light-txt')
        element7.classList.add('dark-txt')
    });

    lightTxt.forEach(element8 => {
        element8.classList.remove('light-bg')
        element8.classList.add('dark-txt')
    });
    lighterTxt.forEach(element4 => {
        element4.classList.remove('darker-txt')
        element4.classList.add('lighter-txt')
    });
}
moon.addEventListener('click' , changeToSun)
sun.addEventListener('click' , changeToMoon)