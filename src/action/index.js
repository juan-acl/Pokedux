import { getPokemonsImageApi } from "../api";
import { GET_POKEMONS, SET_LOADING } from "./types";

const getPokemons = (payload) => ({
  type: GET_POKEMONS,
  payload,
})

const setLoading =(payload) => ({
  type: SET_LOADING,
  payload,
})

const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetails = await Promise.all(
    pokemons.map((pokemon) => getPokemonsImageApi(pokemon))
  );
  dispatch(getPokemons(pokemonsDetails));
}

export { getPokemons, getPokemonsWithDetails, setLoading };
