import { configureStore } from '@reduxjs/toolkit';
import breedSlice from '../features/breed/breedSlice';
import imageSlice from '../features/image/imageSlice';
import informationSlice from '../features/information/informationSlice';
import loaderSlice from '../features/loader/loaderSlice';

const store = configureStore({
  reducer: {
    breed: breedSlice.reducer,
    information: informationSlice.reducer,
    image: imageSlice.reducer,
    loader: loaderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
