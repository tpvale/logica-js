function mostrarPromocao() {
  // cria referência aos elementos da página
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outMedicamento = document.getElementById("outMedicamento");
  var outPreco = document.getElementById("outPreco");

  // obtém conteúdos dos campos de entrada
  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);
  // multiplica o preço do medicamento por 2x e arredonda o resultado para baixo
  var valorTotal = Math.floor(preco * 2);
  // altera o conteúdo dos parágrafos de resposta
  outMedicamento.textContent = "Promoção de " + medicamento;
  outPreco.textContent = "Leve 2 por apenas R$: " + valorTotal.toFixed(2);
}

// cria uma referência ao elemento btPromocao (botão)
var btPromocao = document.getElementById("btPromocao");
// registra um evento associado ao botão, para carregar uma função
btPromocao.addEventListener("click", mostrarPromocao);

/* Ideia: Criar um programa para uma Farmacia, no qual o cliente receba como desconto os centavos do valor total na compra de duas unidades de um mesmo medicamento.

Resolução: Utilizando a função Math.floor() foi possível descontar do valor total de dois medicamentos os centavos da promoção.*/