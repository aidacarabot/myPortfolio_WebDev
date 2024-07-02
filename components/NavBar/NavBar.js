import "./NavBar.css";
import data from "../data/data.js";

const NavBar = () => {
  const header = document.createElement('header');
  header.id = "navbar";

  const imgLogo = document.createElement('img');
  imgLogo.src = './public/assets/logo.png';
  imgLogo.classList.add('navbar-logo');

  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  nav.innerHTML = `
  <ul>
    <li><a href="#about-me">About Me</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a id="nav-button" href="mailto:${data.contactMe.email}">CONTACT ME</a></li>
  </ul>`

    //! Crear el botón de hamburguesa
    const burgerLabel = document.createElement('label');
    burgerLabel.innerHTML = `
      <label class="burger" for="burger">
        <input type="checkbox" id="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>`;

    //! Crear el contenedor para el menú hamburguesa
    const mobileNav = document.createElement('div');
    mobileNav.classList.add('mobile-nav');
    mobileNav.innerHTML = `
    <ul>
      <li><a href="#about-me">About Me</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a id="nav-button" href="mailto:${data.contactMe.email}">CONTACT ME</a></li>
    </ul>`;
  
  header.appendChild(imgLogo);
  header.appendChild(nav);
  header.appendChild(burgerLabel); // Añadir el botón de hamburguesa
  header.appendChild(mobileNav);
  document.body.appendChild(header);

  //? Lógica para mostrar/ocultar el menú móvil
  const burgerCheckbox = burgerLabel.querySelector('#burger');
  burgerCheckbox.addEventListener('change', () => {
    if (burgerCheckbox.checked) {
      mobileNav.classList.add('show');
    } else {
      mobileNav.classList.remove('show');
    }
  });

  //? Lógica para ocultar el menú móvil si el tamaño de la ventana cambia
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1092) {
      mobileNav.classList.remove('show');
      burgerCheckbox.checked = false;
    }
  });

};

export default NavBar;
