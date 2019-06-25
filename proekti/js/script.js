var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');
    var contact = document.querySelector('.wrapper');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (con) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        contact.classList.add('.contact-form');
        changeIcon = true;
    }
});