/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

export interface BreedProps {
  id: string;
  name: string;
}

interface BreedAction {
  payload: {
    breed: string;
    id: string;
  };
}

const breedSlice = createSlice({
  name: 'breed',
  initialState: {
    breeds: [] as string[],
    ids: [] as string[],
  },
  reducers: {
    push(state, action: BreedAction) {
      state.breeds.push(action.payload.breed.toLowerCase());
      state.ids.push(action.payload.id);
    },
  },
});

export const breedActions = breedSlice.actions;
export default breedSlice;
