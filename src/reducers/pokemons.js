import { GET_POKEMONS, SET_LOADING } from "../action/types";

const initialState = {
  pokemons: [],
  loading: false,
};

const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POKEMONS:
      return {
        ...state, 
        pokemons: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export { pokemonsReducer };
