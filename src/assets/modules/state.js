import * as storage from './storage.js';

// buat main array untuk menyimpan semua todo
let toDos = [];


// buat function untuk memodifikasi main array
function addToDo(NewtoDo){
  //return new array of toDos + new one
  const newToDos = [...toDos, NewtoDo];
  storage.saveToLocalStorage(newToDos, 'localToDos'); 
  toDos = newToDos; 
}

function delToDo(toDoId){
  const filtered = toDos.filter(toDo => toDo.id !== toDoId);
  storage.saveToLocalStorage(filtered, 'localToDos');  
  toDos = filtered;
}

// gunakan localstorage untuk menyimpan data di array 
function loadLocalToDos() {
  const loadedtoDos = storage.loadFromLocalStorage('localToDos');  
  toDos = loadedtoDos;
}

function getCurToDos(){
  return toDos;
}

export {addToDo, delToDo, loadLocalToDos, getCurToDos};