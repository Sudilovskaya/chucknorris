import { configureStore } from '@reduxjs/toolkit'
import factsReducer from './facts/factsSlice'

export const store = configureStore({
  reducer: {
    facts: factsReducer,
  }
})