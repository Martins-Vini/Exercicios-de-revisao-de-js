function verifyEquality(a, b) {
    return [a === b, a == b];
}

//let num1 = 10;
//let num2 = "10";

//console.log(verifyEquality(num1, num2));

export default verifyEquality;

//O primeiro resultado é false porque o operador === verifica a igualdade estrita, ou seja, ele compara tanto o valor quanto o tipo dos operandos. No caso, num1 é um número (10) e num2 é uma string ("10"), então eles não são estritamente iguais.

//O segundo resultado é true porque o operador == verifica a igualdade frouxa, ou seja, ele compara apenas os valores dos operandos, realizando coerção de tipo se necessário. Nesse caso, o JavaScript converte a string "10" para o número 10 antes de comparar, resultando em uma comparação verdadeira.