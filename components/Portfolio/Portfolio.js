import "./Portfolio.css";
import data from "../data/data.js";

// Función para verificar el ancho de la ventana
const isMobileView = () => window.innerWidth < 1092;

const portfolioTemplate = () => {
  const sectionPortfolio = document.createElement('section');
  sectionPortfolio.id = 'portfolio';

  // Generar el contenido del portafolio basado en el tamaño de la ventana
  const generateProjectsHTML = () => {
    return data.projects.map((project, index) => {
      const isNormal = isMobileView() ? true : index % 2 === 0;
      return `
        <div class="project-container ${isNormal ? 'normal' : 'reversed'}">
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-buttons">
              <a class="button-repository" href="${project.link}" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                </svg>
                <span class="text-repository">View Project</span>
              </a>
              <a class="button-repository" href="${project.repository}" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                </svg>
                <span class="text-repository">Repository</span>
              </a>
            </div>
          </div>
          <div class="project-img">
            <img src="${project.preview}" alt="${project.title} preview">
          </div>
        </div>
      `;
    }).join('');
  };

  sectionPortfolio.innerHTML = `
    <h2 class="portfolioTitle">PROJECTS</h2>
    <div class="projects-section">
      ${generateProjectsHTML()}
      <p class="more"> And many more to come! </p>
    </div>
  `;

  document.body.appendChild(sectionPortfolio);

  // Event listener para cambiar la disposición cuando la ventana se redimensiona
  window.addEventListener('resize', () => {
    const projectsSection = sectionPortfolio.querySelector('.projects-section');
    projectsSection.innerHTML = generateProjectsHTML();
  });
};

export default portfolioTemplate;
