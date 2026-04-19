import * as todo from './todo.js';
import * as state from './state.js';


const addTaskButton = document.getElementById('tdAddTask');
const tdContainer = document.querySelector('.toDosContainer');
const inputDialog = document.getElementById('inputToDo')


function createToDo(title, desc, priority) {
  const newToDo = new todo.toDo(title, desc, priority);
  state.addToDo(newToDo);
};

function renderToDos() {
  tdContainer.innerHTML = '';
  let toDos = state.getCurToDos();

  toDos.forEach((newToDo) => {
    const newContainer = `
    <div class="todo" data-id="${newToDo.id}">
      <div class="todoContent">
        <h1>${newToDo.title}</h1>
        <p>${newToDo.desc}</p>
        <span>${newToDo.priority}</span>
      </div>
      <button class="delButton">Delete task</button>
    </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = newContainer;
    tdContainer.appendChild(wrapper.firstElementChild);
  });  

  initDelButtons();
}

function initButtons() {
  addTaskButton.addEventListener('click', () => {
    const titleVal = document.getElementById('tdTitle').value;
    const descVal = document.getElementById('tdDesc').value;
    const priorityVal = document.getElementById('tdPriority').value;

    createToDo(titleVal, descVal, priorityVal);
    inputDialog.close();
    renderToDos();
    console.log(state.getCurToDos());
  });  
};

function initDelButtons(){
  const delTaskButtons = document.querySelectorAll('.delButton');
  delTaskButtons.forEach(delTaskButton => {
    delTaskButton.addEventListener('click', () => {
      const targetToDo = event.target.closest('.todo');
      state.delToDo(targetToDo.dataset.id);
      renderToDos();
      console.log("delpressed!");
    });    
  })
}

export { initButtons, renderToDos };