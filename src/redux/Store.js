import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/CounterSlice';
import CartSlice from '../components/card/CartSlice';

export default configureStore({
  reducer: {
    counter:counterSlice,
    cart:CartSlice
  },
})

