import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MyTodoList() {
  return (
    <div className='flex h-screen items-center justify-center flex-col bg-gray-900'>
        <h1 className='font-medium text-6xl text-white mb-4'>My To-Do List</h1>
        <div className='gap-1'>
            <div className='flex'>
                <input type="text" name="" id="input" placeholder='Input new task...' className='text-wrap w-full rounded-l-md text-xl px-4 py-4' />
                <button className='bg-[#145a0d] cursor-pointer px-4 text-white rounded-r-md'>Add</button>
            </div>
            <div>
                <ul className='flex flex-col gap-4'>
                    <li className='flex bg-white px-4 rounded-md'>
                        <p className='flex-grow py-4'>Task Name</p>
                        <button className='bg-[#ac0808] text-white px-4 py-2'>Del</button>
                        <button className='px-4 py-2 bg-[#0c24c7] text-white'>Up</button>
                        <button className='px-4 py-2 bg-'>Down</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MyTodoList