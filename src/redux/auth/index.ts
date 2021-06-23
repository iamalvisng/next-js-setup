import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, { payload }: PayloadAction<any>) => {
      state.user = payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
