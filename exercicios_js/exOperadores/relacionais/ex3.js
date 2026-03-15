function verifyOrderAlfabetico(fruta1, fruta2) {
    if (fruta1 < fruta2) {
        return "A fruta " + fruta1 + " vem antes da fruta " + fruta2 + " em ordem alfabética."
    } else if (fruta1 > fruta2) {
        return "A fruta " + fruta2 + " vem antes da fruta " + fruta1 + " em ordem alfabética."
    } else {
        return "As frutas são iguais."
    }
}

//let fruta1 = "Maçã" 
//let fruta2 = "banana"

//console.log(verifyOrderAlfabetico(fruta1, fruta2))

export default verifyOrderAlfabetico;

//Se Banana estiver "banana" em minúsculo, ela vem depois da Maçã, pois as letras minúsculas tem um valor maior do que as letras maiúsculas. Se as duas palavras estiverem com a primeira letra maiúscula, a Maçã vem antes da Banana.