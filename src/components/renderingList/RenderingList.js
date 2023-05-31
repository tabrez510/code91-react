import React from 'react'

function RenderingList() {

    // const fruits = ['mango', 'banana', 'apple']
    const persons = [
        {
            id : 1,
            name : 'rinku',
            age : 20,
            skill : 'react'
        },
        {
            id : 2,
            name : 'kavita',
            age : 21,
            skill : 'angular'
        },
        {
            id : 3,
            name : 'tabrez',
            age : 23,
            skill : 'vue'
        }
    ]
    // UUID
  return (
    <>
        {/* {fruits.map((element, index) => <h2 key={index}>{element}</h2>)} */}
        {persons.map((person) => <h2 key={person.id}>I am {person.name} , i am {person.age} years old and i know {person.skill}</h2>)}
    </>
  )
}

export default RenderingList