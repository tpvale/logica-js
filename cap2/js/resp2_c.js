function mostrarPromocao() {
  // cria referência aos elementos da página
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var outProduto = document.getElementById("outProduto");

  // obtém conteúdos dos campos de entrada
  var produto = inProduto.value;
  var preco = Number(inPreco.value);
  // cria o produtoPromo e faz a soma total dos produtos
  var produtoPromo = preco * 0.5;
  var valorTotal = (preco * 2) + produtoPromo;
  // altera o conteúdo dos parágrafos de resposta
  outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + valorTotal.toFixed(2);
  outProduto.textContent = "O 3° produto custa apenas R$: " + produtoPromo.toFixed(2);
}

// cria uma referência ao elemento btPromocao (botão)
var btPromocao = document.getElementById("btPromocao");
// registra um evento associado ao botão, para carregar uma função
btPromocao.addEventListener("click", mostrarPromocao);