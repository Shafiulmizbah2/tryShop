import React from 'react'
import {useSelector} from 'react-redux';
import Card from './Card'

function Cards() {
    const data = useSelector(state=> state.cart.data);
    return (
        <>
            {
                data.map((card)=>{
                    return (
                        <Card key={card.id} name={card.name} id={card.id}/>
                    )
                })
            }
        </>
    )
}

export default Cards
