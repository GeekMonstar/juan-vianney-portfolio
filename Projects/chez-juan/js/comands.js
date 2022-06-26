let command_menu = document.querySelector('.comand-menu');
let cart_img = document.querySelector('#cart_img');
let fermer = document.querySelector('.fermer');

cart_img.addEventListener('click', enable);

fermer.addEventListener('click', disable);

function enable(){
    command_menu.style.display = 'flex';
}

function disable(){
    command_menu.style.display = 'none';
}