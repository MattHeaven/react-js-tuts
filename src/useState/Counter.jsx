import React, {useState} from 'react';
import './counter.css'

function Counter() {
    let [count, setCount] = useState(0);

    const countDecrement = () => {
        setCount(count--)
    };

    const reset = () => {
        setCount(0);
    }

    const countIncrement = () => {
        setCount(count++)
    };
 
  return (
    <div>
        <p>{count}</p>
        <div>
            <button onClick={countDecrement} >Counter - 1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={countIncrement}>Counter + 1</button>
        </div>
    </div>
  )
}

export default Counter