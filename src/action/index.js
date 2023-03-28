import { getPokemonsImageApi } from "../api";
import { GET_POKEMONS, SET_FAVORITE, SET_LOADING } from "./types";

const getPokemons = (payload) => ({
  type: GET_POKEMONS,
  payload,
})

const setLoading =(payload) => ({
  type: SET_LOADING,
  payload,
})

const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
});

const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetails = await Promise.all(
    pokemons.map((pokemon) => getPokemonsImageApi(pokemon))
  );
  dispatch(getPokemons(pokemonsDetails));
}

export { getPokemons, getPokemonsWithDetails, setLoading, setFavorite };
