import {
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import { studioReducer } from "./reducers/studio.reducer";
import { userReducer } from "./reducers/user.reducer";

// function rootReducer() {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({
  studioModule: studioReducer,
  userModule: userReducer,
});

export const store = createStore(rootReducer, composeEnhancers());

// for debugging/ make store global
window.gStore = store;
