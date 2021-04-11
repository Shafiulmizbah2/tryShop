import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useSelector,useDispatch} from 'react-redux'
import {TOGGLE_CART,REMOVE_ITEM} from './components/card/CartSlice'

function Nav() {
    const dispatch = useDispatch();
    let cart = useSelector(state => state.cart.cart);
    let {isCartDetailOpen} = useSelector(state => state.cart);
    console.log(cart);
    const cartLength = cart.length;
    return (
        <nav className="nav">
            <div className="container nav-cont">
                <div className="logo">
                    <p>TryShop</p>
                </div>

                <div className="addto">
                    <AiOutlineShoppingCart className="icon" onClick={()=> dispatch(TOGGLE_CART())}/>
                    <span>{cartLength}</span>

                    <ul className={`cart-items  ${isCartDetailOpen ? "" : "d-none"}`}>

                        {
                            cart.map((item)=>{
                                    const {id,name,price} =item; 
                                return(
                                    <>
                                        <li key={`abc${id}`} className="cart-items-item">
                                            <div className="img-box">
                                                <img src="#" alt="product name"/>
                                            </div>
                                            <div className="cart-details">
                                                <h1>{name}</h1>
                                                <p> &#2547; {price}</p>
                                                <button className="btn-remove" onClick={()=> dispatch(REMOVE_ITEM({id,arr:cart}))}>Remove</button>
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }
            
                    </ul>
                </div>

                
            </div>
        </nav>
    )
}

export default Nav
