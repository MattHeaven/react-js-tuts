import React from 'react'
import PropTypes from 'prop-types'
import './Items.css'

function Items(props) {

  
  // const fruits = [
  //   {id: 1, name: "apple", calories: 95},
  //   {id: 2, name: "orange", calories: 45},
  //   {id: 3, name: "banana", calories: 105},
  //   {id: 4, name: "coconut", calories: 159},
  //   {id: 5, name: "pineapple", calories: 37}];

  //   const anime = [
  //     {id: 1, name: "Jujutsu Kaisen"},
  //     {id: 2, name: "One Piece"},
  //     {id: 3, name: "My Hero Academia"},
  //     {id: 4, name: "Chainsaw Man"},
  //     {id: 5, name: "Naruto"}];

    const Items = props.items;
    const category = props.category;

    const itemsList = Items.map(item => <li key={item.id}> {item.name}{}</li>)

  return (
    <div className='list-card'>
        <h2>{category}</h2>
        <div>
            <ol>{itemsList}</ol>
        </div>
    </div>
  )
}

Items.propTypes = {}

export default Items
