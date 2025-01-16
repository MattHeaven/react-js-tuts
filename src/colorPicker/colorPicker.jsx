import React, { useState } from 'react'
import './colorPicker.css'

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

  return (
    
    <div className='color-picker-container' style={{backgroundColor: color}}>
        <h1>
            Color Picker
        </h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected color: {color}</p>
        </div>
        <label htmlFor="">Select Color</label>
        <input type="color"  onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker