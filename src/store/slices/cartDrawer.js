import { createSlice } from "@reduxjs/toolkit";


const cartDrawerSlice = createSlice({
name: "cartDrawer",
initialState: {
    flag: false
},
reducers: {
    openDrawer: (state) => {
        state.flag = true;
    },
    closeDrawer: (state) => {
        state.flag = false;
    }
}
});


export const  {actions: {openDrawer, closeDrawer}, reducer: cartDrawerReducer} = cartDrawerSlice;