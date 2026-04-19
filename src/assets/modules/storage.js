function saveToLocalStorage(data) {
  localStorage.setItem('localToDos', JSON.stringify(data));
}

function loadFromLocalStorage() {
  const data = localStorage.getItem('localToDos');
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
  // return data ? JSON.parse(data) : [];  
}

export {saveToLocalStorage, loadFromLocalStorage};