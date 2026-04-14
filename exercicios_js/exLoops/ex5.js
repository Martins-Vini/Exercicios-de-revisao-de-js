function showCity(cidadeAlvo) { // Mudado para um nome mais claro
    let cities = [
        'São Paulo',
        'Suzano',
        'Mauá',
        'Santo André',
        'São Bernardo do Campo'
    ];
    
    let index = cities.findIndex(cidade => cidade === cidadeAlvo);
    
    return index;
}

//console.log(showCity('Mauá')); // Resultado: 2
//console.log(showCity('Rio'));  // Resultado: -1

export default showCity;
