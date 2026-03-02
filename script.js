const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");

const doneSound = new Audio("assets/Fahhhhh.mp3");
const delSound = new Audio("assets/welldone.mp3");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todos.forEach((text) => addTask(text));
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (!text) return;

  addTask(text);

  todos.push(text);
  localStorage.setItem("todos", JSON.stringify(todos));

  taskInput.value = "";
  checkEmpty();
});

function addTask(text) {
  const li = document.createElement("li");
  li.className = "task show-buttons";

  li.innerHTML = `
    <button class="done-btn">Done</button>
    <span class="task-text">${text}</span>
    <button class="delete-btn">Delete</button>
  `;

  li.querySelector(".done-btn").onclick = () => {
    const isCompleted = li.classList.toggle("completed");
    if (isCompleted) {
      doneSound.currentTime = 0;
      doneSound.play();
    }
  };

  li.querySelector(".delete-btn").onclick = () => {
    const isdelete = li.classList.toggle("delete");
    if (isdelete) {
      delSound.currentTime = 0;
      delSound.play();
    }

    const index = todos.indexOf(text);
    if (index > -1) {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    li.remove();
    checkEmpty();
  };

  taskList.appendChild(li);
}

function checkEmpty() {
  if (taskList.children.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }
}

checkEmpty();
