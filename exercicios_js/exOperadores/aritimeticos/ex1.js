function verifyNumberPair(){
    let num = 17

    if(num % 2 == 0){
        return "O número é par"
    } else{
        return "O número é ímpar"
    }
}

console.log(verifyNumberPair());