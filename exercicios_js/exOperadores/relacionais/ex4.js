function validateStock(qntd, stockMin) {
  if (qntd !== 0) {
    if (qntd < stockMin) {
      return "Quantidade de estoque abaixo do mínimo.";
    } else {
      return "Quantidade de estoque suficiente.";
    }
  } else{
    return "Produto sem estoque.";
  }
}

let qntd = 50;
let stockMin = 50;

//console.log(validateStock(qntd, stockMin));

export default validateStock;
