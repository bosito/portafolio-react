import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/protafolio'

export const store = configureStore({
    reducer: {
        portafolio: counterSlice.reducer
    }
})