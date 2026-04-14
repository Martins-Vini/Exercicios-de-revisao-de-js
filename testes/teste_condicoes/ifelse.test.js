import validateNumber from "../../exercicios_js/exCondicoes/ifElse/ex1";
import validatecnh from "../../exercicios_js/exCondicoes/ifElse/ex2";
import { validateGrade } from "../../exercicios_js/exCondicoes/ifElse/ex3";
import validateVelocity from "../../exercicios_js/exCondicoes/ifElse/ex4";

test("Exercício 2",()=>{
    let resultado = validatecnh(18)
    expect(resultado).toBe("Já pode tirar CNH: Idade suficiente")
})

test("Exercício 4",()=>{
    let resultado = validateVelocity(90)
    expect(resultado).toBe("Velocidade acima do limite permitido! MULTADO!")
})