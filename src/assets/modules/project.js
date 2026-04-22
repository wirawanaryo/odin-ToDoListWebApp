import * as storage from './storage.js';
let projects = [];

class project {
  constructor(name, color) {  
    this.id = crypto.randomUUID().slice(0, 4);  
    this.name = name;
    this.color= color;    
    this.protected = false;
  }

  changeToDefault(){
    this.protected = true;
  }
}

function getProjects() {
  return projects;
}

function addProject(newProject){  
  const newProjects = [...projects, newProject];
  storage.saveToLocalStorage(newProjects, 'localProjects'); 
  projects = newProjects; 
}

function delProject(projectID){
  const filtered = projects.filter(project => project.id !== projectID);
  storage.saveToLocalStorage(filtered, 'localProjects');  
  projects = filtered;
}
 
function initProjects() {
  const loadedProjects = storage.loadFromLocalStorage('localProjects');  
  
  if (loadedProjects.length === 0) {
    const home = new project('Home', 'blue')
    home.changeToDefault();
    addProject(home);
  } else {
    projects = loadedProjects;
  }
};

export {project, getProjects, addProject, delProject, initProjects};