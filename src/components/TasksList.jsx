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
    <div className='h-fit border-solid border-2 rounded-md border-gray-500 p-2'>
        <div className='flex flex-col mt-7 gap-3'>
        {
        tasks.map(task => (
            <div key={task.id} className="max-w-xl bg-cajita p-4 rounded-md  ">
                    <div className='w-full h-full'>
                    <input type='checkbox' className='float-left h-14 mr-3 w-5'/>
                    </div>
                    

                <div>
                    <div className='flex justify-between'>
                        <div className='break-words'>
                            <h3 className='max-w-sm text-lg font-bold'>{task.title}</h3>
                        </div>
            
                        <div className='flex gap-x-2'>
                            <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center">Editar</Link>
                            <button className="bg-red-600 px-2 py-1 text-xs rounded-md self-center" onClick={()=> handleDelete(task.id)}>Delete</button>
                        </div>
                    </div>
                    <div className='break-words'>
                        <p className='max-w-sm text-base text-slate-400'>{task.description}</p>
                    </div>
                </div>
             
                
                
            </div>
        ))}
        </div>
    </div>
   )
}
export default TasksList
//grid grid-cols-3