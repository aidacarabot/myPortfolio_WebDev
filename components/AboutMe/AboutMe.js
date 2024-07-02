import "./AboutMe.css";
import data from "../data/data.js";
import educationTemplate from "../Education/Education.js";
import experienceTemplate from "../Experience/Experience.js";

const aboutMe = () => {
  const section = document.createElement('section');
  section.id = 'about-me';

  section.innerHTML = `
    <h2 class="aboutMeTitle">ABOUT ME</h2>
    <p class="presentation">${data.aboutMe}</p>
    <div id="selectionTab">
      <article id="education-tab" class="tab active">
        <p class="Education">EDUCATION</p>
      </article>
      <article id="experience-tab" class="tab">
        <p class="Experience">EXPERIENCE</p>
      </article>
    </div>
    <div id="content-area">${educationTemplate()}</div>
  `;

  document.body.appendChild(section);

  const educationTab = document.getElementById('education-tab');
  const experienceTab = document.getElementById('experience-tab');
  const contentArea = document.getElementById('content-area');

  educationTab.addEventListener('click', () => {
    educationTab.classList.add('active');
    experienceTab.classList.remove('active');
    contentArea.classList.add('hidden');
    setTimeout(() => {
      contentArea.innerHTML = educationTemplate();
      contentArea.classList.remove('hidden');
    }, 300); // Esperar a que la transición termine
  });

  experienceTab.addEventListener('click', () => {
    experienceTab.classList.add('active');
    educationTab.classList.remove('active');
    contentArea.classList.add('hidden');
    setTimeout(() => {
      contentArea.innerHTML = experienceTemplate();
      contentArea.classList.remove('hidden');
    }, 300); // Esperar a que la transición termine
  });
};

export default aboutMe;
