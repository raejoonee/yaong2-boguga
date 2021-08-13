import { configureStore } from '@reduxjs/toolkit';
import historySlice from './history';
import breedSlice from './breed';
import imageSlice from './image';

const store = configureStore({
  reducer: {
    breed: breedSlice.reducer,
    history: historySlice.reducer,
    image: imageSlice.reducer,
  },
});

export default store;
