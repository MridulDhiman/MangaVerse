
import { configureStore } from "@reduxjs/toolkit";

// importing reducers
import { likesReducer } from "./slices/likes";
import { cartReducer } from "./slices/cart";
import { cartDrawerReducer } from "./slices/cartDrawer";




const store = configureStore({
    reducer: {likes: likesReducer, cart: cartReducer, drawer: cartDrawerReducer}
})

export default store;