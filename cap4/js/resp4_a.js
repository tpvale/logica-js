function repetirFruta() {
  // cria referência aos elementos html manipulados pela function
  var inFruta = document.getElementById("inFruta");
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  // obtém conteúdo dos campos
  var fruta = inFruta.value;
  var num = Number(inNumero.value); 

  // verifica preenchimento dos campos
  if (fruta == "" || num == 0 || isNaN(num)) {
    alert("Informe os dados corretamente...");
    inFruta.focus();
    return;
  }

  var frutas = ""; // declara variável que irá concatenar as frutas/asteriscos

  for (var i = 1; i < num; i++) {
    frutas = fruta + " * " + frutas;
  }
  frutas = frutas + fruta;

  outResposta.textContent = frutas; // Exibe o conjunto de frutas
}
// cria referência ao botão e após associa a function ao evento click
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);
