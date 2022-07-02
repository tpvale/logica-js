function calcularChinchilas() {
  // cria referência aos elementos html manipulados pela function
  var inNumChinchilas = document.getElementById("inNumChinchilas");
  var inNumAnos = document.getElementById("inNumAnos");
  var outResultado = document.getElementById("outResultado");

  // obtém o conteúdo dos campos
  var chinchilas = Number(inNumChinchilas.value);
  var anos = Number(inNumAnos.value);

  // Verifica o preenchimento dos campos
  if(chinchilas < 2 || anos == 0 || isNaN(chinchilas) || isNaN(anos)) {
    alert("Informe os dados corretamente...");
    inNumChinchilas.focus();
    return;
  }

  // cria uma variável do tipo String, que irá concatenar a resposta
  var resposta = "";
  var total = chinchilas;

  for (var i = 1; i <= anos; i++) {
    resposta = resposta + i + "º Ano: " + total + " Chinchilas\n";
    total = total * 3;
  }

  // altera o conteúdo da tag de resposta
  outResultado.textContent = resposta;
}
// cria referência ao botão e após associas function ao evento click
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularChinchilas);