function checkAnswer(category) {
    // Lógica para verificar as respostas e recomendar um local
    var localRecomendado;

    switch (category) {
        case 'MUSEUS':
            localRecomendado = 'o Museu Nacional';
            break;
        case 'CAMINHADAS':
            localRecomendado = 'a Trilha das Montanhas';
            break;
        case 'ATIVIDADES-URBANAS':
            localRecomendado = 'o Centro da Cidade';
            break;
        case 'MAR':
            localRecomendado = 'o Restaurante à beira-mar';
            break;
        case 'REGIONAL':
            localRecomendado = 'o Restaurante de Comida Regional';
            break;
        case 'INTERNACIONAL':
            localRecomendado = 'o Restaurante Internacional';
            break;
        // Adicione mais cases conforme necessário para as outras opções

        default:
            localRecomendado = 'algum lugar interessante';
            break;
    }

    // Exibir a mensagem de recomendação
    document.getElementById('mensagem-texto').innerHTML = 'Deves visitar <span id="local-recomendado">' + localRecomendado + '</span>!';
    document.getElementById('mensagem-resposta').classList.remove('hidden');
}
