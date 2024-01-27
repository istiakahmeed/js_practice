const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";

    // Save tasks to local storage after adding a new task
    saveTasks();
  }
});

// add the task
function addTask(taskText) {
  const taskItem = document.createElement("li");
  taskItem.className = "task";
  taskItem.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
  taskList.appendChild(taskItem);

  // Save tasks to local storage after adding a new task
  saveTasks();
}

// delete the task
function deleteTask(task) {
  const taskItem = task.parentElement;
  taskList.removeChild(taskItem);

  // Save tasks to local storage after deleting a task
  saveTasks();
}

// check if the task
function toggleTask(checkbox) {
  const taskItem = checkbox.parentElement;
  taskItem.classList.toggle("completed");

  // Save tasks to local storage after toggling a task
  saveTasks();
}

// filter tasks
function filterTasks(filterType) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    switch (filterType) {
      case "all":
        task.style.display = "flex";
        break;
      case "active":
        task.classList.contains("completed")
          ? (task.style.display = "none")
          : (task.style.display = "flex");
        break;
      case "completed":
        task.classList.contains("completed")
          ? (task.style.display = "flex")
          : (task.style.display = "none");
        break;
    }
  });
}

// Save tasks to local storage
function saveTasks() {
  const tasks = document.querySelectorAll(".task span");
  const tasksArray = Array.from(tasks).map((task) => task.innerText);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

// Load tasks from local storage
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasksArray = JSON.parse(storedTasks);
    tasksArray.forEach((taskText) => addTask(taskText));
  }
}
