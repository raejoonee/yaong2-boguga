import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {},
  reducers: {
    method(state, actions) {
      state.counter++;
    },
  },
});

export const imageActions = imageSlice.actions;
export default imageSlie;
