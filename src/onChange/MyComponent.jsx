import React, {useState} from 'react'


function MyComponent() {

    const [name, setName] = useState("Guest");
    const [ageType, setAgeType] = useState('Underage');

    function handleNameChange(event) {
        setName(event.target.value);
    }


    function checkAge(event) {
      ((event.target.value) < 18) ? setAgeType("Definitely Underage") : setAgeType("You're Good Bro")
    }



  return (
    <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>


        <input type="number" name="" id="" onChange={checkAge}/>
        <p>Status: {ageType}</p>
    </div>
  )
};

export default MyComponent