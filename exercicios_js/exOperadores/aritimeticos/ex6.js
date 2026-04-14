function imc(peso, altura){

    let result = peso / (altura * altura)

    return result.toFixed(2);
}

//console.log(imc().toFixed(2))

export default imc;