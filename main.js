$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });
  const menuHamburger = document.querySelector('.menu-hamburger');
  const navLinks = document.querySelector('.nav-links');
  menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
  });
  navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
  });
});
