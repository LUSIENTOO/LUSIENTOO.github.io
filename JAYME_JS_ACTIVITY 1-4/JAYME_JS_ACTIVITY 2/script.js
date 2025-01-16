const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


const tasks = [];

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = taskInput.value.trim();
    if (task !== '') {
        addTaskToList(task);
        tasks.push(task); //the array
        console.log(tasks);
        taskInput.value = '';
    }
});

function addTaskToList(task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
}
