import React from 'react'
import Item from "./Item"

function PackingList() {


  return (
    <>
      <ul>
        <Item name="Shoes" isPacked = {true}/>
        <Item name="Saree" isPacked = {false}/>
        <Item name="Jeans" isPacked = {true}/>
        <Item name="T-shirts" isPacked = {true}/>
      </ul>
    </>
  )
}

export default PackingList