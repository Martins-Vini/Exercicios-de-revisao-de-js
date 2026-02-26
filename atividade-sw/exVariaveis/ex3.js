const pessoa = {
    nome:"Joãozinho Pernambucano",
    idade: 62,
    endereco:{
        rua:"Rua do mal",
        cep:81732-98,
        bairro:"Tira",
        cidade:"São Paulo"
    }
}

console.log(pessoa)

pessoa.nome = "Robertson"

console.log(pessoa)

let pessoas = pessoa;

console.log(pessoas)

//É permitido que essa reatribuição ocorra pois apesar do objeto ser declarado com const, isso diz respeito aos seus atributos (Não podendo adicionar, alterar ou deletar atributos) mas sim os valores desse atributos, como é possível observar.