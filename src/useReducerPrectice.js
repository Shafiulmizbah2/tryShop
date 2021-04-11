import React,{useReducer} from 'react'

const reducer = (state,action)=>{
  
  if(action.type === 'inc'){
    return{
      count: state.count+1,
    }
  }

  if(action.type === 'dec'){
    if(state.count >= 2 ){
      return{
        count: state.count-1,
      }
    }
  }
    return state;
}

const initailState = {
  count: 0,
}

function useReducerPrectice() {
    const [state,dispatch] = useReducer(reducer,initailState);

  return (
    <div>
      <button onClick={()=> dispatch({type : 'dec'})}>-</button>
      <span>{state.count}</span>
      <button onClick={()=> dispatch({type : 'inc'})}>+</button>
    </div>
  );
}

export default useReducerPrectice;
