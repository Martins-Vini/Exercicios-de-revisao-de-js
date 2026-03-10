//F = (C * 9/5) + 32.

function getTemperature(){
    let celsius = 20;
    return celsius;
}

function castTemperature(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C é igual a ${fahrenheit}°F`;
}

//castTemperature(getTemperature())

export {getTemperature, castTemperature}