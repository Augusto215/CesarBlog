const nav_mobile = document.querySelector('.nav-mobile');
let post_box = document.querySelectorAll(".post-box");
const nav = document.querySelector(".nav");
const logo = document.querySelector('.cesar');
const logoImg = document.querySelector('#logo-img');
let comentarioBoxImg = document.querySelectorAll('.comentario-box-img');
let addComentarioImg = document.querySelectorAll('.add-comentario-img');
let inputButton = document.querySelectorAll('.input-comentario-submit')
const post_sub = document.querySelectorAll('.post-subtitulo');
const night_button = document.querySelector('.button');
const hamburger = document.querySelector('.hamburger');
const menuUl = document.querySelector('.menu-ul');
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
let modal_container_video = document.querySelectorAll('.modal-container-video')
let comentario_text = document.querySelectorAll(".post-box-p")
let post_text = document.querySelectorAll('.post-text')
const fechar_modal_video = document.querySelectorAll('.fechar-modal-video')
let align_label = document.querySelectorAll('.align-label')
let post1_container = document.querySelectorAll('.post-container')
let post1_comentarios = document.querySelectorAll('.post1-comentarios')
let comentario_ver_respostas = document.querySelectorAll('.comentarios-respostas')
const modal_main_respostas = document.querySelector('.modal-main-ler-respostas')
let iframe = document.querySelectorAll('.responsive-iframe')
let lerMais2 = document.querySelectorAll('.ler-mais2')
let postLerMais2 = document.querySelectorAll('.post2-ler-mais')
let postLerMais1 = document.querySelectorAll('.post1-ler-mais')
let post2FecharModal = document.querySelectorAll('.post2-fechar_modal')
let post1FecharModal = document.querySelectorAll('.post1-fechar_modal')
let AbrirPostVideo = document.querySelectorAll('.abrir-post-video')
let comentarioFechar = document.querySelectorAll('.comentario-box-fechar')








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
    inputButton.forEach((input) =>
    {
      input.style.backgroundImage = 'url("/static/base/img/enviar(escuro).png")'
    })
   
    
    comentarioBoxImg.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/comentario(escuro).png" )
    });

} else {
    logoImg.setAttribute('src', "/static/base/img/site(logo).png");
    comentarioBoxImg.forEach((img) =>
    {
      img.setAttribute('src', "/static/base/img/comment (2).png" )
    });
    inputButton.forEach((input) =>
    {
      input.style.backgroundImage = 'url("/static/base/img/enviar(claro).png")'
    })
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
    align_label[index].classList.add('is-active');

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
  align_label.forEach((item) => {
    item.classList.remove('is-active');
  });
  comentario_box.forEach((comentario) => {
    comentario.classList.remove('is-active');
  });


 

 
});

comentario_box.forEach((comentario, index) => {
  comentario.addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.add('is-active');
    comentarioFechar[index].classList.add('is-active')
    input_comentario.forEach((input) => {
      input.classList.remove('is-active');
    });
    align_label.forEach((label) => {
      label.classList.remove('is-active');
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

ler_mais.forEach((ler, index) => {
  ler.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ativo");
    postLerMais1[index].classList.add('is-active')

  });
});


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


fechar_modal_video.forEach((fechar, index)=>
{
  fechar.addEventListener("click", function(event)
  {
    event.stopPropagation()
    modal_container_video[index].classList.remove('is-active')
    iframe[index].setAttribute('src', iframe[index].getAttribute('src'));
   
  }
  
)
})

modal_container_video.forEach((modal, index) => {
  modal.addEventListener("click", function(event) {
    event.stopPropagation();
    if(event.target === modal) {
      modal.classList.remove('is-active');
      iframe[index].setAttribute('src', iframe[index].getAttribute('src'));
    
    }
  })
})


function abrir_respostas_comentarios()
{
  modal_main_respostas.classList.add('is-active')
}

function fechar_modal_respostas(event)
{
    modal_main_respostas.classList.remove('is-active')
    event.stopPropagation()
 
}

lerMais2.forEach((ler, index) =>
{
  ler.addEventListener("click", function(event)
  {
    postLerMais2[index].classList.add('is-active')
  })
})

postLerMais2.forEach((post) =>
post.addEventListener("click", function(event)
{
  if(event.target === post)
  {
    post.classList.remove('is-active')
  }
}))

post2FecharModal.forEach((post, index) => 
{
  post.addEventListener("click", function(event)
  {
    event.stopPropagation()
    postLerMais2[index].classList.remove('is-active')

  })
})

postLerMais1.forEach((post) =>
post.addEventListener("click", function(event)
{
  if(event.target === post)
  {
    post.classList.remove('is-active')
  }
}))

post1FecharModal.forEach((post, index) => 
{
  post.addEventListener("click", function(event)
  {
    event.stopPropagation()
    postLerMais1[index].classList.remove('is-active')

  })
})

AbrirPostVideo.forEach((abrir, index) =>
{
  abrir.addEventListener("click", function(event)
  {
    event.stopPropagation();
    modal_container_video[index].classList.add('is-active')
  })
})
comentarioFechar.forEach((fechar, index) =>
{
  fechar.addEventListener("click", function(event)
  {
    event.stopPropagation();
    comentario_box.forEach((comentario) =>
    {
      comentario.classList.remove('is-active')
    })
  })
})