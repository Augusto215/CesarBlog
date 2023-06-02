const nav_mobile = document.querySelector('.nav-mobile');
let post_box = document.querySelectorAll(".post-box");
const nav = document.querySelector(".nav");
const logo = document.querySelector('.cesar');
const logoImg = document.querySelector('#logo-img');
const post_sub = document.querySelectorAll('.post-subtitulo');
const night_button = document.querySelector('.button');
const hamburger = document.querySelector('.hamburger');
const menuUl = document.querySelector('.menu-ul');
const ocultos = document.querySelectorAll("#postagens .post:nth-child(n+3)");
const nav_links = document.querySelectorAll('.nav-mobile a');
const modal_login = document.querySelectorAll('.modal-login');
const modal = document.querySelector('.modal-container');
const fechar_modal = document.querySelector('.fechar_modal');
const post2_img = document.querySelector('.post-container2-img');
const footer_box = document.querySelector('.footer-box');
const ver_mais = document.querySelector('.ver-mais-a');
const modal_registro = document.querySelector('.modal');
const modal_login1 = document.querySelector('.modal1');
const open_login = document.querySelector('.open-modal2');
const modal_main_login = document.querySelector('.modal-container1');
const fechar_modal1 = document.querySelector('.fechar_modal1');
let input_comentario = document.querySelectorAll('.input_comentario');
let comentario_box = document.querySelectorAll('.comentario-box');
let main_comentario = document.querySelectorAll('.main-comentario');
let responder_comentario = document.querySelectorAll('.comentario-responder')
let ler_mais = document.querySelectorAll('.ler-mais')
let all_post = document.querySelectorAll('.post')
let adicionar_comentario = document.querySelectorAll('.add-comentario-box')
const modal_main_resposta = document.querySelector('.modal-main-resposta')
const modal_resposta_fechar = document.querySelector('.modal-resposta-fechar')
const modal_add_comentario = document.querySelector('.modal-add-comentario')
let post_container2_img = document.querySelectorAll('.post-container2-img')
const fechar_modal_comentario = document.querySelector('.fechar_modal_comentario')




function toggleNightMode(sliders) {
  sliders.forEach((slider) => {
    if (slider.classList.contains('slider-checked')) {
      slider.classList.remove('slider-checked');
    } else {
      slider.classList.add('slider-checked');
    }
  });

  if (logoImg.getAttribute('src') === "/templates/img/site(logo).png") {
    logoImg.setAttribute('src', "/templates/img/logo(escuro).png");
  } else {
    logoImg.setAttribute('src', "/templates/img/site(logo).png");
  }

  nav_mobile.classList.toggle("nav-mobile-night");
  document.body.classList.toggle('body-night');
  menuUl.classList.toggle('ul-night');
  night_button.classList.toggle('button-night');
  nav.classList.toggle('nav-night');
  hamburger.classList.toggle('hamburger-night');
  modal_registro.classList.toggle('modal-night');
  modal_login1.classList.toggle('modal-night');
  post_sub.forEach(post_sub => post_sub.classList.toggle('post-subtitulo-night'));
  post_box.forEach(post_box => post_box.classList.toggle('post-night'));
  post2_img.classList.toggle('post-container2-img-night');
  ver_mais.classList.toggle('ver-mais-a-night');

  if (document.body.classList.contains('body-night')) {
    localStorage.setItem('nightMode', 'true');
  } else {
    localStorage.setItem('nightMode', 'false');
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  let sliders = document.querySelectorAll('.slider');
  if (localStorage.getItem('nightMode') === 'true') {
    toggleNightMode(sliders);
  }
});

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

  open_login.addEventListener('click', function(event) {
    event.stopPropagation();
    modal.classList.remove('modal-hide');
    modal_main_login.classList.add('modal-hide1');
  });

  fechar_modal1.addEventListener('click', function() {
    modal_main_login.classList.remove('modal-hide1');
  });

  fechar_modal.addEventListener("click", function() {
    modal.classList.remove('modal-hide');
  });

  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      event.stopPropagation();
      modal.classList.remove('modal-hide');
    }
  });

  modal_login.forEach(function(login) {
    login.addEventListener('click', openModal);
  });

  modal_main_login.addEventListener("click", function(event) {
    if (event.target === modal) {
      event.stopPropagation();
      modal_main_login.classList.remove('modal-hide1');
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

input_comentario.forEach((input, index) => {
  input.addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.add('is-active');
    main_comentario[index].classList.add('is-active');

    comentario_box.forEach((comentario) => {
      comentario.classList.remove('is-active');
    });
  });
});

document.body.addEventListener("click", function() {
  input_comentario.forEach((input) => {
    input.classList.remove('is-active');
  });

  main_comentario.forEach((main) => {
    main.classList.remove('is-active');
  });

  comentario_box.forEach((comentario) => {
    comentario.classList.remove('is-active');
  });

post_box.forEach((post) =>
{
  post.classList.remove('is-active')
})
 
 
});

comentario_box.forEach((comentario) => {
  comentario.addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.add('is-active');

    input_comentario.forEach((input) => {
      input.classList.remove('is-active');
    });

    main_comentario.forEach((main) => {
      main.classList.remove('is-active');
    });
  });
});

responder_comentario.forEach((elemento) => {
  elemento.addEventListener("click", function(event) {
    event.stopPropagation();
    modal_main_resposta.classList.add('is-active');
  });
});
modal_resposta_fechar.addEventListener("click", function(event)
{
  event.stopPropagation();
  modal_main_resposta.classList.remove("is-active")
})
modal_main_resposta.addEventListener("click", function(event) {
  if (event.target === modal_main_resposta) {
    event.stopPropagation();
    this.classList.remove('is-active');
  }
});
ler_mais.forEach((ler, index) =>
{
  ler.addEventListener("click", function(event)
  {
    event.stopPropagation();
    post_box[index].classList.toggle('is-active')
  })
})
adicionar_comentario.forEach((comentario) =>
{
  comentario.addEventListener("click", function(event)
  { event.stopPropagation()
    modal_add_comentario.classList.add("is-active")
  })
})
modal_add_comentario.addEventListener("click", function(event)
{
  
  if(event.target === modal_add_comentario)
  {event.stopPropagation();
    this.classList.remove('is-active')
  }
})
fechar_modal_comentario.addEventListener("click", function(event)
{
  event.stopPropagation()
  modal_add_comentario.classList.remove('is-active');
})