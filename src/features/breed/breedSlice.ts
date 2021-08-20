import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/TheCatAPI';

interface Breed {
  id: string;
  name: string;
}

export const fetchBreeds = createAsyncThunk(`cats/fetchBreeds`, async () => {
  const response = await api.getBreeds();
  return response;
});

const breedSlice = createSlice({
  name: 'breed',
  initialState: {
    breedInfo: [] as Breed[],
    initialLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBreeds.fulfilled, (state, action) => {
      action.payload.forEach(({ id, name }: Breed) => {
        state.breedInfo.push({ id, name });
      });
      state.initialLoading = false;
    });
  },
});

export const breedActions = breedSlice.actions;
export default breedSlice;

// /* eslint-disable camelcase */
// import { createSlice } from '@reduxjs/toolkit';

// export interface BreedProps {
//   id: string;
//   name: string;
// }

// interface BreedAction {
//   payload: {
//     breed: string;
//     id: string;
//   };
// }

// const breedSlice = createSlice({
//   name: 'breed',
//   initialState: {
//     breeds: [] as string[],
//     ids: [] as string[],
//   },
//   reducers: {
//     push(state, action: BreedAction) {
//       state.breeds.push(action.payload.breed.toLowerCase());
//       state.ids.push(action.payload.id);
//     },
//   },
// });

// export const breedActions = breedSlice.actions;
// export default breedSlice;
