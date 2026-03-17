function getVelocity() {
    let vel = 75;
    return vel;
}


function validateVelocity(velocity) {
    return velocity > 80 ? "Velocidade acima do limite permitido! MULTADO!" : "Velocidade dentro do limite permitido.";
}

//console.log(validateVelocity(getVelocity()));

export default validateVelocity