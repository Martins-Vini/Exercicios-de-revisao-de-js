import showCont from "../../exercicios_js/exLoops/ex1";
import numberSeven from "../../exercicios_js/exLoops/ex2.js";
import multTable from "../../exercicios_js/exLoops/ex3.js";
import newVetor from "../../exercicios_js/exLoops/ex4.js";
import showCity from "../../exercicios_js/exLoops/ex5.js";

test("Exercício 1",()=>{
    let resultado = showCont(5)
    expect(resultado).toEqual([5,4,3,2,1])
})

test("Exercício 2",()=>{
    let resultado = numberSeven(4)
    expect(resultado).toBe('Você digitou 7!')
})

test("Exercício 3",()=>{
    let resultado = multTable(5)
    expect(resultado).toEqual(["5 x 0 = 0","5 x 1 = 5","5 x 2 = 10","5 x 3 = 15","5 x 4 = 20","5 x 5 = 25","5 x 6 = 30","5 x 7 = 35","5 x 8 = 40","5 x 9 = 45","5 x 10 = 50"])
})

test("Exercício 4", () => {
    let resultado = newVetor(10, 20, 30)
    expect(resultado).toEqual([11.5, 23, 34.5])
})

test("Exercício 5",()=>{
    let resultado = showCity(2)
    expect(resultado).toBe(-1)
})
