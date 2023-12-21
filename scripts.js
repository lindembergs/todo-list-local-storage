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

  MyItemsList.forEach((task, index) => {
    newLi =
      newLi +
      `
    <li class="task">
    <img src="img/checked.png" alt="imagem do check" />
    <p>${task}</p>
    <img src="img/trash.png" alt="imagem do check" onclick="deleteItem(${index})" />
  </li>`;
  });
  taskList.innerHTML = newLi;
}
function deleteItem(index) {
  MyItemsList.splice(index, 1);
  showTasks();
}

button.addEventListener("click", addNewTask);
