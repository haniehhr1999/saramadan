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