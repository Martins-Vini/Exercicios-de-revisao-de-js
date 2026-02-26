function sumArrayNumbers(){
    let numbers = [1, 2, 3, 4, 5]
    let sum = 0;
    numbers.forEach((number) => {
        if(number > 1){
            sum += number;
        }
    })

    return sum;
}

console.log(sumArrayNumbers())