function scrollParaElemento() {
    var elemento = document.getElementById('mensagem-resposta');
    
    if (elemento) {
        elemento.scrollIntoView();
    }
}


function checkAnswer(category) {

    // Lógica para verificar as respostas e recomendar um local
    var localRecomendado;

    switch (category) {
        case 'TRADICIONAIS':
            localRecomendado = 'Restaurante Mesa de Lemos';
            break;
        case 'DOCES':
            localRecomendado = 'Casa da Alegria (confeitaria local)';
            break;
        case 'QUEIJOS':
            localRecomendado = 'Loja do Vinho do D&atilde;o';
            break;
        case 'COZINHA':
            localRecomendado = 'Restaurante Mira Rio';
            break;
        case 'HISTORIA':
            localRecomendado = 'Museu Gr&atilde;o Vasco';
            break;
        case 'CIENCIA':
            localRecomendado = 'Museu do Quartzo';
            break;
        case 'CULTURA':
            localRecomendado = 'Museu Etnogr&aacute;fico de Viseu';
            break;
        case 'EXPOSICOES':
            localRecomendado = 'Casa da Ribeira';
            break;
        case 'VIVO':
            localRecomendado = 'Teatro Viriato';
            break;
        case 'BARES':
            localRecomendado = 'Bar Rossio';
            break;
        case 'EVENTOS':
            localRecomendado = 'Festas e eventos especiais na Pra&ccedil;a da Rep&uacuteblica';
            break;    
        case 'FESTIVAIS':
            localRecomendado = 'Festival de Sabores da Terra (eventos gastron&ocirc;micos locais)';
            break;
        case 'PARQUES':
            localRecomendado = 'Parque Aquilino Ribeiro';
            break;
        case 'ESTRELA':
            localRecomendado = 'Parque Natural da Serra da Estrela';
            break;
        case 'RIO':
            localRecomendado = 'Ecopista do D&atilde;o';
            break;    
        case 'JARDINS':
            localRecomendado = 'Jardim das M&atilde;es';
            break;
        case 'AR':
            localRecomendado = 'Pra&ccedil;a da Rep&uacuteblica';
            break;
        case 'MUSEUS':
            localRecomendado = 'Museu Nacional Gr&atilde;o Vasco';
            break;
        case 'VIDALOUCA':
            localRecomendado = 'Bairro de Jugueiros';
            break;    
        case 'COMUNITARIA':
            localRecomendado = 'Teatro Viriato';
            break;    
        default:
            localRecomendado = 'algum lugar interessante';
            break;
        
    }

    // Exibir a mensagem de recomendação
    document.getElementById('mensagem-texto').innerHTML = 'Deves visitar <span id="local-recomendado">' + localRecomendado + '</span>!';
    document.getElementById('mensagem-resposta').classList.remove('hidden');
}
