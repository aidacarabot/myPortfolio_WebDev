import "./Education.css";
import data from "../data/data.js";

const educationTemplate = () => {
  return `
    <section class="education">
      ${data.education.map(education => `
        <div class="education-item">
          <div class="edu-logo">
          <img src="${education.logo}" alt="${education.university} logo" class="education-logo">
          </div>
          <div class = "edu-description">
          <h3>${education.degree}</h3>
          <h4>${education.university}, ${education.graduationYear}</h4>
          <p>${education.description}</p>
          </div>
        </div>
      `).join('')}
    </section>
  `;
};

export default educationTemplate;
