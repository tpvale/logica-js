function mostrarPromocao() {
  // cria referência aos elementos manipulados pelo programa
  var inVeiculo = document.getElementById("inVeiculo");
  var inPreco = document.getElementById("inPreco");
  var outVeiculo = document.getElementById("outVeiculo");
  var outEntrada = document.getElementById("outEntrada");
  var outParcela = document.getElementById("outParcela");

  // obtém conteúdo dos campos de entrada
  var veiculo = inVeiculo.value;
  var preco = Number(inPreco.value);

  //calcula valor da entrada e das parcelas
  var entrada = preco * 0.50;
  var parcela = (preco * 0.50) / 12;
  // altera o conteúdo dos parágrafos de resposta
  outVeiculo.textContent = "Promoção: " + veiculo;
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
  outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
// cria uma referência ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
// registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);

/* Ideia: Criar um programa para revenda de veículos. O programa deverá ler modelo e preço do veículos. Apresentar como resposta o valor da entrada(50%) e o saldo em 12x.

Resolução: Neste programa é considerado o valor de entrada de 50% e realizando a divisão dos 50% restantes.*/