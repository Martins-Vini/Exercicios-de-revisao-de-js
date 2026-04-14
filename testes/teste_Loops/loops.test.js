import showCont from "../../exercicios_js/exLoops/ex1";
import numberSeven from "../../exercicios_js/exLoops/ex2.js";
import multTable from "../../exercicios_js/exLoops/ex3.js";
import newVetor from "../../exercicios_js/exLoops/ex4.js";
import areaRet from "../../exercicios_js/exLoops/ex5.js";


test("Exercício 2",()=>{
    let resultado = numberSeven(4)
    expect(resultado).toBe('Você digitou 7!')
})

test("Exercício 4", () => {
    let resultado = newVetor(10, 20, 30)
    expect(resultado).toEqual([11.5, 23, 34.5])
})

