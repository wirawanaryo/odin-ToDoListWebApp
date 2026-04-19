class toDo {
  constructor(title, desc, priority) {
    this.id = crypto.randomUUID().slice(0, 4);
    this.title = title;
    this.desc = desc;
    // this.date = date;
    this.priority = priority;
    // this.project = project;
  }   
}

export {toDo};