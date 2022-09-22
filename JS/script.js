let loader = document.querySelector('#loader');
console.log(loader);
(()=>{
    loader.remove();
})();
Delete();
wondow.addEventListener('load',()=>{
    setTimeOut(()=>loader.remove(),3000);
})
