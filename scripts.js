const input = document.querySelector("#input");
const button = document.querySelector("#button");
const taskList = document.querySelector(".task-list");

let MyItemsList = [];

function addNewTask() {
  MyItemsList.push(input.value);
  input.value = "";
  showTasks();
}
function showTasks() {
  let newLi = "";

  MyItemsList.forEach((task) => {
    newLi =
      newLi +
      `
    <li class="task">
    <img src="img/checked.png" alt="imagem do check" />
    <p>${task}</p>
    <img src="img/trash.png" alt="imagem do check" />
  </li>`;
  });
  taskList.innerHTML = newLi;
}

button.addEventListener("click", addNewTask);
