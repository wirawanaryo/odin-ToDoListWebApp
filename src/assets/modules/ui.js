import * as todo from './todo.js';
import * as state from './state.js';
import * as project from './project.js';


const addTaskButton = document.getElementById('tdAddTask');
const tdContainer = document.querySelector('.toDosContainer');
const inputDialog = document.getElementById('inputToDo');
const inputForm = document.getElementById('inputForm');
const pjContainer = document.querySelector('.nav');
const addProjectButton = document.getElementById('pjAddProject');


function createToDo(title, desc, date, priority, project) {
  const newToDo = new todo.toDo(title, desc, date, priority, project);
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
        <span>Deadline: ${newToDo.date}</span><br>
        <span>Project: ${newToDo.project}</span>       
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
    const projectVal = document.getElementById('tdProject').value;

    createToDo(titleVal, descVal, dateVal, priorityVal, projectVal);
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

function initDelProjectButtons(){
  const delProjectButtons = document.querySelectorAll('.delProject');
  delProjectButtons.forEach(delProjectButton=>{
    delProjectButton.addEventListener('click', ()=>{
      const targetProject = event.target.closest('.project');
      project.delProject(targetProject.dataset.idpj);
      renderProjects(project.getProjects());
      // console.log(targetProject.dataset.idpj);      
    });
  });
}

function renderProjects(projectsArr) {
  pjContainer.innerHTML = '';
  let projects = projectsArr;

  projects.forEach((newProject) => {
    const newContainer = `
      <div class="project" data-idpj="${newProject.id}">
        <h3 class="nameProject">${newProject.name}</h3>
        <div>
          <button class="openProject">👁</button>
          <button class="delProject">🗑</button>
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = newContainer;
    pjContainer.appendChild(wrapper.firstElementChild);
  });

  initDelProjectButtons();
}

export{ initButtons, renderToDos, renderProjects };