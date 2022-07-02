var criancas = []; // declara vetor global

function adicionarCriancas() {
  // cria referência aos elementos (campos) de entrada de dados
  var inNome = document.getElementById("inNome");
  var inIdade = document.getElementById("inIdade");

  var nome = inNome.value; // obtém conteúdo dos campos
  var idade = Number(inIdade.value);
  // verifica preenchimento dos campos

  if (nome == "" || inIdade.value == "" || isNaN(idade)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }

  // adiciona dados ao vetor de objetos
  criancas.push({nome: nome, idade: idade});

  // limpa campos e posiciona cursos em inNome
  inNome.value = "";
  inIdade.value = "";
  inNome.focus();
  
  listarCriancas(); // chama function que lista as crianças
}

// cria referência ao btAdicionar e associa function ao evento click deste botão
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas);

function listarCriancas() {
  // verifica se vetor está vazio
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  
}