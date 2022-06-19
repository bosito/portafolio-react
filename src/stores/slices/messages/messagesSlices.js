import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    mesages_list: [],
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: INITIAL_STATE,
    reducers: {
        getMessageList: async (state, action) => {
            
        }
    }
})

export const { getMessageList } = messagesSlice.actions