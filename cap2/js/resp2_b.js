function calcularPreco() {
  // cria referência aos elementos da página
  var inValorTempo = document.getElementById("inValorTempo");
  var inTempoUso = document.getElementById("inTempoUso");
  var outValorTotal = document.getElementById("outValorTotal");

  // obtém conteúdos dos campos de entrada
  var valor = Number(inValorTempo.value);
  var tempoUso = Number(inTempoUso.value);

  // calcula o valor total a ser pago
  var valorTotal = Math.ceil(tempoUso / 15) * valor;

  // altera o conteúdo da linha de resposta
  outValorTotal.textContent = "Valor a Pagar R$: " + valorTotal.toFixed(2);
}

// cria referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão para carregar uma função
btCalcular.addEventListener("click", calcularPreco);

/* Ideia: Criar um programa para uma lan house que leia o valor de cada 15 min de uso e o tempo de uso por um cliiente em minutos. Após deve informar o valor a ser pago pelo cliente.
Obs: As frações extras de 15 minutos devem ser cobradas de forma integral.

Resolução: Foi utilizado a função Math.ceil que arredonda para cima o resultado da divisão do tempo de uso por 15 minutos e após é multiplicado pelo valor cobrado por cada 15 minutos.*/
