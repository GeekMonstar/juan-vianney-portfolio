import icons from './data/icons';
import competences from './data/competences';
import projects_data from './data/projectsData';
import tools from './data/tools';
const loader = document.querySelector('#loader');
const projectSection = document.querySelector('section#project');
const competencesSection = document.querySelector('section#comp-list');
const toolsSection = document.querySelector('section#tools-list');
competences.map(item => {
    competencesSection.innerHTML +=
        `<div class="comp">
            ${showIcon('skills', item.icon)}
            <p>${item.title}</p>
            <div class='progress'>
                <div class='progress-value' style="width:${item.level}%;height:100%"></div>
            </div>
        </div>`;
});
projects_data.map(item => {
    if (!item.dev) {
        projectSection.innerHTML +=
            `<div class="project">
            <div class="item-img-container">
                <img class="item-img" src="${item.cover}" alt="${item.title}">
            </div>
            <div class='project-data'>
                <h3 class='project-name'>${item.title}</h3>
                <div class='project-skills-icons'>${item.skills.map(i => showIcon('skills', i)).join('')}</div>
                <p class='project-description'>${item.description}</p>
            </div>
            <a class='integral-link' href=${item.link}>
        </div>`;
    }
});
tools.map(item => {
    toolsSection.innerHTML += `<div class="tool">
            ${item.svg}
                <p>${item.title}</p>
        </div>`;
});
function showIcon(type, name) {
    if (type === 'skills') {
        return icons.skills[name];
    }
    else if (type === 'tools') {
        return icons.tools[name];
    }
}
window.addEventListener('load', () => {
    loader.remove();
});
