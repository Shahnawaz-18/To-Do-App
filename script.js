const taskInput= document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = () =>{
    loadTasks();
};

function addtask() {
    const taskText= taskInput.ariaValueMax.trim();
    if (taskText== "") return;

    const li=document.createElement("li")
    li.innerHTML =`
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";

    saveTask();
}

function toggleComplete(span) {
    span.parentElement.classList.toggle("Completed");
    saveTask();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTask();
}

function saveTask() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    const data=localStorage.getItem("tasks")
    if(data) taskList.innerHTML = data;
}