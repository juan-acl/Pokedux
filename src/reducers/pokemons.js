import { fromJS } from "immutable";
import { GET_POKEMONS, SET_FAVORITE, SET_LOADING } from "../action/types";

const initialState = fromJS({
  pokemons: [],
});

const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POKEMONS:
      //return 
      //{...state, pokemons: action.payload};
  return  state.setIn(['pokemons'], fromJS(action.payload))

    case SET_FAVORITE:
      
        //const newPOkemonList = [...state.pokemons];
        //const currentPokemon = newPOkemonList.findIndex((pokemon) => {
        //return pokemon.id === action.payload.pokemonId;
      //});
      //if(currentPokemon<0) {
     //return state
      //  }
       // newPOkemonList[currentPokemon].favorite = !newPOkemonList[currentPokemon].favorite
     // return {...state, pokemons: newPOkemonList};
      
    const currentPokemon =state.get('pokemons').findIndex((pokemon) => {
        return pokemon.get('id') === action.payload.pokemonId
      });
      
      if(currentPokemon<0) {
        return state
      }
      //const isFavorite = state.get('pokemons').get(currentPokemon).get('favorite');
      const isFavorite = state.getIn(['pokemons', currentPokemon, 'favorite',])

      return state.setIn(['pokemons', currentPokemon, 'favorite'], !isFavorite)
    default:
      return state
  }
}

export { pokemonsReducer };
