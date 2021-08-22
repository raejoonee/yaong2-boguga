/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    initialLoading: true,
    loading: false,
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    finishLoading(state) {
      state.initialLoading = false;
      state.loading = false;
    },
  },
});

export const loaderActions = loaderSlice.actions;
export default loaderSlice;
