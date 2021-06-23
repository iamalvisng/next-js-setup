import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    selectedPokemon: null,
  },
  reducers: {
    updateSelectedPokemon: (state, { payload }: PayloadAction<any>) => {
      state.selectedPokemon = payload;
    },
  },
});

export const { updateSelectedPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
