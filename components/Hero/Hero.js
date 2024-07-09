import "./Hero.css";
import data from "../data/data.js";

const heroPrint = () => {
  console.log('Rendering hero section...');
  const sectionHero = document.createElement('section');
  sectionHero.id = 'hero';
  

  sectionHero.innerHTML = `
  <div id = "div-texto">
  <p class = "titles pHero"> Hi, I am </p>
  <h1 class = "titles h1Hero">${data.name}</h1>
  <h2 class = "titles h2Hero"> ${data.title} </h2>

  <div id="div-buttons">
    <a href="mailto:${data.contactMe.email}">
    <button class = "bottone5"><img src="/assets/arroba.png"></img></button>
    </a>
    <a href="${data.contactMe.linkedin}" target="_blank">
      <button class = "bottone5"><img src="/assets/linkedin.png"></img></button>
    </a>
    <a href="${data.contactMe.github}" target="_blank">
      <button class = "bottone5"><img src="/assets/github.png"></img></button>
    </a>
  </div>
  </div>

  <div id = "div-foto">
  <img src="${data.avatar}" alt="perfil-foto" id = "perfil-foto"></img>
  <a class="btn-CV" href="${data.cv}" download="${data.name}_Resume.pdf">Download CV</a>
  </div>
  `
  document.body.appendChild(sectionHero);
  console.log('Hero section added to the DOM.', sectionHero);
}

export default heroPrint;