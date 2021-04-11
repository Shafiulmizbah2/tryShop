import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        data : [
            {id:1, name: "Remote",price:100},
            {id:2, name: "Mobile",price:10000},
            {id:3, name: "Tv",price:5000},
            {id:4, name: "Mask",price:5},
            {id:5, name: "Fan",price:1500},
            {id:6, name: "Head-Phone",price:180}
        ],
        cart:[],
        isCartDetailOpen:false,
    },
    reducers:{
        ADD_TO_CART:(state,{payload})=>{
            /* console.log(`${payload} is clicked`); */
            state.cart.push(state.data[payload-1]);
        },
        TOGGLE_CART:(state)=>{
            state.isCartDetailOpen = !state.isCartDetailOpen;
            console.log(state.isCartDetailOpen);
        },
        REMOVE_ITEM:(state,{payload})=>{
            console.log(payload);
            const {id} = payload;
            const arr = payload.arr;
            /* console.log(id,arr); */
            const newCart = arr.filter((item)=> item.id!==id);
            state.cart=newCart;
            console.log(state.cart)
        },
    }
})

export const {ADD_TO_CART,TOGGLE_CART,REMOVE_ITEM} =cartSlice.actions;
export default cartSlice.reducer;