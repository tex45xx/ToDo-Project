const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const tasklist = document.getElementById('tasklist');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTaskToList(tasktext) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<input type="checkbox">
    <span>${tasktext}</span>
    <button>Delete</button>
    
    `;

    const deleteButton = taskItem.querySelector('button');
    deleteButton.addEventListener('click', () =>{
         const taskIndex = tasks.findIndex(task => task.text === taskText);
         tasks.splice(taskIndex, 1);
         saveTasksToLocalStorage();
         taskItem.remove();
         
    });
    tasklist.appendChild(taskItem);
    tasks.push({text: taskText, completed: false});
    saveTasksToLocalStorage();
    
}

function loadTaskFromLocalStorage() {
    tasks.forEach(task => {
        addTaskToList(taskText);
    });

}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText !== '') {
        addTaskToList(taskText);
        taskInput.value = '';
    }
});

loadTaskFromLocalStorage();

