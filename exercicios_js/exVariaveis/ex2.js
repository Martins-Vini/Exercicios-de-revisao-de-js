nome = "Raven";

//console.log(showName())

var nome;

function showName(){
    return nome
}

//Obervando o código de maneira clara percebe-se que o let é uma váriavél de escopo, enqaunto o var é uma váriavel global. Portanto, ao ser chamada mesmo antes de ser declarada ambas tem comportamentos diferentes. 

export default showName;
