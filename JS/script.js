const loader = document.querySelector('#loader');
const projectSection = document.querySelector('#project');
const projectsData = [
    {
        'link': './projects/AppliMeteo/',
        'title': 'Apllication météo',
        'mobileImage': './img/cap-1-mobile.png',
        'pcImage': './img/cap-1-pc.png',
    },
    {
        'link': './projects/SportApp/',
        'title': 'PlayerWiki',
        'mobileImage': './img/cap-2-mobile.png',
        'pcImage': './img/cap-2-pc.png',
    },
    {
        'link': './projects/BitcoinPrice/',
        'title': 'Prix du Bitcoin',
        'mobileImage': './img/cap-3-mobile.png',
        'pcImage': './img/cap-3-pc.png',
    },
    {
        'link': './projects/sun-moon/',
        'title': 'éclipse',
        'mobileImage': './img/cap-4-mobile.png',
        'pcImage': './img/cap-4-pc.png',
    }
];

console.log(projectsData[0].link);

(() => {
    projectSection.innerHTML = '';
    for (let i = 0; i < projectsData.length; i++) {
        projectSection.innerHTML += `
        <div class="project">
            <a href="${projectsData[i].link}">
                <img class="item-img" src="${window.screen.width >= 700 ? projectsData[i].pcImage : projectsData[i].mobileImage}" alt="${projectsData[i].title}">
            </a>
            <div class="p-title">${projectsData[i].title}</div>
        </div>
        `
    }
})();

window.addEventListener('load', () => {
    loader.remove();
})

