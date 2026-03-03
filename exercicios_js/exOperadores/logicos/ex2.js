function settingColor(color, color2) {
    const colorFinal = color2 || color
    return colorFinal;
}

let colorCustomized = undefined
let colorDefault = "Black"

console.log(settingColor(colorDefault, colorCustomized))