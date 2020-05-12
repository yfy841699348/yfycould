
var menu1 = document.getElementsByClassName('menu1')[0];
var menu2 = document.getElementsByClassName('menu2')[0];
var menu3 = document.getElementsByClassName('menu3')[0];
menu1.addEventListener('click',function () {
    menu2.style.opacity = 0.4;
    menu3.style.opacity = 0.4;
    menu1.style.opacity = 1;
})
menu2.addEventListener('click',function () {
    menu1.style.opacity = 0.4;
    menu3.style.opacity = 0.4;
    menu2.style.opacity = 1;
})
menu3.addEventListener('click',function () {
    menu1.style.opacity = 0.4;
    menu2.style.opacity = 0.4;
    menu3.style.opacity = 1;
})
