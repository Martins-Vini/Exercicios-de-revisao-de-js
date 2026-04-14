import verifyEquality from "../../exercicios_js/exOperadores/relacionais/ex1.js";
import validateAge from "../../exercicios_js/exOperadores/relacionais/ex2.js";
import verifyOrderAlfabetico from "../../exercicios_js/exOperadores/relacionais/ex3.js";
import validateStock from "../../exercicios_js/exOperadores/relacionais/ex4.js";
import verifyTypeValue from "../../exercicios_js/exOperadores/relacionais/ex5.js";
import validateGrades from "../../exercicios_js/exOperadores/relacionais/ex6.js";

test("Exercício 1",()=>{
    let resultado = verifyEquality(10,10)
    expect(resultado).toEqual([true, true])
})

test("Exercício 2",()=>{
    let resultado = validateAge(18)
    expect(resultado).toBe("Pode dirigir")
})

test("Exercício 3",()=>{
    let resultado = verifyOrderAlfabetico("Banana", "Banana")
    expect(resultado).toBe("As frutas são iguais.")
})

test("Exercício 4",()=>{
    let resultado = validateStock(50,50)
    expect(resultado).toBe("Quantidade de estoque suficiente.")
})

test("Exercício 5",()=>{
    let resultado = verifyTypeValue(false)
    expect(resultado).toBe("O valor é falso")
})

test("Exercício 6",()=>{
    let resultado = validateGrades(10)
    expect(resultado).toBe("Aprovado")
})
