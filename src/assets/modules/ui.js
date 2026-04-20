import * as todo from './todo.js';
import * as state from './state.js';


const addTaskButton = document.getElementById('tdAddTask');
const tdContainer = document.querySelector('.toDosContainer');
const inputDialog = document.getElementById('inputToDo');
const inputForm = document.getElementById('inputForm');


function createToDo(title, desc, date, priority) {
  const newToDo = new todo.toDo(title, desc, date, priority);
  state.addToDo(newToDo);
};

function renderToDos(toDosArr) {
  tdContainer.innerHTML = '';
  let toDos = toDosArr;

  toDos.forEach((newToDo) => {
    const newContainer = `
    <div class="todo ${newToDo.priority}" data-id="${newToDo.id}">
      <div class="todoContent">
        <h1>${newToDo.title}</h1>
        <p>${newToDo.desc}</p>
        <span>Priority: ${newToDo.priority}</span><br>    
        <span>Deadline: ${newToDo.date}</span>     
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
  inputForm.addEventListener('submit', () => {
    event.preventDefault();
    const titleVal = document.getElementById('tdTitle').value;
    const descVal = document.getElementById('tdDesc').value;
    const priorityVal = document.getElementById('tdPriority').value;
    const dateVal = document.getElementById('tdDate').value;

    createToDo(titleVal, descVal, dateVal, priorityVal);
    inputDialog.close();
    inputForm.reset();
    renderToDos(state.getCurToDos());
    console.log(state.getCurToDos());
  });  
};

function initDelButtons(){
  const delTaskButtons = document.querySelectorAll('.delButton');
  delTaskButtons.forEach(delTaskButton => {
    delTaskButton.addEventListener('click', () => {
      const targetToDo = event.target.closest('.todo');
      state.delToDo(targetToDo.dataset.id);
      renderToDos(state.getCurToDos());
      console.log("delpressed!");
    });    
  })
}

export { initButtons, renderToDos };