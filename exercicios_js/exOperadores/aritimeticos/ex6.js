function imc(){
    let peso = 60.5;
    let altura = 1.65;
    let result = peso / (altura * altura)

    return result.toFixed(2);
}

//console.log(imc().toFixed(2))

export default imc;