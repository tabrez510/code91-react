import React, {useReducer} from 'react'

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
function UseReducer3() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={() => {dispatch('increament')}}>increase</button>
      <button onClick={() => {dispatch('decreament')}}>decrease</button>
      <button onClick={() => {dispatch('reset')}}>reset</button>

      <h1>secondcount is {countTwo}</h1>
      <button onClick={() => {dispatchTwo('increament')}}>increase</button>
      <button onClick={() => {dispatchTwo('decreament')}}>decrease</button>
      <button onClick={() => {dispatchTwo('reset')}}>reset</button>
    </div>
  )


  // useState - primitive
  // useReducer - Non primitive
}

export default UseReducer3