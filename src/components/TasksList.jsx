import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask, updateTask } from '../features/tasks/taskSlice'
import CheckBox from './CheckBox';

function TasksList ()  {

    const tasks = useSelector((state) => state.tasks)
    const handleUpdateTask = (task) =>{
        dispatch(updateTask(task));
    }
    //Disparador de eventos!
    const dispatch= useDispatch();
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
                <CheckBox task={task} updateTask={handleUpdateTask}/>
                <div>
                    <div className='flex justify-between'>
                        <div className='break-words'>
                            <h3  className='max-w-sm text-lg font-bold'>{task.title}</h3>
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
