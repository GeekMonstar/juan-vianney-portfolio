let ville = 'sidney';
let appid = '142241b72cb61b0e44cfbe4c5d335d6f';

let ville_label = document.querySelector('#ville');
let temp_label = document.querySelector('#temperature_label');
let changer = document.querySelector('#changer');

App();
function App(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${appid}&units=metric`;
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = ()=>{
        console.log("c'est bon");
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                let response = request.response;
                ville_label.textContent = ville;
                temp_label.textContent = response.main.temp;
            }
            else{
                alert('nous rencontrons un problème revenez plus tard');
            }
        }
}
}
changer.addEventListener('click', ()=>{
    ville = prompt('Veuillez saisir le nom de la ville dont vous voulez la température.');
    App();
})
console.log(navigator);
