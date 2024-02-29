import { createSlice } from '@reduxjs/toolkit'

const factsSlice = createSlice({
  name: 'facts',
  initialState: {
    facts: []
  },
  reducers: {
    startLoading: state => {
      state.isLoading = true
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false
    },
    factsSuccess: (state, action) => {
      state.facts = action.payload
      state.isLoading = false
    },
    clearFacts: (state) => {
      state.facts = []
    }
  },
});

export const {
  factsSuccess,
  startLoading,
  hasError,
  clearFacts,
} = factsSlice.actions

export default factsSlice.reducer