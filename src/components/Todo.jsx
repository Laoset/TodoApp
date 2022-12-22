import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
//Mi estado 
  const [edit, setEdit]= useState({
    id: null,
    value: ''
})
//Submit del TODO editado
  const submitUpdate = value => {
    //Actualizo mi updateTodo con esos valores
    updateTodo(edit.id, value)
    //Actualio mi estado con un similar al original 
    setEdit({
        id:null,
        value:''
    })
  }
  //Pregunto si EXISTE!
  if (edit.id){
    //entonces retorname mi FORM con lo editado 
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }
    
   return todos.map((todo, index)=>( 
    //Esto es logica para mostrar distinto estilo depende si esta completo o no    
    <div 
    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine
            //Hace click y elimina el id del todo seleccionado
                onClick={()=> removeTodo(todo.id)}
                className='delete-icon'
            />
            <TiEdit
            onClick={()=> setEdit({id:todo.id, value:todo.text})}
            className='edit-icon'
            />
        </div>
    </div>
  ))
}

export default Todo