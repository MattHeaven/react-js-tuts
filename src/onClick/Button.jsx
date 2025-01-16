import React from 'react'

function Button() {
    
  // let count = 0;

  // const handleClick = (name) => {
  //   if(count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time(s)`)
  //   } else {
  //     console.log(`${name} you can stop clicking me now`)
  //   }

  const handleClick = (e) => {
    e.target.textContent = "Clicked";
  };

  const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

  return (
    <button onClick={(e) => handleClick(e)} type="button">Click Me 😁 </button>
  )
}

export default Button