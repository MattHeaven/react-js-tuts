import React, {useState} from 'react';
import './MyComponent.css'

function MyComponent() {

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford",
                                    model: "Mustang"
    });

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleYearChange(event) {
        setCar(prevYear => ({...prevYear, year: event.target.value}))
    }

    function handleMakeChange(event) {
        setCar(prevMake => ({...prevMake, make: event.target.value}))
    }

    function handleModelChange(event) {
        setCar(prevModel => ({...prevModel, model: event.target.value}))
    }

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;

        if (newFood !== '') {
            document.getElementById("foodInput").value = "";
            setFoods(prevFoods => ([...prevFoods, newFood]));
        } else {
            //error
        }
        
    }

    function handleDelFood(index) {
        setFoods(foods.filter((_ , i) => i != index));
    }

  return (
    <div>
        <p>My Favourite Car is {car.make} {car.model} from {car.year}</p>

        <br />
        <input type="text" value={car.make} onChange={handleMakeChange}/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
        <input type="number" value={car.year} onChange={handleYearChange}/>

        <br /><br />
        <h2>Foods Below</h2>
        <ul>
            {foods.map((food, index) => <li key={index}>{food} <button  onClick={() => handleDelFood(index)}>-</button> </li>)}
        </ul>
        <input type="text" placeholder='Enter food name' id='foodInput' className='error'/>
        <div className='buttons'>
            <button onClick={handleAddFood}>Add</button>
            <button>Del</button>
        </div>
    </div>
  )
}

export default MyComponent