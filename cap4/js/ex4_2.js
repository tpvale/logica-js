function listarNumeros() {
  // cria referência aos elementos que a function irá manipular
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value); // obtém o número informado

  // verifica validade do número
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido");
    inNumero.focus();
    return;
  }

  // incializa variável resposta
  var resposta = "Entre " + numero + " e 1: ";

  // cria um for decrescente
  for (var i = numero; i > 1; i--) {
    resposta = resposta + i + ",";
  }
  resposta = resposta + i + ". ";

  // altera o conteúdo de outResposta
  outResposta.textContent = resposta;
}
// referencia elementos e após associa function ao evento click
var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);