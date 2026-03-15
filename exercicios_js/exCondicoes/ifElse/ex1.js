function validateNumber() {
    let idade = 16;

    if (idade > 0) {
        return "Positivo";
    }

    return "É o Fim :( ";
}

//console.log(validateNumber());

export default validateNumber;