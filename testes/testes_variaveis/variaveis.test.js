

import calculoCircunferencia from "../../exercicios_js/exVariaveis/ex1";
import showName from "../../exercicios_js/exVariaveis/ex2.js";
import showPeople from "../../exercicios_js/exVariaveis/ex3.js";

test("Exercício 1",()=>{
    let resultado = calculoCircunferencia(4)
    expect(resultado).toBe(24)
})

test("Exercício 2", ()=>{
    let resultado = showName("Robert")
    expect(resultado).toBe("Robert")
})

test("Exercício 3", ()=>{
    let resultado = showPeople(2)
    expect(resultado).toStrictEqual({
        nome:"Robertson",
        idade: 36,
        endereco:{
            rua:"Rua Indonésia ",
            cep:91532-98,
            bairro:"Arabia",
            cidade:"São Paulo"
        }
    })
})