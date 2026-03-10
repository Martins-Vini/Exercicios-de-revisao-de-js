//console.log(pessoa)

//console.log(pessoa)

//console.log(pessoas)

function showPeople(){
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

    pessoa.nome = "Robertson"

    let pessoas = pessoa;

    return pessoas;
}

//É permitido que essa reatribuição ocorra pois apesar do objeto ser declarado com const, isso diz respeito aos seus atributos (Não podendo adicionar, alterar ou deletar atributos) mas sim os valores desse atributos, como é possível observar.

export default showPeople;