import { configureStore } from '@reduxjs/toolkit'
import modeReducer from '../slice/slice'

export const store = configureStore({
  reducer: {
    mode : modeReducer,
  },
})