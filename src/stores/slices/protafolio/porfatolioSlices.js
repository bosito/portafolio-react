import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    }
})

export const { increment } = counterSlice.actions