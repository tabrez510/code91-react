import React from 'react'

function Item({name, isPacked}) {
        // if (isPacked)
        // return <li>{name} Packed</li>
        // return <li>{name} Not Packed</li>

        // return isPacked ? <li>{name} Packed</li> : <li>{name} Not Packed</li>

        return (
            <li>
                {name} {isPacked && 'Packed'} {!isPacked && 'Not Packed'}
            </li>
        )
}

export default Item