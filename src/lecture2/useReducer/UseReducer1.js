import React, {useReducer} from 'react'


// useReducer state management 
//useReducer(reducer, initialState)
// returns two values, [count, dispatch]
const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
      case 'increament' : 
       return state +1;
      case 'decreament' :
        return state -1;
      case 'reset' :
        return initialState;
      default :
        return state 
    }
}
function UseReducer1() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={() => {dispatch('increament')}}>increase</button>
      <button onClick={() => {dispatch('decreament')}}>decrease</button>
      <button onClick={() => {dispatch('reset')}}>reset</button>
    </div>
  )
}

export default UseReducer1