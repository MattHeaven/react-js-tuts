import React from 'react'

function List() {

//   const fruits = ["apple", 'orange', 'banana', 'coconut', 'pineapple'];



  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

  return (
    <ol>{listItems}</ol>
  )
}

export default List