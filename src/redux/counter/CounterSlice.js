import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name:"mizbah"
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value > 0)
      {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      /* console.log(action);
      console.log(action.payload.name);
      console.log(action.payload.value); */
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;