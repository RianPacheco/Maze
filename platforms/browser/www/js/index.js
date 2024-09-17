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


/* Importanto elementos */

const btn__entrar = document.querySelector('.entrar');
const tela_home = document.querySelector('.home');
const body = document.querySelector('body');
const header = document.querySelector('header');
const login = document.querySelector('.login');
const Anonimo = document.querySelector('.anonimo');
const Inicial = document.querySelector('.inicial');
const Maze__logo = document.querySelector('.maze__logo');
const Entrar_submit = document.querySelector('.entrar_submit');


/* Troca entre "telas" */

Maze__logo.addEventListener('click', () => {
    tela_home.style.display = "grid";
    header.style.display = 'flex';
    Maze__logo.style.display = 'none';
    login.style.display = 'none';
    Inicial.style.display = 'none';
})

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