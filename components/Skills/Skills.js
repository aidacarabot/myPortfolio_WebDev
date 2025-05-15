import "./Skills.css";
import data from "../data/data.js";

const skillsTemplate = () => {
  const sectionSkills = document.createElement('section');
  sectionSkills.id = 'skills';

  sectionSkills.innerHTML = `
    <h2 class="skillsTitle">SKILLS</h2>
    <div class="skills-container">
    <h3 class="skillTitle">  USING NOW:</h3>
    <section class="skills-section">
      ${data.skills.usingNow.map(skill => `
      <div class="skills-items">
        <img src="${skill.logo}" alt="${skill.skill} logo" class="skill-logo">
        <h4>${skill.skill}</h4>
      </div>
      `).join('')}
    </section>
    <h3 class ="skillTitle" >LEARNING:</h3>
    <section class="skills-section">
    ${data.skills.learning.map(skill => `
    <div class="skills-items">
    <img src="${skill.logo}" alt="${skill.skill} logo" class="skill-logo">
    <h4>${skill.skill}</h4>
    </div>
    `).join('')}
    </section>
    <h3 class ="skillTitle" >OTHER SKILLS:</h3>
    <section class="skills-section">
    ${data.skills.otherSkills.map(skill => `
    <div class="skills-items">
    <img src="${skill.logo}" alt="${skill.skill} logo" class="skill-logo">
    <h4>${skill.skill}</h4>
    </div>
    `).join('')}
    </section>
  <div class="skills-container">
  `;
  document.body.appendChild(sectionSkills);
};

export default skillsTemplate;