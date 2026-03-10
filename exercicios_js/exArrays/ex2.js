function buscarFruta(){
    const frutas = ['maça', 'banana', 'uva', 'morango', 'abacaxi'];
    const busca = 'banana';
    const indice = frutas.indexOf(busca);

    return indice !== -1 ? `Índice: ${indice}` : 'Não encontrada';
}

export default buscarFruta;