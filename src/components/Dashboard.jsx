import React from 'react'
import Card from './Card'
import './Dashboard.css'

function Dashboard() {
  return (

    <div>
        <Card type="balance-card" />
        <Card type="profit-loss-card" />
    </div>
  )
}

export default Dashboard