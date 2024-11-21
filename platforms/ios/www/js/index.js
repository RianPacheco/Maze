document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

const devicereadyElement = document.getElementById('deviceready');
if (devicereadyElement) {
    devicereadyElement.classList.add('ready');
} else {
    console.log("Element with id 'deviceready' not found.");
}


/* Hamburger funcionalidade  */
const botao = document.querySelector('.menu__botao');
const navList = document.querySelector('.menu__lista');
const menuNav = document.querySelector('.menu');
const notificacao = document.querySelector('.notificacao');
const sino = document.querySelector('.sino');
const notificacaoList = document.querySelector('.notificacao_lista');

// Toggle menu visibility
botao.addEventListener('click', () => {
    menuNav.classList.toggle('menu-active');
    navList.style.display = menuNav.classList.contains('menu-active') ? 'flex' : 'none';
});

// Hide menu when an item is clicked
navList.addEventListener('click', () => {
    navList.style.display = 'none';
    menuNav.classList.remove('menu-active');
});

// Toggle notification visibility
sino.addEventListener('click', () => {
    notificacao.classList.toggle('notificacao-active');
});

// Hide notification when clicked
notificacaoList.addEventListener('click', () => {
    notificacao.classList.remove('notificacao-active');
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

Anonimo.addEventListener('click', () => {
    tela_home.style.display = 'none';
    Inicial.style.display = 'flex';
    Maze__logo.style.display = 'flex';

});

Entrar_submit.addEventListener('click', () => {
    tela_home.style.display = 'none';
    Inicial.style.display = 'flex';
    Maze__logo.style.display = 'flex';
    body.style.backgroundColor = "#FFF";
    login.style.display = 'none';
    header.style.display = 'flex';


});

btn__entrar.addEventListener('click', () => {
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

/* Modal */
// Seleção dos elementos dos modais e botões
const modalFazer = document.querySelector('.modal_fazer');
const btnFazerDenuncia = document.querySelector('.item__link[href="#fazer__denuncia"]');
const btnFecharModalFazer = modalFazer.querySelector('.fechar_modal');
const formDenuncia = document.getElementById('formDenuncia');

// Mostrar o modal de Fazer Denúncia
btnFazerDenuncia.addEventListener('click', () => {
    modalFazer.style.display = 'flex';
});

// Fechar o modal de Fazer Denúncia
btnFecharModalFazer.addEventListener('click', () => {
    modalFazer.style.display = 'none';
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modalFazer) {
        modalFazer.style.display = 'none';
    }
});

// Lidar com o envio da denúncia
formDenuncia.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Coletar os dados do formulário
    const tipoDenuncia = document.getElementById('tipoDenuncia').value;
    const localDenuncia = document.getElementById('localDenuncia').value;
    const descricao = document.getElementById('descricao').value;
    const dataHoraDenuncia = document.getElementById('dataHoraDenuncia').value;

    // Exemplo de como exibir os dados ou enviar para um servidor
    console.log('Tipo de Denúncia:', tipoDenuncia);
    console.log('Local:', localDenuncia);
    console.log('Descrição:', descricao);
    console.log('Data e Hora:', dataHoraDenuncia);

    // Fechar o modal após envio
    modalFazer.style.display = 'none';

    // Aqui você pode adicionar lógica para enviar os dados ao servidor, exibir uma mensagem de sucesso, etc.
});

/* Modal Show */
// Seleção dos elementos dos modais e botões
const modalShow = document.querySelector('.modal_show');
const btnVerDenuncia = document.querySelector('.item__link[href="#ver__denuncia"]');
const btnFecharModalShow = modalShow.querySelector('.fechar_modal');
const listaDenunciasContainer = document.getElementById('listaDenuncias');

// Dados fictícios das denúncias (poderiam vir de uma API ou banco de dados)
const denuncias = [
    {
        tipo: 'Assédio',
        local: 'Rua A, Bairro B',
        descricao: 'Denúncia de assédio feita por um motorista de aplicativo.',
        dataHora: '2024-11-21T15:30:00',
    },
    {
        tipo: 'Roubo',
        local: 'Avenida X, Centro',
        descricao: 'Roubo à mão armada em um estabelecimento comercial.',
        dataHora: '2024-11-20T20:00:00',
    },
    {
        tipo: 'Furto',
        local: 'Shopping Y, Sala 3',
        descricao: 'Furto de celular em um shopping.',
        dataHora: '2024-11-19T12:00:00',
    },
];

// Função para exibir as denúncias no modal
function exibirDenuncias() {
    // Se não houver denúncias, exibe uma mensagem
    if (denuncias.length === 0) {
        listaDenunciasContainer.innerHTML = "<p>Você ainda não fez nenhuma denúncia.</p>";
        return;
    }

    // Limpa o conteúdo atual
    listaDenunciasContainer.innerHTML = '';

    // Para cada denúncia, criamos um item na lista
    denuncias.forEach((denuncia) => {
        const denunciaElement = document.createElement('div');
        denunciaElement.classList.add('denuncia-item');

        denunciaElement.innerHTML = `
            <h3>Tipo: ${denuncia.tipo}</h3>
            <p><strong>Local:</strong> ${denuncia.local}</p>
            <p><strong>Descrição:</strong> ${denuncia.descricao}</p>
            <p><strong>Data e Hora:</strong> ${new Date(denuncia.dataHora).toLocaleString()}</p>
        `;

        listaDenunciasContainer.appendChild(denunciaElement);
    });
}

// Mostrar o modal de Visualizar Denúncias
btnVerDenuncia.addEventListener('click', () => {
    exibirDenuncias(); // Exibe as denúncias no modal
    modalShow.style.display = 'flex';
});

// Fechar o modal de Visualizar Denúncias
btnFecharModalShow.addEventListener('click', () => {
    modalShow.style.display = 'none';
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modalShow) {
        modalShow.style.display = 'none';
    }
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
}

// Inicializa o mapa quando a página é carregada
window.onload = initMap;