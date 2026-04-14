import verifyNumberPair from "../../exercicios_js/exOperadores/aritimeticos/ex1";
import notaFinal from "../../exercicios_js/exOperadores/aritimeticos/ex2.js";
import castTemperature from "../../exercicios_js/exOperadores/aritimeticos/ex3.js";
import incrementoDecremento from "../../exercicios_js/exOperadores/aritimeticos/ex4.js";
import areaRet from "../../exercicios_js/exOperadores/aritimeticos/ex5.js";
import imc from "../../exercicios_js/exOperadores/aritimeticos/ex6.js";
import discount from "../../exercicios_js/exOperadores/aritimeticos/ex7.js";

test("Exercício 1",()=>{
    let resultado = verifyNumberPair(2)
    expect(resultado).toBe("O número é par")
})

test("Exercício 2",()=>{
    let resultado = notaFinal(4,10,9,5)
    expect(resultado).toBe(7)
})

test("Exercício 3",()=>{
    let resultado = castTemperature(30)
    expect(resultado).toBe("30°C é igual a 86°F")
})

test("Exercício 4",()=>{
    let resultado = incrementoDecremento(10)
    expect(resultado).toBe("Valor inicial: 10, Com o incremento: 11, Com o decremento: 9")
})

test("Exercício 5",()=>{
    let resultado = areaRet(2,3,5)
    expect(resultado).toBe(30)
})

test("Exercício 6",()=>{
    let resultado = imc(60,1.75)
    expect(resultado).toBe("19.59")
})

test("Exercício 7",()=>{
    let resultado = discount(250, 10)
    expect(resultado).toBe(237.5)
})