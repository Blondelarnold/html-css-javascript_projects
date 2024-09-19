const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage on page load
window.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(newTaskItem);
      saveTasks(); 
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      editTask(newTaskItem);
    });

    newTaskItem.appendChild(deleteBtn);
    newTaskItem.appendChild(editBtn);

    taskList.appendChild(newTaskItem);
    saveTasks(); // Save the task
  } else {
    alert('Please enter a task!');
  }
}

// Function to edit task
function editTask(taskItem) {
  const taskText = taskItem.textContent;
  const newTaskText = prompt("Edit task:", taskText); 

  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskItem.textContent = newTaskText;
    saveTasks();
  }
}

// Function to save tasks to local storage
function saveTasks() {
  const tasks = [];
  const taskItems = taskList.querySelectorAll('li');
  taskItems.forEach(item => {
    tasks.push(item.textContent.trim());
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach(task => {
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = task;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(newTaskItem);
        saveTasks();
      });

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => {
        editTask(newTaskItem);
      });

      newTaskItem.appendChild(deleteBtn);
      newTaskItem.appendChild(editBtn);

      taskList.appendChild(newTaskItem);
    });
  }
}
