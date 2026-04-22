import * as state from './state.js';

class toDo {
  constructor(title, desc, date, priority, project) {
    this.id = crypto.randomUUID().slice(0, 4);
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }   
}

function createToDo(title, desc, date, priority, project) {
  const newToDo = new toDo(title, desc, date, priority, project);
  state.addToDo(newToDo);
};

export {toDo, createToDo};