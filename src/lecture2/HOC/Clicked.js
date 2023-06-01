import React from 'react'
import HOC from './HOC'

function Clicked({count, inc}) {
  return (
    <div>
        <button onClick={inc}>Clicked {count} times</button>
    </div>
  )
}

export default HOC(Clicked)