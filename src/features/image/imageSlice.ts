import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [] as string[],
  },
  reducers: {
    init(state) {
      state.images = [];
    },
    push(state, action) {
      state.images.push(action.payload);
    },
  },
});

export const imageActions = imageSlice.actions;
export default imageSlice;
