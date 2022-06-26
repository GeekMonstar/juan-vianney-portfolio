let scroll = document.querySelector('#scroll');
let Length = scroll.ChildNodes;
console.log(scroll.ChildNodes);
let hMove = 0;
console.log(window.innerWidth);

let formule = 6*(350 + 20) - window.innerWidth;

let scrollAnimation = setInterval(()=>{
    if(hMove < formule){
        console.log(hMove);
        hMove += 500;
        scroll.style.left = `-${hMove}px`;
    }
    else{
        hMove = 0;
        scroll.style.left = `-${hMove}px`;
    }
}, 3000)

let internalLinks = document.querySelectorAll('#catergories-list-item');
console.log(internalLinks);