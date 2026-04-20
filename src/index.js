import "./reset.css";
import "./styles.css";

import * as state from './assets/modules/state.js';
import * as storage from './assets/modules/storage.js';
import * as ui from './assets/modules/ui.js'

state.loadLocalToDos();
ui.renderToDos(state.getCurToDos());
ui.initButtons();

console.log(state.getCurToDos());