function verifyTypeValue(value) {
    if(value === false){
        return "O valor é falso";
    } else{
        return `O valor é ${value} e seu tipo é ${typeof(value)}`;
    }
}

let value = 0;

console.log(verifyTypeValue(value));

//0 é diferente de false pois o operador de comparação estrita (===) compara tanto o valor quanto o tipo. O número 0 é considerado um valor falsy em JavaScript, mas não é igual a false, pois eles têm tipos diferentes (number e boolean, respectivamente).

//falsy => Representa valores que são considerados falsos em um contexto booleano. Os valores falsy incluem: false, 0, -0, 0n (BigInt zero), "", null, undefined e NaN. Qualquer valor que não seja falsy é considerado truthy.

//truthy => Representa valores que são considerados verdadeiros em um contexto booleano. Os valores truthy incluem: true, qualquer número diferente de 0 (incluindo números negativos), qualquer string não vazia, objetos, arrays e funções. Qualquer valor que não seja falsy é considerado truthy.