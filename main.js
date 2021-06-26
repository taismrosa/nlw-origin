/* Variables */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('.toggle');
const links = document.querySelectorAll('#header nav li a');

/* Open and close menu and change icon */
const showMenu = () => {
  toggle.forEach((icon) => {
    icon.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  });
};

/* Hide menu when a link is clicked */
const hideMenu = () => {
  links.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
};

/* Apply shadow for header when scrolling */
const applyShadow = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });
};

/* Controller */
showMenu();
hideMenu();
applyShadow();
