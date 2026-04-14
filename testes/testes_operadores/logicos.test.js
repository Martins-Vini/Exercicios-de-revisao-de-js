import acessProfile from "../../exercicios_js/exOperadores/logicos/ex1.js";
import settingColor from "../../exercicios_js/exOperadores/logicos/ex2.js";
import catchUmbrella from "../../exercicios_js/exOperadores/logicos/ex3.js";

test("Exercício 2",()=>{
    let resultado = settingColor("Black","White")
    expect(resultado).toBe("White")
})
