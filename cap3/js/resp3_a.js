function verificaParOuImpar() {
  // cria referência aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResultado = document.getElementById("outResultado");

  // obtém os conteúdos dos campos de edição da página
  var numero = inNumero.value;

  // Utiliza o módulo para vericar se há resto na divisão
  var sobra = numero % 2;
  
  // cria a condição
  if (sobra == 0) {
    // altera o texto do elemento outResultado
    outResultado.textContent = "Resposta " + numero + " é Par"
  } else {
    outResultado.textContent = "Resposta " + numero + " é Impar"
  }
}

// cria uma referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", verificaParOuImpar);