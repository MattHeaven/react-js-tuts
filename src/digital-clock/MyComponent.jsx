import React, { useEffect, useState } from 'react'

function MyComponent() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }


    function padZero(num) {
        return num.toString().padStart(2, '0');
    }
  return (
    <>
        <div className='h-screen w-full flex justify-center items-center bg-[url(src/digital-clock/cyberpunk.jpg)] bg-cover bg-center bg-blend-multiply'>
            <div className='bg-white/30 backdrop-blur-md p-10 rounded-lg'>
                <h1 className='text-8xl font-semibold text-center text-white font-family-monospace'>
                    {formatTime()}
                </h1>
            </div>
        </div>
    </>
  )
}

export default MyComponent