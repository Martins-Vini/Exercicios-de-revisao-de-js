//console.log(pessoa)

//console.log(pessoa)

//console.log(pessoas)

function showPeople(idx){
    const pessoas = [{
        nome:"Joãozinho Pernambucano",
        idade: 62,
        endereco:{
            rua:"Rua do mal",
            cep:81732-98,
            bairro:"Tira",
            cidade:"São Paulo"
        }
    },
    {
        nome:"Milano",
        idade: 25,
        endereco:{
            rua:"Rua jaraguar",
            cep:81532-98,
            bairro:"Tira",
            cidade:"São Paulo"
        }
    },
    {
        nome:"Ethan Nasarabia",
        idade: 36,
        endereco:{
            rua:"Rua Indonésia ",
            cep:91532-98,
            bairro:"Arabia",
            cidade:"São Paulo"
        }
    },
]

    pessoas[idx].nome = "Robertson"

    let pessoas2 = pessoas;

    return pessoas2[idx];
}

//É permitido que essa reatribuição ocorra pois apesar do objeto ser declarado com const, isso diz respeito aos seus atributos (Não podendo adicionar, alterar ou deletar atributos) mas sim os valores desse atributos, como é possível observar.

export default showPeople;