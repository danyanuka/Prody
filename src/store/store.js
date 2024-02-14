import { legacy_createStore as createStore, compose } from "redux";
import { studioReducer } from "./reducers/studio.reducer";

// function rootReducer() {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(studioReducer, composeEnhancers());

// for debugging/ make store global
window.gStore = store;
