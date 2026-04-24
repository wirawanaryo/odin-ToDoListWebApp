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
const reInputDialog = document.getElementById('reInputToDo');
const reInputForm = document.getElementById('reInputForm');

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
            <input type="checkbox" id="checkDone" name="checkDone" value="done">
            <label for="checkDone"> Done</label>
            <button class="delButton">Delete</button>
            <button class="editButton" command="show-modal" commandfor="reInputTodo">Edit</button>
          </div>          
      </div>
      <hr>
      <div class="todoContent">        
        <p>${newToDo.desc}</p><br>
        <span class='labelTodo'>Priority</span><span>: ${newToDo.priority}</span><br>    
        <span class='labelTodo'>Deadline</span><span>: ${newToDo.date}</span><br>
        <span class='labelTodo'>Project</span><span>: ${newToDo.project}</span>       
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

    curView = projectVal;
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
  showAllButton.addEventListener('click', () => {
    const openProjectButtons = document.querySelectorAll('.openProject');
    openProjectButtons.forEach(pbutton => { pbutton.textContent = '📁' });

    renderToDos(state.getCurToDos());
    curView = 'all';
    console.log(state.getCurToDos());
  });


  //reinputform  
  reInputForm.addEventListener('submit', () => {
    event.preventDefault();

    const titleVal = document.getElementById('tdTitle2').value;
    const descVal = document.getElementById('tdDesc2').value;
    const dateVal = document.getElementById('tdDate2').value;
    const priorityVal = document.getElementById('tdPriority2').value;
    const projectVal = document.getElementById('tdProject2').value;

    // console.log([titleVal, descVal, dateVal, priorityVal, projectVal]);
    reInputDialog.close();
    reInputForm.reset();

    // state.delToDo(currentEditID);
    // currentEditID = ''; 
    // todo.createToDo(titleVal, descVal, dateVal, priorityVal, projectVal);
    state.modifyToDo(currentEditID, titleVal, descVal, dateVal, priorityVal, projectVal);
    currentEditID = '';
    curView = projectVal;
    renderByCurView();
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
      const projectName = targetProject.querySelector('.nameProject').textContent;

      const confirmed = confirm(`Are you sure "? This will also remove all todos within.`);

      if (confirmed) {
        project.delProject(targetProject.dataset.idpj);
        renderProjects(project.getProjects());
        updateProjectSelector();

        // delete todos inside      
        state.delAllTodoByProperty('project', projectName);
        curView = 'all';
        renderByCurView();
      }
    });
  });
}

function renderProjects(projectsArr) {
  pjContainer.innerHTML = '';
  let projects = projectsArr;

  projects.forEach((newProject) => {
    const deleteBtn = newProject.protected === true ? '' : `<button class="delProject">🗑️</button>`;

    const newContainer = `
      <div class="project ${newProject.color}" data-idpj="${newProject.id}">
        <div class="pjNameUI">
          <button class="openProject">📁</button>
          <h3 class="nameProject">${newProject.name}</h3>
        </div>
        <div>          
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


const projectSelector1 = document.getElementById('tdProject');
const projectSelector2 = document.getElementById('tdProject2')
const projectSelectors = [projectSelector1, projectSelector2];
function updateProjectSelector() {
  projectSelectors.forEach(projectSelector => {
    projectSelector.replaceChildren();
    const projects = project.getProjects();

    projects.forEach((newProject) => {
      const newOption = `<option value="${newProject.name}">${newProject.name}</option>`;
      const wrapper = document.createElement('div');
      wrapper.innerHTML = newOption;
      projectSelector.appendChild(wrapper.firstElementChild);
    });
  });
}


function initOpenProjectButtons() {
  const openProjectButtons = document.querySelectorAll('.openProject');
  openProjectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetProject = event.target.closest('.project');
      const targetName = targetProject.querySelector('.nameProject').textContent;
      let toDos = state.getCurToDos();
      const filtered = state.filterTodos('project', targetName);
      renderToDos(filtered);
      curView = targetName;

      openProjectButtons.forEach(pbutton => { pbutton.textContent = '📁' });
      button.textContent = '📂';
    });
  });
}

let currentEditID;
function initEditToDoButtons() {
  const editButtons = document.querySelectorAll('.editButton');
  editButtons.forEach(editButton => {
    editButton.addEventListener('click', () => {
      currentEditID = event.target.closest('.todo').dataset.id;
      reInputDialog.showModal();
      console.log(state.findToDobyID(currentEditID));

      const targetToDo = state.findToDobyID(currentEditID);
      document.getElementById('tdTitle2').value = targetToDo.title;
      document.getElementById('tdDesc2').value = targetToDo.desc;
      document.getElementById('tdDate2').value = targetToDo.date;
      document.getElementById('tdPriority2').value = targetToDo.priority;
      document.getElementById('tdProject2').value = targetToDo.project;
    });
  });
}

export { initButtons, renderToDos, renderProjects, updateProjectSelector };