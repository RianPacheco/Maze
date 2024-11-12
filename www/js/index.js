document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


/* Hamburger funcionalidade  */
const botao = document.querySelector('.menu__botao');
const navList = document.querySelector('.menu__lista');
const menuNav = document.querySelector('.menu');

botao.addEventListener('click', () => {
    menuNav.classList.toggle('menu-active');
    menuNav.style.display = ('flex');
    navList.style.display = ('flex');
});

navList.addEventListener('click', () =>{
    navList.style.display = ('none');
});

const notificacao = document.querySelector('.notificacao');
const sino = document.querySelector('sino');
const notificacao_list = document.querySelector('notificacao_list');

sino.addEventListener('click', () =>{
    
});

/* Tela login */

const btn__entrar = document.querySelector('.entrar');
const tela_home = document.querySelector('.home');
const body = document.querySelector('body');
const header = document.querySelector('header');
const login = document.querySelector('.login');
const Anonimo = document.querySelector('.anonimo');
const Inicial = document.querySelector('.inicial')
const Maze__logo = document.querySelector('.maze__logo')
const Entrar_submit = document.querySelector('.entrar_submit');

Anonimo.addEventListener('click' , () => {
    tela_home.style.display = 'none';
    Inicial.style.display = 'flex';
    Maze__logo.style.display = 'flex';

});

Entrar_submit.addEventListener('click' , () => {
    tela_home.style.display = 'none';
    Inicial.style.display = 'flex';
    Maze__logo.style.display = 'flex';
    body.style.backgroundColor = "#FFF";
    login.style.display = 'none';
    header.style.display = 'flex';


});

btn__entrar.addEventListener('click' , () =>{
    tela_home.style.display = 'none';
    body.style.backgroundColor = "#7e217f";
    header.style.display = 'none';
    login.style.display = 'flex';
});



/* REGEX INPUT LOGIN */

document.getElementById('telefone').addEventListener('input', function (e) {
    // Remove tudo o que não for número
    let value = e.target.value.replace(/\D/g, '');
  
    // Adiciona a formatação no número
    if (value.length <= 2) {
      value = value.replace(/(\d{2})/, '($1) ');
    } else if (value.length <= 7) {
      value = value.replace(/(\d{2})(\d{5})/, '($1) $2-');
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  
    // Define o valor formatado de volta no campo de input
    e.target.value = value;
  });

/* MAP JS */

function initMap() {
    // Coordenadas do centro do mapa
    var location = { lat: -23.691301, lng: -46.657924 };

    // Cria o mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: location
    });

    // Cria o marcador
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Aqui está o marcador!'
    });
}

// Inicializa o mapa quando a página é carregada
window.onload = initMap;