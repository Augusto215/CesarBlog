const nav_mobile = document.querySelector('.nav-mobile');
const nav = document.querySelector(".nav");
const logo = document.querySelector('.cesar');
const logoImg = document.querySelector('#logo-img');
const night_button = document.querySelector('.button');
const hamburger = document.querySelector('.hamburger');
const menuUl = document.querySelector('.menu-ul');
const nav_links = document.querySelectorAll('.nav-mobile a');
const modal_login = document.querySelectorAll('.modal-login');
const modal = document.querySelector('.modal-container');
const fechar_modal = document.querySelector('.fechar_modal');
const post2_img = document.querySelector('.post-container2-img');
const footer_box = document.querySelector('.footer-box');
const modal_registro = document.querySelector('.modal');
const modal_login1 = document.querySelector('.modal1');
const open_login = document.querySelector('.open-modal2');
const modal_main_login = document.querySelector('.modal-container1');
const fechar_modal1 = document.querySelector('.fechar_modal1');

function toggleNightMode(sliders) {
  sliders.forEach((slider) => {
    if (slider.classList.contains('slider-checked')) {
      slider.classList.remove('slider-checked');
    } else {
      slider.classList.add('slider-checked');
    }
  });

  if (logoImg.getAttribute('src') === "/static/base/img/site(logo).png") {
    logoImg.setAttribute('src', "/static/base/img/logo(escuro).png");
} else {
    logoImg.setAttribute('src', "/static/base/img/site(logo).png");
}


  nav_mobile.classList.toggle("nav-mobile-night");
  document.body.classList.toggle('body-night');
  menuUl.classList.toggle('ul-night');
  night_button.classList.toggle('button-night');
  nav.classList.toggle('nav-night');
  hamburger.classList.toggle('hamburger-night');
  modal_login1.classList.toggle('modal-night');
  modal_registro.classList.toggle('modal-night');

 
  // Aqui nós armazenamos o estado do modo noturno
  if (document.body.classList.contains('body-night')) {
    localStorage.setItem('nightMode', 'true');
  } else {
    localStorage.setItem('nightMode', 'false');
  }
}

// Aqui nós verificamos o estado do modo noturno quando a página é carregada
window.addEventListener('DOMContentLoaded', (event) => {
  let sliders = document.querySelectorAll('.slider');
  if (localStorage.getItem('nightMode') === 'true') {
    toggleNightMode(sliders);
  }
});

// ... o resto do seu código ...
function toggleHamburger() {
  hamburger.classList.toggle('is-active');
  menuUl.classList.toggle('show');
  nav_mobile.classList.toggle('is-active');
};

function removeActiveClass() {
  if (window.innerWidth > 1200) {
    hamburger.classList.remove('is-active');
    nav_mobile.classList.remove('is-active');
    menuUl.classList.remove('show');
  }
}

function openModal() {
  modal.classList.toggle('modal-hide');

open_login.addEventListener('click', function(event) 
  {event.stopPropagation();
  modal.classList.remove('modal-hide');
  modal_main_login.classList.add('modal-hide1');
});

fechar_modal1.addEventListener('click', function() {
  modal_main_login.classList.remove('modal-hide1');  // Use add para garantir que a classe será adicionada
});

fechar_modal.addEventListener("click", function() {
  modal.classList.remove('modal-hide');  // Use add para garantir que a classe será adicionada
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    event.stopPropagation();
    modal.classList.remove('modal-hide');  // Use add para garantir que a classe será adicionada
  }
});

modal_login.forEach(function(login) {
  login.addEventListener('click', openModal);
});

modal_main_login.addEventListener("click", function(event) {
  if (event.target === modal) {
    event.stopPropagation();
    modal_main_login.classList.remove('modal-hide1');  // Use add para garantir que a classe será adicionada
  }
});
}

night_button.addEventListener('click', function(event) {
  event.stopPropagation();
  let sliders = document.querySelectorAll('.slider');
  toggleNightMode(sliders);
});

hamburger.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleHamburger();
});

menuUl.addEventListener('click', function(event) {
  event.stopPropagation();
});

window.addEventListener('resize', removeActiveClass);

nav_links.forEach(function(link) {
  link.addEventListener('click', removeActiveClass);
});

logo.addEventListener('click', removeActiveClass);

nav_mobile.addEventListener('click', removeActiveClass);

modal_login.forEach(function(login) {
  login.addEventListener('click', openModal);
});
