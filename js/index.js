const hamburger = document.querySelector('.navbar .fas');
const brand = document.querySelector('.navbar__brand');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navbar__nav');
const links = document.querySelectorAll('.navbar__nav li');


const toggleMenu = () => {
  if(window.innerWidth < 825) {
    navbar.classList.toggle('expanded');
    menu.classList.toggle('mobile');
    hamburger.classList.toggle('fa-times');
    brand.classList.toggle('rotate');
  }
}

hamburger.addEventListener('click', toggleMenu);

links.forEach(element => {
  element.addEventListener('click', toggleMenu);
});

