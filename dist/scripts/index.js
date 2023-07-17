import { icons, competences, projectsData, technos } from "./data.js";
const loader = document.querySelector("#loader");
const projectSection = document.querySelector("#project");
const competencesSection = document.querySelector("#comp-list");
const technosSection = document.querySelector("#technos-list");
const audioPlayer = document.querySelector("audio");
const launcher = document.querySelector("#launcher");
const startBtn = document.querySelector(".button-start");
const presentationSpan = document.querySelector("#presentation-txt-src");
const presentationTxt = `Je suis <span>Juan Vianney</span>, je suis developpeur web junior. Je suis un passionné du numérique depuis ma tendre enfance et le développement web à été une opportunité pour moi d'intégrer ce domaine. J'apprends le developpement web depuis mes années de lycée ce qui m'a permis de gagner en autonomie dans l'acquisition de la connaissance par le biais d'internet. Pour en savoir plus, merci de continuer l'exploration de mon portfolio 😁.`;
startBtn.addEventListener("click", start);
let index = 0;
window.addEventListener("load", () => {
    loader.remove();
});
competences.map((item) => {
    competencesSection.innerHTML += `
    <div class="comp">
        ${showIcon("skills", item.icon)}
        <p>${item.title}</p>
        <div class='progress'>
            <div class='progress-value' style="width:${0}%;height:100%"></div>
        </div>
    </div>`;
});
projectsData.map((item) => {
    if (!item.dev) {
        projectSection.innerHTML += `<div class="project">
            <div class="item-img-container">
                <img class="item-img" src="${item.cover}" alt="${item.title}">
            </div>
            <div class='project-data'>
                <h3 class='project-name'>${item.title}</h3>
                <div class='project-skills-icons'>
                ${item.skills.map((i) => showIcon("skills", i)).join("")}</div>
                <p class='project-description'>${item.description}</p>
            </div>
            <a class='integral-link' href=${item.link}>
        </div>`;
    }
});
technos.map((item) => {
    technosSection.innerHTML += `<div class="tool ${item.class}">
            ${item.svg}
                <p>${item.title}</p>
        </div>`;
});
const progressValues = document.querySelectorAll(".progress-value");
function start() {
    launcher.remove();
    audioPlayer.play();
    const writter = setInterval(() => {
        if (index < presentationTxt.length) {
            const randomDelay = Math.random() * 100;
            setTimeout(() => {
                presentationSpan.innerHTML += presentationTxt[index];
                index += 1;
            }, randomDelay);
        }
        else {
            clearInterval(writter);
            audioPlayer.pause();
        }
    }, 100);
    setTimeout(() => {
        for (let i = 0; i < competences.length; i++) {
            console.log(progressValues[i]);
            progressValues[i].setAttribute("style", `width:${competences[i].level}%;height:100%`);
            console.log(progressValues[i].getAttribute("style"));
        }
    }, 500);
}
function showIcon(type, name) {
    if (type === "skills") {
        return icons.skills[name];
    }
}
