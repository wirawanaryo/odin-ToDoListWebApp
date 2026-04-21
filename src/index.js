import "./reset.css";
import "./styles.css";

import * as state from './assets/modules/state.js';
import * as ui from './assets/modules/ui.js'
import * as project from './assets/modules/project.js'

state.loadLocalToDos();
ui.renderToDos(state.getCurToDos());

project.initProjects();
ui.renderProjects(project.getProjects());

ui.initButtons();




console.log(project.getProjects());