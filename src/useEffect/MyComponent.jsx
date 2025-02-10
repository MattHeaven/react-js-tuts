import React, {useState, useEffect} from 'react'
import { useFormState } from 'react-dom';

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event listener added');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event listener removed');
        }
    }, [])

    useEffect(() => {
        document.title = `Width: ${width} x Height: ${height}`;
    })

    
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen text-6xl'>

        <p>Width: {width}</p>
        <p>Height: {height}</p>

    </div>

    </>
  )
}

export default MyComponent