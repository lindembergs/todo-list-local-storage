const input = document.querySelector("#input");
const button = document.querySelector("#button");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  minhaListaDeItens.push(input.value);
  input.value = "";
}
function mostrarTarefas() {}

button.addEventListener("click", adicionarNovaTarefa);
