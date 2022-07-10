let body = document.body;
let nav = document.querySelector('nav');
let logo = document.querySelector('#header-logo');
let loader = document.querySelector('#loader');

window.scroll(0, 0);
let interval = setInterval(() => {
    console.log('change');
    if (window.scrollY < window.innerHeight) {
        nav.style.background = "#47484a";
        nav.style.color = "white";
        logo.src = 'img/logo-png.png';
    }
    else {
        nav.style.background = "linear-gradient(90deg, #1fceed, #f3aec1)";
        //nav.style.background = "white";
        nav.style.color = "#47484a";
        logo.src = 'img/logo-png-white.png';
    }
}, 500);

window.addEventListener("load", () => {
    body.style.overflowY = "scroll";
    loader.style.opacity = "0";
})