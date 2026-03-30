//F = (C * 9/5) + 32.

function castTemperature(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C é igual a ${fahrenheit}°F`;
}

//castTemperature(getTemperature())

export default castTemperature;