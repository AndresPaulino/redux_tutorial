import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const coutnerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = coutnerSlice.actions;

export default coutnerSlice.reducer;
