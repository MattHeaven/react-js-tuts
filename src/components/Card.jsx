import React from 'react'
import './Card.css'

function Card(props) {

    if (props.type == "balance-card") {
        return (
            <div className='card'>
                <p>Your Account Balance:</p>
                <p className='amount'>$39,983.00</p>
            </div>
        )
    } else
        if (props.type == "profit-loss-card") {
            return (
                <div className='card profit' >
                <p>Profit/Loss</p>
                <p className='amount'>+$4,900.00</p>
            </div>
            )
        }

  
}

export default Card