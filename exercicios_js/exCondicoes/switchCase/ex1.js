function getNumbers() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ["+", "-", "*", "/"];

    let op = operators[Math.floor(Math.random() * operators.length)];

    return  {num1, num2, op};
}

function calc({num1, num2, op}){
    switch(op){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

//console.log(calc(getNumbers()));

export {getNumbers, calc}