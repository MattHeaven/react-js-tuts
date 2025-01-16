import React from 'react'
import './Student.css'

function Student(props) {
  return (
    <div className='student-card'>
        <img src={props.src} alt="" />
        <p>Name: {props.name}</p>
        <p>Stack: {props.stack}</p>
        <p> {props.name} {props.isMarried ? "is Married" : "is not married" } </p>
    </div>
  )
}

export default Student