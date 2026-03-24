function multTable(num){
    let tabuada = [];
    for(let i = 0; i <= 10; i++){
        tabuada.push(`${num} x ${i} = ${num * i}`);
    }

    return tabuada;
}

//multTableFive();

export default multTable;