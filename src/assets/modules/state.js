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

function delAllTodoByProperty(property, condition) {
  const filtered = toDos.filter(toDo => toDo[property] != condition);
  storage.saveToLocalStorage(filtered, 'localToDos');
  toDos = filtered;  
}

function findToDobyID(id) {
  const targetToDo = toDos.find(todo => todo.id === id);
  return targetToDo;
}

function modifyToDo(id, title, desc, date, priority, project) {
  const targetToDo = toDos.find(todo => todo.id === id);

  const newTitle = title;
  const newDesc = desc;
  const newDate = date;
  const newPriority = priority;
  const newProject = project;

  targetToDo.title = newTitle;
  targetToDo.desc = newDesc;
  targetToDo.date = newDate;
  targetToDo.priority = newPriority;
  targetToDo.project = newProject;  

  storage.saveToLocalStorage(toDos, 'localToDos');  
}

function modifyDoneCheck(id, status) {
  const targetToDo = toDos.find(todo => todo.id === id);
  targetToDo.done = status;
  storage.saveToLocalStorage(toDos, 'localToDos');  
}
export { addToDo, delToDo, loadLocalToDos, getCurToDos, filterTodos, modifyToDo, delAllTodoByProperty, findToDobyID, modifyDoneCheck};