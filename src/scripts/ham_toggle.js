var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit");

menu.addEventListener("click", (e) => {
    nav.classList.toggle("hide-mobile");
    menu.style.display = "none";
    e.preventDefault();
}) 

exit.addEventListener("click", (e) => {
    nav.classList.add("hide-mobile");
    menu.style.display = "block";
    e.preventDefault();
}) 