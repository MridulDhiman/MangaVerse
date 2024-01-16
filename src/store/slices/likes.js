import { createSlice } from "@reduxjs/toolkit";


export const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        count: 0
    },
    reducers: {
        increment (state, action)  {
           state.count++;
        },
        decrement (state)  {
            state.count--;
        }
    }

});


// actions & reducers
export const {actions: {increment, decrement}, reducer: likesReducer} = likesSlice;



