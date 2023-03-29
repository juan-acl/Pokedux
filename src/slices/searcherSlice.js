import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searcherPokemon: '',

}

const searcherSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    setSearcherPokemon: (state, action) => {
      const searchPoke = [];
      if()
      state.searcherPokemon = action.payload;
      }
    }
  })

export const { setSearcherPokemon } = searcherSlice.actions;
const searcherReducer = searcherSlice.reducer;

export { searcherSlice, searcherReducer };
