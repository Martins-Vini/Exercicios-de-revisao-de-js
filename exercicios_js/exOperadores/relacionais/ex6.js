function validateGrade(grade) {
    if (grade >= 0 && grade <= 10) {
        if(grade >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

let grade = 10
console.log(validateGrade(grade)); 