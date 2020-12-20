import LocomotiveScroll from 'locomotive-scroll';

var button = document.getElementById("scroll-r");
var button2 = document.getElementById("scroll-p");
const target = document.querySelector("#ri");
const target2 = document.querySelector("#publication");

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true
});

button.addEventListener("click", (e) => {
    scroll.scrollTo(target);
})

button2.addEventListener("click", (e) => {
    scroll.scrollTo(target2);
})

// This is to initialize locomotive when everything is reloaded
window.addEventListener('load', (event) => {
    scroll.update();
});
