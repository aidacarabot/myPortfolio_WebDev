import "./Footer.css";
import data from "../data/data.js";

const footerTemplate = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';

  footer.innerHTML = `
    <button class="button-top">
      <svg class="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </button>

    <div id="rights-buttons">
    <a href="mailto:${data.contactMe.email}">
    <button class="rights-style"><img src="./public/assets/email-white.png"></img></button>
    </a>
    <a href="${data.contactMe.linkedin}" target="_blank">
      <button class="rights-style"><img src="./public/assets/linkedin-white.png"></img></button>
    </a>
    <a href="${data.contactMe.github}" target="_blank">
      <button class="rights-style"><img src="./public/assets/github-white.png"></img></button>
    </a>
  </div>


    <p id="rights-reserved"><strong>©️2024 Aida Carabot</strong> All Rights Reserved.</p>
  
  `;

    const topButton = footer.querySelector('.button-top');
    if (topButton) {
      topButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    document.body.appendChild(footer);
}

export default footerTemplate;