import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'portafolio',
    initialState: INITIAL_STATE,
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    }
})

export const { increment } = counterSlice.actions