/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const informationSlice = createSlice({
  name: 'description',
  initialState: {
    loaded: false,
    information: {
      name: '',
      description: '',
      origin: '',
      country_code: '',
      life_span: '',
      weight: {
        metric: '',
      },
      affection_level: 0,
      health_issues: 0,
      intelligence: 0,
      adaptability: 0,
      energy_level: 0,
      social_needs: 0,
      dog_friendly: 0,
      child_friendly: 0,
      stranger_friendly: 0,
      shedding_level: 0,
      experimental: 0,
      vocalisation: 0,
    },
  },
  reducers: {
    update(state, action) {
      state.information = action.payload;
      state.loaded = true;
    },
  },
});

export const informationActions = informationSlice.actions;
export default informationSlice;
