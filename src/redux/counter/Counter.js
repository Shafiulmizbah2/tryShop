import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './CounterSlice'


export function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log("count : " + count);
  const dispatch = useDispatch();
  const obj = {
      value:2,
      name:"shafiul",
  };
  return (
    <div>
        <button onClick={() => dispatch(increment())} > + </button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())} > - </button>
        <button onClick={() => dispatch(incrementByAmount(obj.value))} > inc by 2 </button>
      </div>
  )
}