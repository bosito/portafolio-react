import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/protafolio';
import { messagesSlice } from './slices/messages';

export const store = configureStore({
    reducer: {
        portafolio: counterSlice.reducer,
        messages: messagesSlice.reducer
    }
})