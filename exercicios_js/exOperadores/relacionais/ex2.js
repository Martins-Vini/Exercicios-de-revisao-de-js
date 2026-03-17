function validateAge(age) {
    if (age >= 18) {
        return "Pode dirigir";
    } else {
        return "Você é menor de idade, não pode dirigir";
    }
}

//console.log(validateAge(20));
//console.log(validateAge(15));

export default validateAge