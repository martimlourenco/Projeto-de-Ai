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
            localRecomendado = 'Loja do Vinho do Dão';
            break;
        case 'COZINHA':
            localRecomendado = 'Restaurante Mira Rio';
            break;
            // Adicione mais cases conforme necessário para as outras opções
        case 'HISTORIA':
            localRecomendado = 'Museu Grão Vasco';
            break;
        case 'CIENCIA':
            localRecomendado = 'Museu do Quartzo';
            break;
        
        case 'CULTURA':
            localRecomendado = 'Museu Etnográfico de Viseu';
            break;
        case 'EXPOSICOES':
            localRecomendado = 'Casa da Ribeira';
            break;
            // Adicione mais cases conforme necessário para as outras opções
        case 'VIVO':
            localRecomendado = 'Teatro Viriato';
            break;
        case 'BARES':
            localRecomendado = 'Bar Rossio';
            break;
        case 'EVENTOS':
            localRecomendado = 'Festas e eventos especiais na Praça da República';
            break;    
        case 'FESTIVAIS':
            localRecomendado = 'Festival de Sabores da Terra (eventos gastronômicos locais)';
            break;
            // Adicione mais cases conforme necessário para as outras opções
        case 'PARQUES':
            localRecomendado = 'Parque Aquilino Ribeiro';
            break;
        case 'ESTRELA':
            localRecomendado = 'Parque Natural da Serra da Estrela';
            break;
        case 'RIO':
            localRecomendado = 'Ecopista do Dão';
            break;    
        case 'JARDINS':
            localRecomendado = 'Jardim das Mães';
            break;
        // Adicione mais cases conforme necessário para as outras opções
        case 'AR':
            localRecomendado = 'Praça da República';
            break;
        case 'MUSEUS':
            localRecomendado = 'Museu Nacional Grão Vasco';
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
