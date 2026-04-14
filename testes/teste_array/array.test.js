import sumArrayNumbers from "../../exercicios_js/exArrays/ex1";
import buscarFruta from "../../exercicios_js/exArrays/ex2";

test("Exercício 1", ()=>{
    let resultado = sumArrayNumbers([1, 2, 3, 4, 5, 6]);
    expect(resultado).toBe(20)
})

test("Exercício 2", () => {
    let resultado = buscarFruta("banana")
    expect(resultado).toEqual("Índice: 1")
})
