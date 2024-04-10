import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const initialState={
    cart:[],
    wishlist:[],
    user:null
}

export const cartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action) =>{
            const product = action.payload;
            state.cart.push(product);
            // console.log(state.cart[0].product.name);
           toast.success("Product added to basket",{
            position:"bottom-right"
           });

        },
        removeFromCart:(state, action) => {
            const index = state.cart.indexOf(action.payload);
            state.cart.splice(index, 1);
            console.log(state.cart);
           toast.update("Product removed from basket",{
            position:"bottom-right"
           });
        },
        addToWish:(state, action) =>{
            const product = action.payload;
            state.wishlist.push(product);
            console.log(state.wishlist);
        toast.success("Product added to Wishlist!!",{
            position:"bottom-right"
           });
        },
        removeFromWish:(state, action) => {
            const index = state.cart.indexOf(action.payload);
            state.wishlist.splice(index, 1);
            console.log(state.wishlist);
           toast.update("Product removed from Wishlist",{
            position:"bottom-right"
           });
        },
        setUser:(state, action) =>{
            const user= action.payload;
            state.user= user;
            console.log(state.user);
        },
        removeUser:(state, action) =>{
            state.user= null
            console.log(state.user);

        }
    }

});

export const {addToCart, removeFromCart, addToWish, removeFromWish, setUser,removeUser} = cartSlice.actions;

export default cartSlice.reducer; //This exports the reducer created in this file wherever we need it by any name.