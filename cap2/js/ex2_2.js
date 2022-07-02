function converterDuracao() {
  // cria referência aos elementos da página
  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outResposta = document.getElementById("outResposta");

  // obtém conteúdos dos campos de entrada
  var titulo = inTitulo.value;
  var duracao = Number(inDuracao.value);

  // arredonda para baixo o resultado da divisão
  var horas = Math.floor(duracao / 60);
  // obtém o resto da divisão entre os números
  var minutos = duracao % 60;
  // altera o conteúdo dos parágrafos de resposta
  outTitulo.textContent = titulo;
  outResposta.textContent = horas + " horas(s) e " + minutos + " minuto(s)";
}
// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);

/* Ideia: Criar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

Resolução: Neste programa é utilizada a função Math.floor() e operador módulo %, como por exemplo: 180 / 60 resulta em 1.8; Math.flor(1.8) retorna 1, que é o número de horas do filme. Para obter os minutos, é utilizado 108 % 60, que resulta em 48, que são os minutos restantes da duração. */

