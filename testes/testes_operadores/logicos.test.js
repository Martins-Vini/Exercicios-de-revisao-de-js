import acessProfile from "../../exercicios_js/exOperadores/logicos/ex1.js";
import settingColor from "../../exercicios_js/exOperadores/logicos/ex2.js";
import catchUmbrella from "../../exercicios_js/exOperadores/logicos/ex3.js";

test("Exercício 1",()=>{
    let resultado = acessProfile("admin", "123")
    expect(resultado).toBe( `Acesso permitido - true`)
})

test("Exercício 2",()=>{
    let resultado = settingColor("Black","White")
    expect(resultado).toBe("White")
})

test("Exercício 3",()=>{
    let resultado = catchUmbrella(true)
    expect(resultado).toBe(true)
})