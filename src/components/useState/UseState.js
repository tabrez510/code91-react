import React, { useState } from 'react'

function UseState() {
    // const [count, setCount] = useState(0)
    // const inc = () => {
    //     setCount(count+1)
    // }

    // const dec = () => {
    //     setCount(count-1)
    // }

    const [input, setInput] = useState('')
    const func = (event) => {
        setInput(event.target.value)
    }
  return (
    <>
        {/* <button onClick={dec}>Decrease</button>
       {count}
       <button onClick={inc}>Increase</button> */}
       <input onChange={func} />
       <br />
       {input}
    </>
  )
}

export default UseState