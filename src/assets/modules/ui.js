import * as todo from './todo.js';
import * as state from './state.js';
import * as project from './project.js';


const addTaskButton = document.getElementById('tdAddTask');
const tdContainer = document.querySelector('.toDosContainer');
const inputDialog = document.getElementById('inputToDo');
const inputForm = document.getElementById('inputForm');
const pjContainer = document.querySelector('.nav');
const addProjectButton = document.getElementById('pjAddProject');
const projectForm = document.getElementById('projectForm');
const projectDialog = document.getElementById('inputProject');

let curView = 'all';

function renderByCurView() {
  if (curView == 'all') {
    renderToDos(state.getCurToDos());
  } else {
    const filtered = state.filterTodos('project', curView);
    renderToDos(filtered);
  }
}

function renderToDos(toDosArr) {
  tdContainer.innerHTML = '';
  let toDos = toDosArr;

  toDos.forEach((newToDo) => {
    const newContainer = `
    <div class="todo ${newToDo.priority}" data-id="${newToDo.id}">
      <div class="todoHeader">
          <h1>${newToDo.title}</h1>
          <div class="todosButtons">
            <button class="delButton">Delete</button>
            <button class="editButton" command="show-modal" commandfor="reInputTodo">Edit</button>
          </div>
      </div>
      <div class="todoContent">        
        <p>${newToDo.desc}</p>
        <span>Priority: ${newToDo.priority}</span><br>    
        <span>Deadline: ${newToDo.date}</span><br>
        <span>Project: ${newToDo.project}</span>       
      </div>      
    </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = newContainer;
    tdContainer.appendChild(wrapper.firstElementChild);
  });

  initDelButtons();
  initEditToDoButtons();
}

const showAllButton = document.getElementById('showAllToDos');
function initButtons() {
  //add todo button on form
  inputForm.addEventListener('submit', () => {
    event.preventDefault();
    const titleVal = document.getElementById('tdTitle').value;
    const descVal = document.getElementById('tdDesc').value;
    const priorityVal = document.getElementById('tdPriority').value;
    const dateVal = document.getElementById('tdDate').value;
    const projectVal = document.getElementById('tdProject').value;

    todo.createToDo(titleVal, descVal, dateVal, priorityVal, projectVal);
    inputDialog.close();
    inputForm.reset();

    curView=projectVal;
    renderByCurView();
    // renderToDos(state.getCurToDos());    
  });

  //add project button on form
  projectForm.addEventListener('submit', () => {
    event.preventDefault();
    const projectTitle = document.getElementById('pjTitle').value;
    const projectColor = document.getElementById('pjColor').value;

    const newProject = new project.project(projectTitle, projectColor);
    project.addProject(newProject);
    projectDialog.close();
    projectForm.reset();
    renderProjects(project.getProjects());
    console.log(project.getProjects());
    updateProjectSelector();
  });

  //show all todos
  showAllButton.addEventListener('click',()=>{
    renderToDos(state.getCurToDos());
    curView = 'all';
    console.log(`current view: ${curView}`);
  });
};

function initDelButtons() {
  const delTaskButtons = document.querySelectorAll('.delButton');
  delTaskButtons.forEach(delTaskButton => {
    delTaskButton.addEventListener('click', () => {
      const targetToDo = event.target.closest('.todo');
      state.delToDo(targetToDo.dataset.id);
      
      renderByCurView();
      // console.log("delpressed!");
    });
  })
}

function initDelProjectButtons() {
  const delProjectButtons = document.querySelectorAll('.delProject');
  delProjectButtons.forEach(delProjectButton => {
    delProjectButton.addEventListener('click', () => {
      const targetProject = event.target.closest('.project');
      project.delProject(targetProject.dataset.idpj);
      renderProjects(project.getProjects());
      updateProjectSelector();
      // console.log(targetProject.dataset.idpj);      
    });
  });
}

function renderProjects(projectsArr) {
  pjContainer.innerHTML = '';
  let projects = projectsArr;

  projects.forEach((newProject) => {
    const deleteBtn = newProject.protected === true ? '' : `<button class="delProject">🗑</button>`;

    const newContainer = `
      <div class="project" data-idpj="${newProject.id}">
        <h3 class="nameProject">${newProject.name}</h3>
        <div>
          <button class="openProject">👁</button>
          ${deleteBtn}
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = newContainer;
    pjContainer.appendChild(wrapper.firstElementChild);
  });

  initDelProjectButtons();
  initOpenProjectButtons();
}

const projectSelector = document.getElementById('tdProject');
function updateProjectSelector() {
  projectSelector.replaceChildren();
  const projects = project.getProjects();

  projects.forEach((newProject) => {
    const newOption = `<option value="${newProject.name}">${newProject.name}</option>`;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = newOption;
    projectSelector.appendChild(wrapper.firstElementChild);
  });
}


function initOpenProjectButtons() {
  const openProjectButtons = document.querySelectorAll('.openProject');
  openProjectButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
      const targetProject = event.target.closest('.project');
      const targetName = targetProject.querySelector('.nameProject').textContent;   
      let toDos = state.getCurToDos();      
      const filtered = state.filterTodos('project', targetName);
      renderToDos(filtered);
      curView = targetName;
      console.log(`current view: ${curView}`);
    });
  });
}

function initEditToDoButtons() {
  let todoID;
  const reInputDialog = document.getElementById('reInputToDo')
  const editButtons = document.querySelectorAll('.editButton');
  editButtons.forEach(editButton => {
    editButton.addEventListener('click', ()=>{
      todoID = event.target.closest('.todo').dataset.id;
      reInputDialog.showModal();
      console.log(todoID);
    });
  });
}

export { initButtons, renderToDos, renderProjects, updateProjectSelector };