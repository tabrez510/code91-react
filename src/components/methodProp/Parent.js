import React from 'react'
import Child from './Child'

function Parent() {

    // const func = (a,b) => {
    //     console.log(a+b)
    // }

    const func = (callback) => {
        callback();
    }
  return (
    <>
        <Child func={func}/>
    </>
  )
}

export default Parent