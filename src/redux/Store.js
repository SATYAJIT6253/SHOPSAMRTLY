import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cartSlice'

// store global state of your project
export const store = configureStore({
  reducer: {
    cart : cartSlice.reducer,
  },
})