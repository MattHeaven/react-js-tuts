import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MyTodoList() {
    const [tasks, setTasks] = useState(["Walk the dog", "Buy groceries", "Clean the house"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


  return (
    <div className='flex h-screen items-center justify-center flex-col bg-gray-900'>
        <h1 className='font-medium text-6xl text-white mb-4'>My To-Do List</h1>
        <div className='gap-1'>
            <div className='flex mb-4'>
                <input value={newTask} type="text" name="" id="input" onChange={handleInputChange} placeholder='Input new task...' className='text-wrap w-full rounded-l-md text-xl px-4 py-4 24px ' />
                <button onClick={addTask} className='bg-[#145a0d] cursor-pointer px-4 text-white rounded-r-md '>Add</button>
            </div>
            <div>
                <ul className='flex flex-col gap-4'>
                    {tasks.map((task, index) => 
                    <li key={index} className='flex bg-white px-4 rounded-md'>
                        <p className='flex-grow py-4 flex-1 flex-wrap'>{task}</p>
                        <button onClick={() => deleteTask(index)} className='bg-[#ac0808] text-white px-4 py-2'>Del</button>
                        <button onClick={() => moveTaskUp(index)} className='px-4 py-2 bg-[#0c24c7] text-white'>Up</button>
                        <button onClick={() => moveTaskDown(index)} className='px-4 py-2 bg-'>Down</button>
                     </li>)}
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MyTodoList