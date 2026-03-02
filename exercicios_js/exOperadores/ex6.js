function imc(){
    let peso = 60.5;
    let altura = 1.65;

    return peso / (altura * altura)
}

console.log(imc().toFixed(2))