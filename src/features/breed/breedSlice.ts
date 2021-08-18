/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

export interface BreedProps {
  adaptibility: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  image: { id: string; width: number; height: number; url: string };
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: {
    imperial: string;
    metric: string;
  };
}

interface BreedAction {
  payload: string;
}

const breedSlice = createSlice({
  name: 'breed',
  initialState: {
    breeds: [] as string[],
  },
  reducers: {
    push(state, action: BreedAction) {
      state.breeds.push(action.payload);
    },
  },
});

export const breedActions = breedSlice.actions;
export default breedSlice;
