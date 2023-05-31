import React from 'react'

function Child({func}) {

    const func1 = () => {
        console.log('child called')
    }
  return (
    <>
        {/* <button onClick= {() => {func(3,4)}}>click</button> */}
        <button onClick= {() => {func(func1)}}>click</button>
    </>
  )
}

export default Child