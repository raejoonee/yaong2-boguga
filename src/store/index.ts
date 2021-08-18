import { configureStore } from '@reduxjs/toolkit';
import breedSlice from '../features/breed/breedSlice';
import loaderSlice from '../features/loader/loaderSlice';

const store = configureStore({
  reducer: {
    breed: breedSlice.reducer,
    loader: loaderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
