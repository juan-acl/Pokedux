import { combineReducers } from "redux";
import  dataReducer from "../slices/dataSlice";
import { pokemonsReducer } from "./pokemons";
import { uiReducer } from "../slices/uiSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer
})

export { rootReducer };
