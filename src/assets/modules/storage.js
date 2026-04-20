function saveToLocalStorage(data, topic) {
  localStorage.setItem(topic, JSON.stringify(data));
}

// topics: 'localToDos' , 'localProjects'

function loadFromLocalStorage(topic) {
  const data = localStorage.getItem(topic);
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
  // return data ? JSON.parse(data) : [];  
}



export {saveToLocalStorage, loadFromLocalStorage};