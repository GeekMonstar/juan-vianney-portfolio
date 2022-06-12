let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let error = document.querySelector('small');
let Console = document.querySelector('#console');
let form = document.querySelector('form');
let prix = Math.floor(Math.random() * 1000);
let essai = 0;
let saisie;
error.style.display = 'none';
input.addEventListener('keyup', inputV);
btn.addEventListener('click', verification);
form.addEventListener('submit', (e) => {
    e.preventDefault;
})

function verification(){
    if(isNaN(input.value) || input.value == ''){
        input.style.border = '2px solid red';
    }
    else{
        input.style.border = '2px solid silver';
        essai++;
        saisie = input.value;
        verifier();
        /*if(input.value != prix){
            if(input.value < prix){
                Console.innerHTML += '<div class="error"> #' + essai + ' ' + input.value + ' est inférieur au prix à deviner.'
            }
            else if(input.value > prix){
                Console.innerHTML += '<div class="error"> #' + essai + ' ' + input.value + ' est supérieur au prix à deviner.'
            }
            input.value = '';
        }
        else{
            Console.innerHTML += '<div class="success"> #' + essai + ' Vous avez gagné, Le prix à deviner est bien' + input.value + '. Bravo à vous.';
        }*/
    }
}

function verifier(){
    let instruction = document.createElement('div');
    instruction.className = 'instruction';

    if(saisie < prix){
        instruction.className += ' error';
        instruction.textContent = '#' + essai + ': ' + input.value + ' est inférieur au prix à deviner.';
        input.value = '';
    }
    else if(saisie > prix){
        instruction.className += ' error';
        instruction.textContent = '#' + essai + ': ' + input.value + ' est supérieur au prix à deviner.';
        input.value = '';
    }
    else{
        instruction.className += ' success';
        instruction.textContent = '#' + essai + ': Bravo ' + input.value + ' est bien au prix à deviner.';
    }
    Console.prepend(instruction);
}

function inputV(){
    if(isNaN(input.value)){
        error.style.display = 'inline';
    }
    else{
        error.style.display = 'none';
    }
}