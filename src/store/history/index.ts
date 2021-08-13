/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface historyAction {
  payload: string;
  type: string;
}

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [] as string[],
  },
  reducers: {
    add(state, action: historyAction) {
      state.history.push(action.payload);
    },
    remove(state, action: historyAction) {
      state.history = state.history.filter((e) => e !== action.payload);
    },
  },
});

export const historyActions = historySlice.actions;
export default historySlice;
