import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/tasks/taskSlice'


function TasksList ()  {
   const tasks = useSelector(state => state.tasks)
   //Disparador de eventos!
   const dispatch= useDispatch()
   //Eliminador
   const handleDelete = (id)=>{
    dispatch(deleteTask(id))
   }
   return (
    <div className='w-4/6 '>
        <header className='flex justify-between items-center py-4'>
            <h1 className='my-[32px] mx-0 text-3xl font-bold text-gray-200 '>Tareas totales : {tasks.length}</h1>
            <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-md text-lg shadow-sm'>
                Crear tarea
            </Link>
        </header>

        <div className='flex flex-col xl:grid grid-cols-3 h-[50vh] gap-3'>
        {
        tasks.map(task => (
            <div key={task.id} className="bg-cajita p-4 rounded-md W-screen">
                <header className='flex justify-between'>
                    <h3 className='text-xl font-bold'>{task.title}</h3>
                    <div className='flex gap-x-2'>
                        <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center">Editar</Link>
                        <button className='bg-red-500 px-2 py-1 text-xs rounded-md' onClick={()=> handleDelete(task.id)}>Delete</button>
                    </div>
                </header>
                <p className='text-base text-slate-400'>{task.description}</p>
            </div>
        ))}
        </div>
    </div>
   )
}
export default TasksList
//grid grid-cols-3