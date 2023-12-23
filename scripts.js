const input = document.querySelector("#input");
const button = document.querySelector("#button");
const taskList = document.querySelector(".task-list");

let MyItemsList = [];

function addNewTask() {
  if (input.value === "") {
    alert("Por favor, preencha este campo!");
  } else {
    MyItemsList.push({
      task: input.value,
      completed: false,
    });
    input.value = "";
    showTasks();
  }
}
function showTasks() {
  let newLi = "";

  MyItemsList.forEach((item, index) => {
    newLi =
      newLi +
      `
      <li class="task ${item.completed ? "done" : ""}">
      <img src="img/checked.png" alt="imagem do check" onclick="completeTask(${index})" />
      <p>${item.task}</p>
      <img src="img/trash.png" alt="imagem do check" onclick="deleteItem(${index})" />
    </li>`;
  });
  taskList.innerHTML = newLi;

  localStorage.setItem("lista", JSON.stringify(MyItemsList));
}
function deleteItem(index) {
  MyItemsList.splice(index, 1);
  showTasks();
}
function completeTask(index) {
  MyItemsList[index].completed = !MyItemsList[index].completed;
  showTasks();
}
function reloadTasks() {
  const localStorageTasks = localStorage.getItem("lista");
  MyItemsList = localStorageTasks ? JSON.parse(localStorageTasks) : [];
}

reloadTasks();
showTasks();
button.addEventListener("click", addNewTask);

function keyEnter() {
  input.addEventListener("keydown", (e) => {
    e.keyCode === 13 && addNewTask();
  });
}

keyEnter();
