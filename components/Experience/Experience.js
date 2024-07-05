import "./Experience.css";
import data from "../data/data.js";

const experienceTemplate = () => {
  return `
    <section class="experience">
      ${data.workExperience.map(job => `
        <div class="job">
          <div class="job-logo">
            <img src="${job.logo}" alt="${job.company} logo" class="company-logo">
          </div>
          <div class="job-info">
          <h3>${job.position}</h3>
          <h4>${job.company}</h4>
          <h4 class="location">${job.location}</h4>
          <p class="job-date">${job.startDate} - ${job.endDate}</p>
          <p class="job-description">${job.description}</p>
          </div>
        </div>
      `).join('')}
    </section>
  `;
};

export default experienceTemplate;
