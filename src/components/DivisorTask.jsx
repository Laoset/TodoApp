import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const DivisorTask = () => {
    const tasks    = useSelector((state)=> state.tasks)
  return (
    <div className='flex justify-between items-center mt-4 py-10'>
        <h1 className='text-3xl font-bold text-gray-200 '>Tareas totales : {tasks.length}</h1>
        <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-md text-lg shadow-sm'>
        Crear tarea
        </Link>
    </div>
  )
}

export default DivisorTask