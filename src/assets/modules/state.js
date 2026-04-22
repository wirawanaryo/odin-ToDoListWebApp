import * as storage from './storage.js';
import * as todo from './todo.js';

// buat main array untuk menyimpan semua todo
let toDos = [];


// buat function untuk memodifikasi main array
function addToDo(NewtoDo) {
  //return new array of toDos + new one
  const newToDos = [...toDos, NewtoDo];
  storage.saveToLocalStorage(newToDos, 'localToDos');
  toDos = newToDos;
}

function delToDo(toDoId) {
  const filtered = toDos.filter(toDo => toDo.id !== toDoId);
  storage.saveToLocalStorage(filtered, 'localToDos');
  toDos = filtered;
}

// gunakan localstorage untuk menyimpan data di array 
function loadLocalToDos() {
  const loadedtoDos = storage.loadFromLocalStorage('localToDos');
  toDos = loadedtoDos;
}

function getCurToDos() {
  return toDos;
}

function filterTodos(property, condition) {
  const filtered = toDos.filter(toDo => toDo[property] === condition);
  return filtered;
}

function modifyToDo(id, title, desc, date, priority, project) {
  const targetToDo = toDos.find(todo => todo.id === id);

  const newTitle = (title === '') ? targetToDo.title : title;
  const newDesc = (desc === '') ? targetToDo.desc : desc;
  const newDate = (date === '') ? targetToDo.date : date;
  const newPriority = priority;
  const newProject = project;

  targetToDo.changeTitle(newTitle);
  targetToDo.changeDesc(newDesc);
  targetToDo.changeDate(newDate);
  targetToDo.changePriority(newPriority);
  targetToDo.changeProject(newProject);  

  storage.saveToLocalStorage(toDos, 'localToDos');
}
export { addToDo, delToDo, loadLocalToDos, getCurToDos, filterTodos, modifyToDo };