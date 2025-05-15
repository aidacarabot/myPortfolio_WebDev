import './style.css';
import NavBar from './components/NavBar/NavBar.js';
import heroPrint from './components/Hero/Hero.js';
import aboutMe from './components/AboutMe/AboutMe.js';
import skillsTemplate from './components/Skills/Skills.js';
import portfolioTemplate from "./components/Portfolio/Portfolio.js";
import footerTemplate from './components/Footer/Footer.js';

NavBar();
heroPrint();
aboutMe();
skillsTemplate();
portfolioTemplate();
footerTemplate();


// Esperar a que el contenido de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Reiniciar el scroll a la parte superior de la página
  window.scrollTo(0, 0);
});


//TODOS ESTILOS SCROLL REVEAL:

ScrollReveal().reveal('#navbar',{
  origin: 'bottom',
  distance: '-300px',
  duration: 2000,
});

ScrollReveal().reveal('.navbar-logo',{
  rotate: {
    x: 1,
    y: 100,
  },
  duration: 5000,
  delay: 1000,
});

ScrollReveal().reveal('#div-texto',{
  origin: 'left',
  distance: '300px',
  duration: 2000,
});

ScrollReveal().reveal('.titles',{
  origin: 'left',
  distance: '300px',
  duration: 2000,
  interval: 100,
});

ScrollReveal().reveal('.bottone5',{
  origin: 'bottom',
  distance: '300px',
  duration: 2000,
  interval: 100,
});

ScrollReveal().reveal('#div-foto',{
  origin: 'right',
  distance: '300px',
  duration: 2000,
});

ScrollReveal().reveal('#perfil-foto',{
  rotate: {
    x: 0,
    z: 100,
  },
  duration: 5000,
});

ScrollReveal().reveal('.aboutMeTitle',{
  origin: 'top',
  distance: '100px',
  duration: 2000,
});

ScrollReveal().reveal('.presentation',{
  duration: 5000,
});

ScrollReveal().reveal('.Education',{
  origin: 'left',
  distance: '300px',
  duration: 3000,
  delay: 700,
});

ScrollReveal().reveal('.Experience',{
  origin: 'right',
  distance: '300px',
  duration: 3000,
  delay: 700,
});

ScrollReveal().reveal('.education',{
  origin: 'bottom',
  distance: '300px',
  duration: 3000,
  delay: 700,
});

ScrollReveal().reveal('.certificatesTitle',{
  origin: 'top',
  distance: '100px',
  duration: 2000,
});

ScrollReveal().reveal('.certifications-container',{
  origin: 'left',
  distance: '-300px',
  duration: 7000,
});

ScrollReveal().reveal('.skillsTitle',{
  origin: 'top',
  distance: '100px',
  duration: 2000,
});

ScrollReveal().reveal('.skillTitle',{
  duration: 4000,
});

ScrollReveal().reveal('.skills-items',{
  origin: 'bottom',
  distance: '300px',
  duration: 1000,
  interval: 200,
});

ScrollReveal().reveal('.portfolioTitle',{
  origin: 'top',
  distance: '100px',
  duration: 2000,
});

ScrollReveal().reveal('.project-container',{
  origin: 'left',
  distance: '300px',
  duration: 4000,
  interval: 900,
});

ScrollReveal().reveal('.more',{
  origin: 'bottom',
  distance: '200px',
  duration: 1000,
});

ScrollReveal().reveal('.button-top',{
  origin: 'bottom',
  distance: '200px',
  duration: 1000,
});

ScrollReveal().reveal('.rights-style',{
  origin: 'bottom',
  distance: '200px',
  duration: 1000,
  interval: 100,
});

ScrollReveal().reveal('#rights-reserved',{
  origin: 'bottom',
  distance: '200px',
  duration: 1000,
});