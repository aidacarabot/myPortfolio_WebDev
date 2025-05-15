import "./Certifications.css";
import data from "../data/data.js";


const certificationsTemplate = () => {
  return `
    <section id="certifications">
      ${data.certificates.map(certificate => `
        <section class="certificate-item">
          <h3>${certificate.title}</h3>
          <img src="${certificate.img}" alt="${certificate.title} logo" class="certificate-img">
          <a href="${certificate.link}" target="_blank" class="button-certificate">View Certificate</a>
        </section>
      `).join('')}
    </section>
  `;
};

export default certificationsTemplate;
