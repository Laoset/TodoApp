import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/tasks/taskSlice"
//Para cambiar de pagina!
import { useNavigate, useParams } from "react-router-dom"
//ID UNICOS
import {v4 as uuid} from "uuid"

function TaskForm ()  {
    //Creo mi estado unico de componente
    const [task, setTask]= useState({
        title: '',
        description: ''
    })
    //Con este Hook llamo a una funcion, no leo datos, dispara lo que tenga en Slice!
    const dispatch = useDispatch();
    //Instanciamos la navegacion
    const navigate = useNavigate();
    //Hook para verificar y utilizar lo escrito en parametros de web, id pej
    const params   = useParams();
    //Selecciono mis tareas guardadas con el Selector
    const tasks    = useSelector((state)=> state.tasks)
    // Esto me guarda los datos obtenidos en el estado
    const handleChange= (evento)=>{
        //Me copio todos los elementos que haiga en task
        setTask({
            ...task,
            //Guardare en mi NAME lo que tenga en mi valor osea lo escrito
            [evento.target.name]: evento.target.value
        })
    }
    //Esto me guarda lo que tengo en mis input y textare al presionar el boton
    const handleSubmit =(evento)=>{
        //Esto evita que se refresque la pagina
        evento.preventDefault()
        //Si existe esto, estoy actualizando
        if(params.id){
            dispatch(updateTask(task))
        }else{
            //Quiero ver la ejecucion de mi addtask
            dispatch(addTask({
                //Me traigo todo el task y le agrego la propopiedad ID
                ...task,
                id:uuid()
            }))
        }
        navigate('/')
    };

    useEffect(()=>{
        if(params.id){
            setTask(tasks.find(task=> task.id === params.id))
        }
    },[]);

  return (
    <form onSubmit={handleSubmit} className=" sm:mt-96 md:w-full bg-cajita xl:mt-20 max-w-lg p-4 m-auto rounded-md">
        <label htmlFor="title" className="block text-sm font-bold pb-2">Task:</label>
        <input 
        required 
        name='title' 
        value={task.title} 
        onChange={handleChange}
        type="text" 
        placeholder="title" 
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        autoFocus 
        />
        <label htmlFor="description" className="block text-sm font-bold pb-2">Description:</label>
        <textarea
        required 
        onChange={handleChange} 
        name="description" 
        placeholder="description" 
        value={task.description} 
        className="overflow-hidden resize-none w-full p-2 rounded-md bg-zinc-600 mb-2">
        </textarea>
        <button type="submit" className='bg-indigo-600 px-2 py-1'>Guardar</button>
    </form>
  )
}
export default TaskForm
