function newVetor(...values){
    const numbers = Array.isArray(values[0]) ? values[0] : values;
    const aumento = numbers.map(n => n * 1.15);

    //console.log(numbers)
    //console.log(aumento)

    return aumento;
}

export default newVetor;


