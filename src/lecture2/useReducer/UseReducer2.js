import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0
}
const reducer = (state, action) => {
    switch(action.type) {
      case 'increament' : 
       return {firstCounter : state.firstCounter + action.value};
      case 'decreament' :
        return {firstCounter : state.firstCounter - action.value};
      case 'reset' :
        return initialState;
      default :
        return state 
    }
}
function UseReducer2() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>count is {count.firstCounter}</h1>
      <button onClick={() => {dispatch({type :'increament', value : 5})}}>increase</button>
      <button onClick={() => {dispatch({type: 'decreament', value : 5})}}>decrease</button>
      <button onClick={() => {dispatch({type :'reset'})}}>reset</button>
    </div>
  )
}

export default UseReducer2