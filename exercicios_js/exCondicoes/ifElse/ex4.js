function getVelocity(){
    let vel = 75;
    return vel;
}


function validateVelocity(velocity){
    velocity > 80 
    ? console.log("Velocidade acima do limite permitido! MULTADO!") : 
    console.log("Velocidade dentro do limite permitido.");
}

validateVelocity(getVelocity())