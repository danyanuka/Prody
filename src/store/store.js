import { legacy_createStore as createStore } from "redux";
import { studioReducer } from "./reducers/studio.reducer";

// function rootReducer() {}

export const store = createStore(studioReducer);

// for debugging/ make store global
window.gStore = store;
