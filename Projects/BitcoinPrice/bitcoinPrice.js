const url = 'https://www.blockchain.com/ticker';
let price_label_eur = document.querySelector('#price_label_eur');
let price_label_usd = document.querySelector('#price_label_usd');
let price_label_gbp = document.querySelector('#price_label_gbp');
let price_label_jpy = document.querySelector('#price_label_jpy');

//crée une requete
let request = new XMLHttpRequest();

let intervalle = setInterval(load, 1000);

async function load(){
    //ouverture de la requete
    request.open('GET', url);
    //definition du type du fichier de reponse
    request.responseType = 'json';
    //envoi de la requete
    request.send();
    request.onload = () => {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                let response = request.response;
                price_label_eur.textContent = response.EUR.last;
                price_label_usd.textContent = response.USD.last;
                price_label_gbp.textContent = response.GBP.last;
                price_label_jpy.textContent = response.JPY.last;
            }
            else{
                alert('Un problème a été rencontré.');
            }
        }
    }
    /*const requete = await fetch(url,{
        method: 'GET'
    })

    if(!requete.ok){
        alert('un probleme est survenu')
    }
    else{
        let donnees = await requete.json();
    }*/
}