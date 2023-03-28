import { applyMiddleware, compose, legacy_createStore as createStore } from "redux"
import { logger, featuring } from "../middlewares";
import thunk from 'redux-thunk'
import { rootReducer } from "../reducers/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger),
);

const store = createStore(rootReducer, composedEnhancers);

export { store };
