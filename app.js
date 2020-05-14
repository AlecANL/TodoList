// Selectors
const todoInput = document.getElementById('todo-input');
const todoBtn = document.getElementById('todo-btn');
const todoList = document.getElementById('todo-list');
const filterTasks = document.getElementById('task-filter');

// Functions
const addTodo = (e) => {
  e.preventDefault();

  const contentTasks = document.createElement('div');
  contentTasks.classList.add('tasks-content');

  const newTask = document.createElement('li');
  newTask.classList.add('task-item');
  newTask.innerText = todoInput.value;
  contentTasks.appendChild(newTask);

  //check button
  const completeTaskBtn = document.createElement('button');
  completeTaskBtn.classList.add('btn-complete');
  completeTaskBtn.innerHTML = '<li class="fas fa-check"></li>';
  contentTasks.appendChild(completeTaskBtn);

  //check button
  const trashButton = document.createElement('button');
  trashButton.classList.add('btn-trash');
  trashButton.innerHTML = '<li class="fas fa-trash"></li>';
  contentTasks.appendChild(trashButton);

  todoList.appendChild(contentTasks);

  todoInput.value = '';
};

const deleteTask = (e) => {
  const item = e.target;
  if (item.classList[0] === 'btn-trash') {
    const task = item.parentElement;
    task.classList.add('fall');
    setTimeout(() => {
      task.remove();
    }, 1000);
  }

  if (item.classList[0] === 'btn-complete') {
    const task = item.parentElement;
    task.classList.toggle('completed');
  }
};

const filterTask = (e) => {
  const tasks = todoList.childNodes;
  tasks.forEach((task) => {
    switch (e.target.value) {
      case 'all':
        task.style.display = 'flex';
        break;
      case 'completed':
        task.classList.contains('completed')
          ? (task.style.display = 'flex')
          : (task.style.display = 'none');
        break;
      case 'inCompleted':
        !task.classList.contains('completed')
          ? (task.style.display = 'flex')
          : (task.style.display = 'none');
        break;
      default:
        console.log('not found');
        break;
    }
  });
};
// Events
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTask);
filterTasks.addEventListener('click', filterTask);
