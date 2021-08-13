import { createSlice } from '@reduxjs/toolkit';

const breedSlice = createSlice({
  name: 'breed',
  initialState: {},
  reducers: {
    method(state, actions) {
      state.counter++;
    },
  },
});

export const breedActions = breedSlice.actions;
export default breedSlice;
