let age = 21

function validateAge(age){
    if(age >= 18){
        return "Já pode tirar CNH: Idade suficiente"
    } else{
        return "Não pode tirar CNH pois é menor de idade"
    }
}

console.log(validateAge(age))