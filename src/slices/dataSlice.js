import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonsApi, getPokemonsImageApi } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
}

const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, {dispatch}) => {
    dispatch(setLoading(true));
    const pokemonRest = await getPokemonsApi();
    const pokemonsDetails = await Promise.all(
      pokemonRest.map((pokemon) => getPokemonsImageApi(pokemon))
    );
    dispatch(getPokemons(pokemonsDetails))
    dispatch(setLoading(false))
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if(currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }

    }
  },
})


export { dataSlice, fetchPokemonsWithDetails };
export const { setFavorite, getPokemons } = dataSlice.actions;
export default dataSlice.reducer;
