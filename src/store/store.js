import { applyMiddleware, compose, legacy_createStore as createStore } from "redux"
import { logger, featuring } from "../middlewares";
import { pokemonsReducer } from "../reducers/pokemons"
import thunk from 'redux-thunk'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger),
);

const store = createStore(pokemonsReducer, composedEnhancers);

export { store };
