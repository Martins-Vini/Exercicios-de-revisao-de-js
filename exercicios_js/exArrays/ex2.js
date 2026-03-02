function buscarFruta(){
    const frutas = ['maça', 'banana', 'uva', 'morango', 'abacaxi'];
    const busca = 'banana';
    const indice = frutas.indexOf(busca);

    console.log(indice !== -1 ? `Índice: ${indice}` : 'Não encontrada');
}

buscarFruta()
