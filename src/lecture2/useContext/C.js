import React, {useContext} from 'react'
import { firstName, lastName } from '../../App'

function C() {
    const fName = useContext(firstName)
    const lName = useContext(lastName)
  return (
    <div>
        <h1>{fName} {lName}</h1>
    </div>
  )
}

export default C