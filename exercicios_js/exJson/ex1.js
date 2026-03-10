function showProduto(){
  let produtosLimpeza = [
    {
      "nome": "Detergente Neutro",
      "categoria": "Cozinha",
      "volume_ml": 500,
      "preco": 2.50,
      "fragrancia": "Neutro"
    },
    {
      "nome": "Limpador Multiuso",
      "categoria": "Superfícies",
      "volume_ml": 500,
      "preco": 4.90,
      "fragrancia": "Limão"
    },
    {
      "nome": "Desinfetante Pinho",
      "categoria": "Banheiro",
      "volume_ml": 1000,
      "preco": 8.75,
      "fragrancia": "Original"
    },
    {
      "nome": "Amaciante Concentrado",
      "categoria": "Lavanderia",
      "volume_ml": 1500,
      "preco": 22.90,
      "fragrancia": "Flores do Campo"
    },
    {
      "nome": "Água Sanitária",
      "categoria": "Pesada",
      "volume_ml": 2000,
      "preco": 6.30,
      "fragrancia": "Cloro"
    }
  ]

  return produtosLimpeza;

}

//console.log(showProduto())

export default showProduto;