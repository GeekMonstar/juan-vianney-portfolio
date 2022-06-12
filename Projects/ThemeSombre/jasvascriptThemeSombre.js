let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let button = document.querySelector('button');
if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') == 'sombre'){
        modeSombre();
    }
}

button.addEventListener('click', ()=>{
    if(localStorage.getItem('theme') == 'sombre'){
        document.body.className = "";
        button.className = '';
        button.textContent = 'Mode sombre';
        localStorage.setItem('theme', 'clair')
    }
    else{
        modeSombre();
    }
});

function modeSombre(){
    document.body.className = "dark";
    button.className = 'dark';
    button.textContent = 'Mode clair';
    localStorage.setItem('theme', 'sombre')
}

