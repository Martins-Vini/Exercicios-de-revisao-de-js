function getGrade(){
    let grade = 9;
    return grade;
}

function validateGrade(grade){
    if(grade < 5){
        return "Insuficiente";
    } else if(grade >= 5 && grade < 7){
        return "Regular"
    } else if(grade >= 7 && grade < 9){
        return "Bom"
    } else if(grade >= 9 && grade <= 10){
        return "Muito bom";
    }
}

//console.log(validateGrade(getGrade()))

export {getGrade, validateGrade}