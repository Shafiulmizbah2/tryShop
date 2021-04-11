import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {ADD_TO_CART} from './CartSlice';

function Card({name,id}) {
    const dispatch = useDispatch();
    /* const cart = useSelector(state=> state.cart.cart);
    console.log(cart.length); */


    return (
        <div className="card">
            <h1>{name}</h1>
            <button className="btn" onClick={()=> dispatch(ADD_TO_CART(id))}>Add to card</button>
        </div>
    )
}

export default Card
